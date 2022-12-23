import React from "react";
import './CustomTooltips.css'

export default function CustomTooltips({ active, payload, label }) {
    if (active && payload && payload.length) {
        return (
            <div className="CustomTooltips">
                <span className="CustomTooltips--Kg">{payload[0].value}kg</span>
                <span className="CustomTooltips--Kcal">{payload[1].value}Kcal</span>
            </div>
        );
    }
}