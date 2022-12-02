import React from 'react';
import { BarChart, Bar, XAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, YAxis } from 'recharts';
import formatDate from '../../service/utils/activity/formatDate';
import './BarChartGraph.css'

export default function BarChartGraph(props) {
   formatDate(props.data)

    return (
        <div className="Daily">
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    width={500}
                    height={300}
                    barGap={10}
                    data={props.data}
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
                    <Legend layout="horizontal" verticalAlign="top" align="right" height={60} iconType='circle' iconSize={10} formatter={(value, entry, index) => <span className='LegendText'>{value}</span>}  />
                    <Bar name="Poids (kg)" dataKey="kilogram" fill="#282D30" barSize={10} radius={[10, 10, 0, 0]} />
                    <Bar name="Calories brûlées (kCal)" dataKey="calories" fill="#E60000" barSize={10} radius={[10, 10, 0, 0]} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}