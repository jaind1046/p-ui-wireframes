import React, { useState, useEffect } from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";

const LineChart2 = () => {
	//const chart = () => {
	//	setChartData({
	//		labels: [
	//			"",
	//			"",
	//			"",
	//			"",
	//			"",
	//			"",
	//			"",
	//			"",
	//			"",
	//			"",
	//			"",
	//			"",
	//			"",
	//			"",
	//			"",
	//			"",
	//			"",
	//			"",
	//			"",
	//			"",
	//			"",
	//			"",
	//			"",
	//			"",
	//		],
	//		datasets: [
	//			{
	//				label: "Unclassified",

	//				data: [
	//					0,
	//					0,
	//					0,
	//					0,
	//					0,
	//					0,
	//					0,
	//					0,
	//					0,
	//					300,
	//					200,
	//					300,
	//					200,
	//					0,
	//					0,
	//					0,
	//					0,
	//					0,
	//					0,
	//					0,
	//					0,
	//					0,
	//				],
	//				lineTension: 0,
	//				backgroundColor: ["transparent"],
	//				borderColor: "#818787",
	//				borderWidth: 4,
	//			},
	//			{
	//				label: "Dangerous",
	//				data: [
	//					0,
	//					0,
	//					0,
	//					0,
	//					0,
	//					0,
	//					0,
	//					0,
	//					0,
	//					0,
	//					0,
	//					0,
	//					0,
	//					0,
	//					0,
	//					0,
	//					0,
	//					0,
	//					0,
	//					0,
	//					0,
	//					0,
	//					0,
	//				],
	//				lineTension: 0,
	//				backgroundColor: ["transparent"],
	//				borderColor: "#e1974e",
	//				borderWidth: 4,
	//			},
	//			{
	//				label: "Checked",
	//				data: [
	//					0,
	//					0,
	//					0,
	//					0,
	//					0,
	//					0,
	//					500,
	//					12000,
	//					18000,
	//					21000,
	//					10000,
	//					20000,
	//					18000,
	//					16000,
	//					10000,
	//					3000,
	//					500,
	//					0,
	//					0,
	//					0,
	//					0,
	//					0,
	//				],
	//				lineTension: 0,
	//				backgroundColor: ["transparent"],
	//				borderColor: "#d9d9d9",
	//				borderWidth: 4,
	//			},
	//			{
	//				label: "Blocked",
	//				data: [
	//					0,
	//					0,
	//					0,
	//					0,
	//					0,
	//					0,
	//					0,
	//					0,
	//					5000,
	//					6000,
	//					7000,
	//					2000,
	//					8000,
	//					8000,
	//					7000,
	//					1000,
	//					0,
	//					0,
	//					0,
	//					0,
	//					0,
	//					0,
	//				],
	//				lineTension: 0,
	//				backgroundColor: ["transparent"],
	//				borderColor: "#e1974e",
	//				borderWidth: 4,
	//			},
	//			{
	//				label: "Safe",
	//				data: [
	//					0,
	//					0,
	//					0,
	//					0,
	//					0,
	//					0,
	//					0,
	//					500,
	//					8000,
	//					11000,
	//					13000,
	//					7000,
	//					11000,
	//					10000,
	//					9000,
	//					8000,
	//					4000,
	//					1000,
	//					0,
	//					0,
	//					0,
	//					0,
	//				],
	//				lineTension: 0,
	//				backgroundColor: ["transparent"],
	//				borderColor: "#7394ca",
	//				borderWidth: 4,
	//			},
	//		],
	//	});
	//};

	//useEffect(() => {
	//	chart();
	//}, []);
	//const dots = [{ name: "", y: 2500 }];

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
			date: "0",
			unclassified: 0,
			dangerous: 0,
			checked: 0,
			blocked: 0,
			safe: 0,
		},
		{
			date: "0",
			unclassified: 0,
			dangerous: 0,
			checked: 0,
			blocked: 0,
			safe: 0,
		},
		{
			date: "0",
			unclassified: 0,
			dangerous: 0,
			checked: 0,
			blocked: 0,
			safe: 0,
		},
		{
			date: "0",
			unclassified: 0,
			dangerous: 0,
			checked: 0,
			blocked: 0,
			safe: 0,
		},
		{
			date: "0",
			unclassified: 0,
			dangerous: 0,
			checked: 0,
			blocked: 0,
			safe: 0,
		},
		{
			date: "0",
			unclassified: 0,
			dangerous: 0,
			checked: 0,
			blocked: 0,
			safe: 0,
		},
		{
			date: "0",
			unclassified: 0,
			dangerous: 0,
			checked: 0,
			blocked: 0,
			safe: 0,
		},
		{
			date: "0",
			unclassified: 0,
			dangerous: 0,
			checked: 0,
			blocked: 0,
			safe: 0,
		},
		{
			date: "0",
			unclassified: 0,
			dangerous: 0,
			checked: 0,
			blocked: 0,
			safe: 0,
		},
		{
			date: "0",
			unclassified: 0,
			dangerous: 0,
			checked: 0,
			blocked: 0,
			safe: 0,
		},
		{
			date: "0",
			unclassified: 0,
			dangerous: 0,
			checked: 0,
			blocked: 0,
			safe: 0,
		},
		{
			date: "0",
			unclassified: 0,
			dangerous: 0,
			checked: 0,
			blocked: 0,
			safe: 0,
		},
		{
			date: "0",
			unclassified: 0,
			dangerous: 0,
			checked: 0,
			blocked: 0,
			safe: 0,
		},
		{
			date: "0",
			unclassified: 0,
			dangerous: 0,
			checked: 0,
			blocked: 0,
			safe: 0,
		},
		{
			date: "0",
			unclassified: 0,
			dangerous: 0,
			checked: 0,
			blocked: 0,
			safe: 0,
		},
		{
			date: "0",
			unclassified: 0,
			dangerous: 0,
			checked: 0,
			blocked: 0,
			safe: 0,
		},
		{
			date: "0",
			unclassified: 0,
			dangerous: 0,
			checked: 0,
			blocked: 0,
			safe: 0,
		},
		{
			date: "0",
			unclassified: 0,
			dangerous: 0,
			checked: 0,
			blocked: 0,
			safe: 0,
		},
		{
			date: "0",
			unclassified: 0,
			dangerous: 0,
			checked: 0,
			blocked: 0,
			safe: 0,
		},
		{
			date: "0",
			unclassified: 0,
			dangerous: 0,
			checked: 0,
			blocked: 0,
			safe: 0,
		},
		{
			date: "0",
			unclassified: 0,
			dangerous: 0,
			checked: 0,
			blocked: 0,
			safe: 0,
		},
	];
	const dotStyle = { strokeWidth: 3, r: 5.5 };

	return (
		<LineChart width={600} height={300} data={data}>
			{/*<Line type="monotone" dataKey="y" stroke="#8884d8" />*/}
			<CartesianGrid stroke="#ccc" vertical={false} />
			<XAxis
				hide={true}
				//dataKey={"x"}
				//type="dot"
				//dataKey="name"
				//domain={[-1, 24]}
				//ticks={[0, 6, 12, 18]}
				//ticks={false}
				//axisLine={false}
				//tickLine={false}
				//tick={{ fontSize: 12, fill: "#323130" }}
			/>
			<YAxis
				//dataKey={"y"}
				//dataKey="pv"
				type="number"
				//interval="preserveStart"
				////domain={[0, "dataMax + 1000"]}
				//tickCount={7}
				//tick={5000}
				//axisLine={false}
			/>

			<Line
				dataKey={data}
				name="Unclassified"
				stroke="#11b4e4"
				strokeWidth={5}
				dot={dotStyle}
			/>
			{/*<Line
				dataKey="businessRatio"
				name="Business Reviews"
				stroke="#0a78b3"
				strokeWidth={5}
				dot={dotStyle}
			/>*/}
		</LineChart>
	);
};

export default LineChart2;
