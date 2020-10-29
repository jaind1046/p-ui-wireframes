import React, { useState, useEffect } from "react";
import ChartistGraph from "react-chartist";

import "./pieChart.scss";

const PieChart = () => {
	let data = {
		series: [
			{ value: 87420, name: "Safe", className: "safe" },
			{ value: 43823, name: "Blocked", className: "blocked" },
			{ value: 313, name: "Dangerous", className: "dangerous" },
			{ value: 1170, name: "Unclassified", className: "unclassified" },
		],
	};

	data.series.map((d) => {
		if (d.value < 10000) {
			console.log(d);
		}
	});

	let options = {
		width: "500px",
		height: "500px",
		donut: false,

		labelPosition: "inside", // or 'outside'

		chartPadding: 80,
		//labelOffset: 140,
		//showLabel: false,
		labelDirection: "neutral", // 'explode' or 'implode'
	};

	let responsiveOptions = [
		//[
		//	"screen and (min-width: 940px)",
		//	{
		//		chartPadding: 80,
		//		labelOffset: 110,
		//		labelInterpolationFnc: function (value) {
		//			return value;
		//		},
		//	},
		//],
		[
			//"screen and (min-width: 1024px)",
			{
				//labelOffset: 80,
				//chartPadding: 0,
			},
		],
	];

	let type = "Pie";

	return (
		<div
			style={
				{
					//width: "50rem",
					//position: "relative",
					//padding: "3rem 3rem 6rem 3rem",
				}
			}
		>
			<div>
				<ChartistGraph
					data={data}
					options={options}
					type={type}
					responsiveOptions={responsiveOptions}
				/>
			</div>
		</div>
	);
};

export default PieChart;
