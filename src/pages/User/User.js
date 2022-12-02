import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import './User.css'
import { Get } from "../../service/Api.js";
import BarChartGraph from "../../components/BarChartGraph/BarChartGraph";
import Card from "../../components/Card/Card";
import CaloriesIcon from './../../assets/svg/Calories.svg'
import ProteineIcon from './../../assets/svg/Proteines.svg'
import GlucidesIcon from './../../assets/svg/apple.svg'
import LipidesIcon from './../../assets/svg/cheeseburger.svg'


export default function User() {
    const [isLoaded, setIsLoaded] = useState(false); const [infos, setInfos] = useState([]); const [activities, setActivities] = useState([]); const [sessions, setSessions] = useState([])
    const { id } = useParams(); //Récupération de l'id envoyé en URL
    useEffect(() => {
        Get('http://localhost:3000/user/' + id)
            .then(result => {
                setInfos(result.data)
            })
        Get('http://localhost:3000/user/' + id +'/activity')
            .then(result => {                
                setActivities(result.data)
                
            } )
        Get('http://localhost:3000/user/' + id +'/average-sessions')
            .then(result => {
                setIsLoaded(true);
                setSessions(result.data)
            })
    }, [id])
    if (!isLoaded) {
        return <div>Chargement...</div>;
    }
    else {
        return (
            <div className="User">
                <h2 className="Title">Bonjour <span className="Color">{infos.userInfos.firstName}</span></h2>
                <span className="Objective">{sessions.sessions[0].day}Félicitation ! Vous avez explosé vos objectifs hier 👏</span>


                <div className="SummaryWrapper">
                    <div className="ChartsWrapper">
                        <BarChartGraph data={activities.sessions} />
                    </div>

                    <div className="UserWrapper">
                        <Card rectangleBackground="#FBEAEA" icon={CaloriesIcon} data={infos.keyData.calorieCount} metric="kCal" label="Calories" />
                        <Card rectangleBackground="#E9F4FB" icon={ProteineIcon} data={infos.keyData.proteinCount} metric="g" label="Proteines" />
                        <Card rectangleBackground="#FAF6E5" icon={GlucidesIcon} data={infos.keyData.carbohydrateCount} metric="g" label="Glucides" />
                        <Card rectangleBackground="#FBEAEF" icon={LipidesIcon} data={infos.keyData.lipidCount} metric="g" label="Lipides" />
                    </div>
                </div>
            </div>
        );
    }
}