import React from "react";
import './Card.css'

export default function Card(props) {
    return(
        <div className="Calories">
            <div className="CaloriesWrapper">
                <div className="RectangleBackground" style={{ backgroundColor: props.rectangleBackground }}>
                    <img src={props.icon} alt="pictogramme" />
                </div>
                <div className="InfosWrapper">
                    <span className="Data">
                        {props.data}{props.metric}
                    </span>
                    <span className="Label">
                        {props.label}
                    </span>
                </div>
            </div>
        </div>
    );
}