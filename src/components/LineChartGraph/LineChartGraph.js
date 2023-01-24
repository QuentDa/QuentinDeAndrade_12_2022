import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import CustomTooltips from './CustomTooltips/CustomTooltips';
import formatDay from "../../service/utils/session/formatDay";
import PropTypes from 'prop-types';
import './LineChartGraph.css'

export default function LineChartGraph(props) {
    formatDay(props.data)

    return (
        <div className="LineChartGraph">
            <span className="LineChartTitle">Durée moyenne des sessions</span>
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
                    <XAxis dataKey="day" tickLine={false} axisLine={false} height={30} padding={{left: 20, right: 20}} stroke="#FBFBFB" style={{opacity:0.5}} />
                    <YAxis tickLine={false} axisLine={false} hide={true} padding={{bottom: 30}} />
                    <Tooltip  content={<CustomTooltips />} wrapperStyle={{ outline: "none" }} />
                    <Line type="natural" dataKey="sessionLength" stroke="#FBFBFB" strokeWidth={2} dot={false} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}

LineChartGraph.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        day: PropTypes.number.isRequired,
        sessionLength: PropTypes.number.isRequired
    })).isRequired
}