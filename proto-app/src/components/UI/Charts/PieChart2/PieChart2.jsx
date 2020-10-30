import React from "react";
import {
	PieChart,
	Pie,
	Legend,
} from "recharts";

import "./pieChart2.scss";

const PieChart2 = () => {
	const data = [
		{ value: 8040, name: "Safe", fill: "#7394ca" },
		{ value: 4384, name: "Blocked", fill: " #e1974e" },
		{ value: 113, name: "Dangerous", fill: "#818787" },
		{ value: 317, name: "Unclassified", fill: "#ccc374" },
	];

	const DEGREE = Math.PI / 180;
	const renderCustomizedLabel = ({
		cx,
		cy,
		value,
		midAngle,
		innerRadius,
		outerRadius,
	}) => {
		if (value < 2000) {
			const sin = Math.sin(-DEGREE * midAngle);
			const cos = Math.cos(-DEGREE * midAngle);
			const sx = cx + (outerRadius + 1) * cos;
			const sy = cy + outerRadius * sin;

			const mx = cx + (outerRadius + 30) * cos;
			const my = cy + (outerRadius + 30) * sin;
			const ex = mx + (cos >= 0 ? 1 : -1) * 22;

			const ey = my;
			const textAnchor = cos >= 0 ? "start" : "end";

			return (
				<>
					<path
						d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
						stroke="#333"
						fill="none"
					/>
					<text
						x={ex + (cos >= 0 ? 1 : -1)}
						y={ey - 7}
						dy={2}
						textAnchor={textAnchor}
						dominantBaseline="central"
						fill="#333"
					>
						{value}
					</text>
				</>
			);
		} else {
			let radius = innerRadius + (outerRadius - innerRadius) * 0.5;
			const x = cx + radius * Math.cos(-midAngle * DEGREE);
			const y = cy + radius * Math.sin(-midAngle * DEGREE);
			return (
				<text
					x={x}
					y={y}
					textAnchor={x > cx ? "start" : "end"}
					dominantBaseline="central"
				>
					{value}
				</text>
			);
		}
	};

	return (
		<PieChart width={400} height={300}>
			<Pie
				data={data}
				cx="50%"
				cy="50%"
				outerRadius={100}
				dataKey="value"
				removed
				line
				value
				labelLine={false}
				label={renderCustomizedLabel}
			/>
			<Legend iconSize={10} />
			{/*<Tooltip />*/}
		</PieChart>
	);
};

export default PieChart2;
