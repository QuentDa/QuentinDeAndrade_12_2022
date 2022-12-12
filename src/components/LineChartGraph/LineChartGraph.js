import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import './LineChartGraph.css'

export default function LineChartGraph(props) {
    return (
        <div className="LineChartGraph">
            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                    width={500}
                    height={300}
                    data={props.data}
                    margin={{
                        top: 120,
                        right: 0,
                        left: 0,
                        bottom: 20,
                    }}
                >
                    <XAxis dataKey="day" tickLine={false} axisLine={false} height={35} padding={{left: 20, right: 20}} />
                    <YAxis tickLine={false} axisLine={false} hide={true} />
                    <Tooltip />
                    <Line type="monotone" dataKey="sessionLength" stroke="#FFFFFF" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}