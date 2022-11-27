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
    const [isLoaded, setIsLoaded] = useState(false); const [items, setItems] = useState([]);
    const { id } = useParams(); //Récupération de l'id envoyé en URL
    useEffect(() => {
        Get('http://localhost:3000/user/'+id)
            .then(result => {
                console.log(result)
                setIsLoaded(true);
                setItems(result.data)
                console.log(result.data)
            })
    }, [id])
    if (!isLoaded) {
        return <div>Chargement...</div>;
    }
    else {
        return (
            <div className="User">
                <h2 className="Title">Bonjour <span className="Color">{items.userInfos.firstName}</span></h2>
                <span className="Objective">Félicitation ! Vous avez explosé vos objectifs hier 👏</span>


                <div className="SummaryWrapper">
                    <div className="ChartsWrapper">
                        <BarChartGraph />
                    </div>

                    <div className="UserWrapper">
                        <Card rectangleBackground="#FBEAEA" icon={CaloriesIcon} data={items.keyData.calorieCount} metric="kCal" label="Calories" />
                        <Card rectangleBackground="#E9F4FB" icon={ProteineIcon} data={items.keyData.proteinCount} metric="g" label="Proteines" />
                        <Card rectangleBackground="#FAF6E5" icon={GlucidesIcon} data={items.keyData.carbohydrateCount} metric="g" label="Glucides" />
                        <Card rectangleBackground="#FBEAEF" icon={LipidesIcon} data={items.keyData.lipidCount} metric="g" label="Lipides" />
                    </div>
                </div>
            </div>
        );
    }
}