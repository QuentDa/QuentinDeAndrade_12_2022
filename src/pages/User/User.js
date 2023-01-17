import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import './User.css'
import { GetApiUrl } from "../../service/Api.js";
import BarChartGraph from "../../components/BarChartGraph/BarChartGraph";
import LineChartGraph from "../../components/LineChartGraph/LineChartGraph";
import RadarChartGraph from "../../components/RadarChartGraph/RadarChartGraph";
import PieChartGraph from "../../components/PieChartGraph/PieChartGraph";
import Card from "../../components/Card/Card";
import CaloriesIcon from './../../assets/svg/Calories.svg'
import ProteineIcon from './../../assets/svg/Proteines.svg'
import GlucidesIcon from './../../assets/svg/apple.svg'
import LipidesIcon from './../../assets/svg/cheeseburger.svg'
import Modelisation from "../../service/utils/Modelisation";
import {USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE} from "../../data/data.js"


export default function User() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [infos, setInfos] = useState([]); 
    const [activities, setActivities] = useState([]); 
    const [sessions, setSessions] = useState([]); 
    const [performance, setPerformance] = useState([]);

    /* Grabbing the id in URL */
    const { id } = useParams();
    
    useEffect(() => {
        const useMockedData = false;
        if (useMockedData === false ) {
            GetApiUrl('info', id)
            .then(result => {
                setInfos(Modelisation.prepareInfo(result))
            })
        GetApiUrl('activity', id)
            .then(result => {                
                setActivities(Modelisation.prepareActivity(result))
                
            })
        GetApiUrl('session', id)
            .then(result => {
                setSessions(Modelisation.prepareSession(result))
            })
        GetApiUrl('performance', id)
            .then(result => {
                setIsLoaded(true);
                setPerformance(Modelisation.preparePerformance(result))
            })
        }
        else {
            const parsedId = parseInt(id)
            setInfos(Modelisation.prepareInfo(
                {data: USER_MAIN_DATA.find(element => element.id === parsedId)}
            ));
            setActivities(Modelisation.prepareActivity(
                {data: USER_ACTIVITY.find(element => element.userId === parsedId)}
            ));
            setSessions(Modelisation.prepareSession(
                {data: USER_AVERAGE_SESSIONS.find(element => element.userId === parsedId)}
            ));
            setPerformance(Modelisation.preparePerformance(
                {data: USER_PERFORMANCE.find(element => element.userId === parsedId)}
            ))
            setIsLoaded(true);
        }
    }, [id])
    if (!isLoaded) {
        return <div>Chargement...</div>;
    }
    else {
        return (
            <div className="User">
                <h2 className="Title">Bonjour <span className="Color">{infos.firstName}</span></h2>
                <span className="Objective">Félicitation ! Vous avez explosé vos objectifs hier 👏</span>


                <div className="SummaryWrapper">
                    <div className="ChartsWrapper">
                        <BarChartGraph data={activities.sessions} />
                        
                        <div className="OtherChartsWrapper">
                            <div className="LineChart">
                                <LineChartGraph data={sessions.sessions} />
                            </div>
                            <div className="RadarChart">
                                <RadarChartGraph data={performance.data} />
                            </div>
                            <div className="PieChart">
                                <PieChartGraph data={infos.todayScore} />
                            </div>
                        </div>
                    </div>

                    <div className="UserWrapper">
                        <Card rectangleBackground="#FBEAEA" icon={CaloriesIcon} data={infos.calorieCount} metric="kCal" label="Calories" />
                        <Card rectangleBackground="#E9F4FB" icon={ProteineIcon} data={infos.proteinCount} metric="g" label="Proteines" />
                        <Card rectangleBackground="#FAF6E5" icon={GlucidesIcon} data={infos.carbohydrateCount} metric="g" label="Glucides" />
                        <Card rectangleBackground="#FBEAEF" icon={LipidesIcon} data={infos.lipidCount} metric="g" label="Lipides" />
                    </div>
                </div>
            </div>
        );
    }
}