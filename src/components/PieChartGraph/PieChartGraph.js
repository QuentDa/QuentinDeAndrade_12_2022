import React from "react";
import { RadialBarChart, PolarAngleAxis, RadialBar, ResponsiveContainer } from 'recharts';
import formatScore from "../../service/utils/score/formatScore";
import PropTypes from 'prop-types';
import './PieChartGraph.css'

export default function PieChartGraph(props) {
    const newScore = formatScore(props.data)
    const todayScoreArray = [{ value: newScore }]

    return (
        <div className="PieChartGraph">
            <span className="PieChartTitle">Score</span>
            <span className="PieChartScoreText"><span className="percentage">{todayScoreArray[0].value}%</span> de votre session</span>
            <ResponsiveContainer width="100%" height="100%">
                <RadialBarChart startAngle={90} endAngle={450} innerRadius="100%" outerRadius="80%" barSize={20} data={todayScoreArray}>
                    <PolarAngleAxis type="number" domain={[0, 100]} angleAxisId={0} tick={false} />
                    <RadialBar
                        label={false}
                        angleAxisId={0}
                        cornerRadius={20}
                        background
                        dataKey="value"
                        fill="#FF0000"
                    />
                </RadialBarChart>
            </ResponsiveContainer>
        </div>
    );
}

PieChartGraph.propTypes = {
    data: PropTypes.number.isRequired
}.isRequired