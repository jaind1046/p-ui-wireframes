import React from "react";
import {
	ResponsiveContainer,
	LineChart,
	Line,
	CartesianGrid,
	Legend,
	XAxis,
	YAxis,
} from "recharts";

const LineGraph = ({ data }) => {
	const dotStyle = { strokeWidth: 5.5, r: 5.5 };

	return (
		<ResponsiveContainer>
			<LineChart
				width={600}
				height={300}
				data={data}
				margin={{ top: 5, right: 30, left: 20, bottom: 25 }}
			>
				<CartesianGrid stroke="#ccc" vertical={false} />
				<XAxis hide={true} />
				<YAxis
					axisLine={false}
					type="number"
					//domain={["dataMin", 25000]}
					tickCount={6}
					tick={{ transform: "translate(-10, 0)", fontSize: "14px" }}
					tickLine={false}
				/>
				<Legend iconSize={34} wrapperStyle={{ bottom: 0 }} />
				<Line
					dataKey="safe"
					name="Safe"
					stroke="#7394ca"
					fill="#7394ca"
					strokeWidth={5}
					dot={dotStyle}
				/>
				<Line
					dataKey="blocked"
					name="Blocked"
					stroke="#e1974e"
					fill="#e1974e"
					strokeWidth={5}
					dot={dotStyle}
				/>
				<Line
					dataKey="checked"
					name="Checked"
					stroke="#d9d9d9"
					fill="#d9d9d9"
					strokeWidth={5}
					dot={dotStyle}
				/>
				<Line
					dataKey="dangerous"
					name="Dangerous"
					stroke="#E6CC70"
					fill="#E6CC70"
					strokeWidth={5}
					dot={dotStyle}
				/>
				<Line
					dataKey="unclassified"
					name="Unclassified"
					stroke="#11b4e4"
					fill="#11b4e4"
					strokeWidth={5}
					dot={dotStyle}
				/>
			</LineChart>
		</ResponsiveContainer>
	);
};

export default LineGraph;
