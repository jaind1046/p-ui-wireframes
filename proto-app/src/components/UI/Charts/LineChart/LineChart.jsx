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

const LineGraph = () => {
	const data = [
		{
			date: "0",
			unclassified: 0,
			dangerous: 0,
			checked: 0,
			blocked: 0,
			safe: 0,
		},
		{
			date: "1",
			unclassified: 0,
			dangerous: 0,
			checked: 0,
			blocked: 0,
			safe: 0,
		},
		{
			date: "2",
			unclassified: 0,
			dangerous: 0,
			checked: 0,
			blocked: 0,
			safe: 0,
		},
		{
			date: "3",
			unclassified: 0,
			dangerous: 0,
			checked: 0,
			blocked: 0,
			safe: 0,
		},
		{
			date: "4",
			unclassified: 0,
			dangerous: 0,
			checked: 0,
			blocked: 0,
			safe: 0,
		},
		{
			date: "5",
			unclassified: 0,
			dangerous: 0,
			checked: 0,
			blocked: 0,
			safe: 0,
		},
		{
			date: "6",
			unclassified: 0,
			dangerous: 0,
			checked: 500,
			blocked: 0,
			safe: 0,
		},
		{
			date: "7",
			unclassified: 0,
			dangerous: 0,
			checked: 12000,
			blocked: 0,
			safe: 8000,
		},
		{
			date: "8",
			unclassified: 0,
			dangerous: 0,
			checked: 18000,
			blocked: 5000,
			safe: 11000,
		},
		{
			date: "9",
			unclassified: 300,
			dangerous: 0,
			checked: 21000,
			blocked: 6000,
			safe: 13000,
		},
		{
			date: "10",
			unclassified: 200,
			dangerous: 0,
			checked: 10000,
			blocked: 7000,
			safe: 7000,
		},
		{
			date: "11",
			unclassified: 300,
			dangerous: 0,
			checked: 20000,
			blocked: 2000,
			safe: 11000,
		},
		{
			date: "12",
			unclassified: 200,
			dangerous: 0,
			checked: 18000,
			blocked: 8000,
			safe: 10000,
		},
		{
			date: "13",
			unclassified: 0,
			dangerous: 0,
			checked: 16000,
			blocked: 8000,
			safe: 9000,
		},
		{
			date: "14",
			unclassified: 0,
			dangerous: 0,
			checked: 10000,
			blocked: 7000,
			safe: 8000,
		},
		{
			date: "15",
			unclassified: 0,
			dangerous: 0,
			checked: 3000,
			blocked: 1000,
			safe: 4000,
		},
		{
			date: "16",
			unclassified: 0,
			dangerous: 0,
			checked: 500,
			blocked: 0,
			safe: 1000,
		},
		{
			date: "17",
			unclassified: 0,
			dangerous: 0,
			checked: 0,
			blocked: 0,
			safe: 0,
		},
		{
			date: "18",
			unclassified: 0,
			dangerous: 0,
			checked: 0,
			blocked: 0,
			safe: 0,
		},
		{
			date: "19",
			unclassified: 0,
			dangerous: 0,
			checked: 0,
			blocked: 0,
			safe: 0,
		},
		{
			date: "20",
			unclassified: 0,
			dangerous: 0,
			checked: 0,
			blocked: 0,
			safe: 0,
		},
		{
			date: "21",
			unclassified: 0,
			dangerous: 0,
			checked: 0,
			blocked: 0,
			safe: 0,
		},
		{
			date: "22",
			unclassified: 0,
			dangerous: 0,
			checked: 0,
			blocked: 0,
			safe: 0,
		},
	];
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
					domain={["dataMin", 25000]}
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
