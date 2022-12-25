import React from "react";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import './RadarChartGraph.css'
import formatKind from "../../service/utils/performance/formatKind";

export default function RadarChartGraph(props) {
    formatKind(props.data)
    return (
        <div className="RadarChartGraph">
            <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={props.data} margin={{left: 30, right: 30, top: 30, bottom: 30}}>
                    <PolarGrid radialLines={false} />
                    <PolarAngleAxis dataKey="kind" stroke="#FFFFFF" tickLine={false} dy={5} />
                    <Radar dataKey="value" stroke="#FF0101B2" fill="#FF0101B2" fillOpacity={0.6} />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    );
}