import React, { useState, useEffect } from "react";

import { Pie } from "react-chartjs-2";

const PieChart = () => {
	//const [chartData, setChartData] = useState({});

	//const chart = () => {
	//	setChartData({
	//		labels: ["Safe", "Blocked", "Dangerous", "Unclassified"],
	//		datasets: [
	//			{
	//				data: [87420, 43823, 313, 1770],
	//				backgroundColor: ["#7394ca", "#e1974e", "#818787", "#ccc374"],
	//			},
	//		],
	//	});
	//};

	//useEffect(() => {
	//	chart();
	//}, []);

	return (
		<div
			style={{
				width: "50rem",

				position: "relative",
				padding: "3rem 3rem 6rem 3rem",
			}}
		>
			{/*<ReactSnap>
				{(s) => {
					s.circle(150, 150, 100);
				}}
			</ReactSnap>*/}
			{/*<Pie
				type="pie"
				data={chartData}
				options={{
					hover: {
						animationDuration: 0,
					},
					showAllTooltips: true,
					tooltips: {
						//callbacks: {
						//	label: function (tooltipItem, data) {
						//		var label =
						//			data.datasets[tooltipItem.datasetIndex].label || "";
						//		if (label) {
						//			label += ": ";
						//		}
						//		label += Math.round(tooltipItem.yLabel * 100) / 100;
						//		return label;
						//	},
						//},
					},

					//animation: {
					//	duration: 0,
					//},

					legend: {
						//display: false,
						position: "bottom",

						labels: {
							padding: 10,
							boxWidth: 10,
						},
					},
					//tooltips: {
					//	enabled: false,
					//	custom: function (tooltipModel) {
					//		// Tooltip Element
					//		var tooltipEl = document.getElementById("chartjs-tooltip");

					//		// Create element on first render
					//		if (!tooltipEl) {
					//			tooltipEl = document.createElement("div");
					//			tooltipEl.id = "chartjs-tooltip";
					//			tooltipEl.innerHTML = "<table></table>";
					//			document.body.appendChild(tooltipEl);
					//		}

					//		// Hide if no tooltip
					//		if (tooltipModel.opacity === 0) {
					//			tooltipEl.style.opacity = 0;
					//			return;
					//		}

					//		// Set caret Position
					//		tooltipEl.classList.remove("above", "below", "no-transform");
					//		if (tooltipModel.yAlign) {
					//			tooltipEl.classList.add(tooltipModel.yAlign);
					//		} else {
					//			tooltipEl.classList.add("no-transform");
					//		}

					//		function getBody(bodyItem) {
					//			return bodyItem.lines;
					//		}

					//		// Set Text
					//		if (tooltipModel.body) {
					//			var titleLines = tooltipModel.title || [];
					//			var bodyLines = tooltipModel.body.map(getBody);

					//			var innerHtml = "<thead>";

					//			titleLines.forEach(function (title) {
					//				innerHtml += "<tr><th>" + title + "</th></tr>";
					//			});
					//			innerHtml += "</thead><tbody>";

					//			bodyLines.forEach(function (body, i) {
					//				var colors = tooltipModel.labelColors[i];
					//				var style = "background:" + colors.backgroundColor;
					//				style += "; border-color:" + colors.borderColor;
					//				style += "; border-width: 2px";
					//				var span = '<span style="' + style + '"></span>';
					//				innerHtml += "<tr><td>" + span + body + "</td></tr>";
					//			});
					//			innerHtml += "</tbody>";

					//			var tableRoot = tooltipEl.querySelector("table");
					//			tableRoot.innerHTML = innerHtml;
					//		}

					//		// `this` will be the overall tooltip
					//		var position = this._chart.canvas.getBoundingClientRect();

					//		// Display, position, and set styles for font
					//		tooltipEl.style.opacity = 1;
					//		tooltipEl.style.position = "absolute";
					//		tooltipEl.style.left =
					//			position.left +
					//			window.pageXOffset +
					//			tooltipModel.caretX +
					//			"px";
					//		tooltipEl.style.top =
					//			position.top +
					//			window.pageYOffset +
					//			tooltipModel.caretY +
					//			"px";
					//		tooltipEl.style.fontFamily = tooltipModel._bodyFontFamily;
					//		tooltipEl.style.fontSize = tooltipModel.bodyFontSize + "px";
					//		tooltipEl.style.fontStyle = tooltipModel._bodyFontStyle;
					//		tooltipEl.style.padding =
					//			tooltipModel.yPadding + "px " + tooltipModel.xPadding + "px";
					//		tooltipEl.style.pointerEvents = "none";
					//	},
					//},
					scales: {
						yAxes: [
							{
								display: false,
							},
						],
					},
				}}
			/>*/}
		</div>
	);
};

export default PieChart;
