import React from "react";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import formatKind from "../../service/utils/performance/formatKind";
import PropTypes from 'prop-types';
import './RadarChartGraph.css'


export default function RadarChartGraph(props) {
    const formattedData = formatKind(props.data)

    return (
        <div className="RadarChartGraph">
            <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={formattedData} margin={{left: 30, right: 30, top: 30, bottom: 30}}>
                    <PolarGrid radialLines={false} />
                    <PolarAngleAxis dataKey="kind" stroke="#FFFFFF" tickLine={false} dy={5} />
                    <Radar dataKey="value" stroke="#FF0101B2" fill="#FF0101B2" fillOpacity={0.6} />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    );
}

RadarChartGraph.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        value: PropTypes.number.isRequired,
        kind: PropTypes.number.isRequired
    })).isRequired
}