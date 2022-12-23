import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import './LineChartGraph.css'
import formatDay from "../../service/utils/session/formatDay";

export default function LineChartGraph(props) {
    formatDay(props.data)

    return (
        <div className="LineChartGraph">
            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                    data={props.data}
                    margin={{
                        top: 120,
                        right: 0,
                        left: 0,
                        bottom: 20,
                    }}
                >
                    <text x={120} y={30} fill="#FBFBFB" textAnchor='middle' dominantBaseline="central" fontSize="16" style={{opacity: 0.5, width: 20}}>Durée moyenne des sessions</text>
                    <XAxis dataKey="day" tickLine={false} axisLine={false} height={30} padding={{left: 20, right: 20}} stroke="#FBFBFB" />
                    <YAxis tickLine={false} axisLine={false} hide={true} padding={{bottom: 20}} />
                    <Tooltip />
                    <Line type="monotone" dataKey="sessionLength" stroke="#FFFFFF" dot={false} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}