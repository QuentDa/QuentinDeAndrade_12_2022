import React from "react";
import './CustomTooltips.css'

export default function CustomTooltips({ active, payload }) {
    if (active && payload && payload.length) {
        return (
            <div className="CustomTooltips--Sessions">
                <span className="CustomTooltips--Min">{payload[0].value} min</span>
            </div>
        );
    }
}