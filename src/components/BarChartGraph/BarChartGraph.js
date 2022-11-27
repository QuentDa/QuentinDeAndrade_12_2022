import React from 'react';
import { BarChart, Bar, XAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, YAxis } from 'recharts';
import './BarChartGraph.css'

const data = [
    {
        day: '2020-07-01',
        kilogram: 80,
        calories: 240
    },
    {
        day: '2020-07-02',
        kilogram: 80,
        calories: 220
    },
    {
        day: '2020-07-03',
        kilogram: 81,
        calories: 280
    },
    {
        day: '2020-07-04',
        kilogram: 81,
        calories: 290
    },
    {
        day: '2020-07-05',
        kilogram: 80,
        calories: 160
    },
    {
        day: '2020-07-06',
        kilogram: 78,
        calories: 162
    },
    {
        day: '2020-07-07',
        kilogram: 76,
        calories: 390
    },
];

export default function BarChartGraph() {
    return (
        <div className="Daily">
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    width={500}
                    height={300}
                    barGap={10}
                    data={data}
                    margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 20,
                    }}
                >
                    <text x={100} y={30} fill="#20253A" textAnchor='middle' dominantBaseline="central" fontSize="16" fontWeight="500">Activité quotidienne</text>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <YAxis axisLine={false} tickLine={false} orientation="right" />
                    <XAxis dataKey="day" tickLine={false} />
                    <Tooltip  />
                    <Legend layout="horizontal" verticalAlign="top" align="right" height={60} iconType='circle' iconSize={10} />
                    <Bar dataKey="kilogram" fill="#282D30" barSize={10} radius={[10, 10, 0, 0]} />
                    <Bar dataKey="calories" fill="#E60000" barSize={10} radius={[10, 10, 0, 0]} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}