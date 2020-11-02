import React from "react";
import { PieChart, Pie, Legend } from "recharts";

import "./pieGraph.scss";
import colours from "../../../../data/charts/colours.json";

const PieGraph = ({ rawData, labelInnerGapDegree = 1 }) => {
	const initialAngle = 0; //Math.PI / 2;
	const textScale = 1;
	const labelHeight = 22 / textScale;
	const charWidth = 9 / textScale;
	const outerLabelMargin = 20; // pixels - minimal gap between pie outer border to any label corner
	// const outerReferenceRadius = 1 + outerLabelMargin / textScale;
	const epsilon = 1e-5;
	const innerLabelCenterCircle = 0.6; // normalized to 1
	const outerRadius = 100;

	let data = [];
	let total = 0;
	// minimal gap for fitting label in the sector. If not fit - use outer reference
	const labelInnerGap = 0; //labelInnerGapDegree * Math.PI / 180;
	if (rawData && rawData.length) {
		data = colours
			.map((entry) => {
				let entries = Object.keys(entry);
				if (entries.length > 0) {
					const series = entries[0];
					const value = rawData.reduce(
						(sum, spot) => sum + parseFloat(spot[series]),
						0
					);
					const name =
						series[0].toUpperCase() + series.slice(1).toLocaleLowerCase(); // capitalize
					const fill = entry[series];
					return { value, name, fill };
				}
				return null;
			})
			.filter((d) => {
				if (d) {
					total += d.value;
				}
				return d;
			});
	}

	const angles = data.map((series) => (series.value / total) * Math.PI * 2);
	const labelMetrics = data.reduce((o, series, index) => {
		const startAngle = index > 0 ? o[index - 1].endAngle : initialAngle;
		const angle = angles[index];
		const endAngle = startAngle + angle;
		const midAngle = (startAngle + endAngle) / 2;
		const { name, fill } = series;
		const labelWidth = data[index].value.toString().length * charWidth;
		const x = 0;
		const y = 0;
		const coords = {
			tl: { x, y },
			tr: { x, y },
			bl: { x, y },
			br: { x, y },
			c: { x, y },
		};
		coords.bl.x = coords.tl.x = -labelWidth / 2;
		coords.bl.y = coords.br.y = labelHeight / 2;
		coords.br.x = coords.tr.x = labelWidth / 2;
		coords.tl.y = coords.tr.y = -labelHeight / 2;

		let hShift = Math.cos(-midAngle) < 0;
		const basePoint = "b" + (hShift ? "r" : "l");
		let vShift = false;

		const fitRect = moveToPolar(coords, {
			alpha: midAngle,
			r: innerLabelCenterCircle * outerRadius,
			clone: true,
		});
		let fit = true;
		Object.values(fitRect).some((corner) => {
			const { x, y } = corner;
			let cornerAngle = Math.atan(Math.abs(y / x));
			const quadrant = getQuadrant(corner);
			cornerAngle += (Math.PI / 2) * quadrant;

			if (
				cornerAngle + initialAngle < startAngle + labelInnerGap ||
				cornerAngle + initialAngle > endAngle - labelInnerGap
			) {
				fit = false;
				return true;
			}
			return false;
		});

		o[index] = {
			index,
			angle,
			endAngle,
			midAngle,
			startAngle,
			coords,
			name,
			basePoint,
			labelWidth,
			hShift,
			vShift,
			fit,
			fill,
		};
		return o;
	}, {});

	const lastIndex = data.length - 1;
	let index = 0;

	function resolveOverlapping(
		currentOverlap,
		nextOverlap,
		currentSeries,
		nextSeries
	) {
		const horizontalShift = nextOverlap.bl.x - currentOverlap.bl.x;
		const verticalShift = nextOverlap.bl.y - currentOverlap.bl.y;
		const angle = Math.atan(Math.abs(verticalShift / horizontalShift));
		const moving = { horizontal: true, vertical: true };
		if (angle < Math.PI / 6) {
			moving.vertical = false;
		} else if (angle > Math.PI / 3) {
			moving.horizontal = false;
		}
		const x = 0;
		const y = 0;
		const movingVectors = { current: { x, y }, next: { x, y } };
		const { current, next } = movingVectors;
		const quadrant = getQuadrant(nextOverlap.bl);
		if (moving.vertical) {
			const shift = verticalShift + labelHeight;
			if (quadrant < 2) {
				current.y = shift / 2;
				next.y = -shift / 2;
			} else {
				current.y = -shift / 2;
				next.y = shift / 2;
			}
		}
		if (moving.horizontal) {
			const additionalGap = 10;
			if (quadrant < 2) {
				// next.x -= nextSeries.labelWidth + additionalGap / 2;
				next.x -= additionalGap / 2;
				current.x += additionalGap / 2;
				nextSeries.basePoint = "br";
				nextSeries.hShift = true;
			} else {
				current.x -= additionalGap / 2;
				// current.x -= currentSeries.labelWidth + additionalGap / 2;
				next.x += additionalGap / 2;
				currentSeries.basePoint = "br";
				currentSeries.hShift = true;
			}
		}
		return { current, next };
	}

	do {
		const currentSeries = labelMetrics[index];
		const { fit } = currentSeries;
		if (!fit) {
			const nextIndex = index === lastIndex ? 0 : index + 1;
			const nextSeries = labelMetrics[nextIndex];
			if (!nextSeries.fit) {
				const currentClone = moveToOuterPostion(currentSeries, {
					clone: true,
				});
				const nextClone = moveToOuterPostion(nextSeries, { clone: true });
				const overlapping =
					isOverlapping(currentClone, nextClone) ||
					isOverlapping(nextClone, currentClone);
				if (overlapping) {
					const { current, next } = resolveOverlapping(
						currentClone,
						nextClone,
						currentSeries,
						nextSeries
					);
					moveTo(currentSeries.coords, current);
					moveTo(nextSeries.coords, next);
					index++;
				}
			}
		}
	} while (++index <= lastIndex);

	function isInside(point, rect) {
		const { bl, tr } = rect;
		const { x, y } = point;

		return (
			x + epsilon > bl.x &&
			x - epsilon < tr.x &&
			y - epsilon < bl.y &&
			y + epsilon > tr.y
		);
	}

	function isOverlapping(rect, anotherRect) {
		let overlap = false;
		Object.keys(rect).some((corner) => {
			if (corner !== "c") {
				if (isInside(rect[corner], anotherRect)) {
					overlap = true;
				}
			}
			return overlap;
		});
		return overlap;
	}

	function getQuadrant({ x, y }) {
		if (x >= -epsilon && y < -epsilon) {
			return 0;
		} else if (x < -epsilon && y < -epsilon) {
			return 1;
		} else if (x < 0 && y >= -epsilon) {
			return 2;
		} else if (x >= -epsilon && y >= -epsilon) {
			return 3;
		}
		return null;
	}

	// if label bounds are intersecting the external circle,
	// the function finds minimal increased radius to avoid this.
	// External circle is an additional space or margin
	// between outer Pie bound to any sector labels' bounds.
/*
	function extendRadiusForLabelCorner(alpha, h, r = 1) {
		if (r <= h) {
			console.warn('Broken contract: Radius should be great then text height');
		}

		let beta; // second angle against h edge
		let gamma // third angle against extended chord
		let ret;
		const D = h / r * Math.sin(alpha);
		if (D > 1) {
			// TODO no solution. wrong data
			console.warn('Panic. Error in program logic!');
		}
		if ( Math.abs(D - 1) <= epsilon) {
			beta = Math.PI / 2;
		} else {
			beta = Math.asin(D);
		}
		gamma = Math.PI - alpha - beta;
		return r * Math.sin(gamma) / Math.sin(alpha);
	}
*/

	function doClone(rect) {
		const { bl, br, tl, tr, c } = rect;
		rect = {
			bl: { ...bl },
			br: { ...br },
			tl: { ...tl },
			tr: { ...tr },
			c: { ...c },
		};
		return rect;
	}

	function moveTo(rect, { x = 0, y = 0, clone = false }) {
		if (clone) {
			rect = doClone(rect);
		}
		Object.values(rect).forEach((corner) => {
			corner.x += x;
			corner.y += y;
		});
		return rect;
	}

	/*
	function centerTo(rect, {x: x = 0, y: y = 0, clone = false}) {
		if (clone) {
			rect = doClone(rect);
		}
		const {bl, tr} = rect;
		const center = {
			x: (tr.x + bl.x) / 2,
			y: (tr.y + bl.y) / 2,
		}

		const vector = {
			x: center.x - x,
			y: y - center.y
		}
		return moveTo(rect, vector);
	}
*/

	function toCorner(
		rect,
		/*String*/ corner,
		{ x = 0, y = 0, clone = false } = {}
	) {
		if (clone) {
			rect = doClone(rect);
		}
		const vector = {
			x: x - rect[corner].x,
			y: y - rect[corner].y,
		};
		return moveTo(rect, vector);
	}

	function moveToPolar(rect, { r = 1, alpha = 0, clone = false }) {
		if (clone) {
			rect = doClone(rect);
		}
		const x = Math.cos(-alpha) * r;
		const y = Math.sin(-alpha) * r;
		Object.values(rect).forEach((corner) => {
			corner.x += x;
			corner.y += y;
		});
		return rect;
	}

	/*
	function toRadian(a) {
		return a * Math.PI / 180;
	}
*/

	function moveToOuterPostion(series, { clone = false } = {}) {
		const externalRadius = outerRadius + outerLabelMargin;
		let { coords } = series;
		const { basePoint, midAngle } = series;

		if (clone) {
			coords = doClone(coords);
		}
		toCorner(coords, basePoint, coords.c);
		moveToPolar(coords, { alpha: midAngle, r: externalRadius });

		return coords;
	}

	const renderCustomizedLabel = ({
		cx,
		cy,
		value,
		// midAngle,
		outerRadius,
		name,
	}) => {
		const series = Object.values(labelMetrics).filter(
			(metric) => metric.name === name
		)[0];
		const { coords, midAngle, basePoint, labelWidth, hShift, fit } = series;

		// midAngle = toRadian(midAngle);
		// startAngle = toRadian(startAngle);
		// endAngle = toRadian(endAngle);

		if (!fit) {
			const { moved, fill } = series;
			if (!moved) {
				moveToOuterPostion(series);
				series.moved = true;
			}

			const textAnchor = hShift ? "end" : "start";

			const sx = cx + outerRadius * Math.cos(-midAngle);
			const sy = cy + outerRadius * Math.sin(-midAngle);

			const mx = cx + coords[basePoint].x;
			const my = cy + coords[basePoint].y;

			const ex = mx + (hShift ? -1 : 1) * labelWidth * textScale;
			const ey = my;
			const textX = mx;
			const textY = my - 12;

			/*
			if (hShift || vShift) {
				if (vShift) {
					debugger;
					const extRadius = extendRadiusForLabelCorner(midAngle - Math.PI, labelHeight);
					const dr = extRadius - 1;
					moveVector.x += Math.sin(-midAngle) * dr * (hShift ? 1 : -1);
					moveVector.y += Math.cos(-midAngle) * dr;
				}
				moveTo(coords, moveVector, false);
			}
*/

			return (
				<>
					<path
						d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
						stroke={"#333"}
						fill="none"
					/>
					<text
						x={textX}
						y={textY}
						dy={2}
						textAnchor={textAnchor}
						dominantBaseline="central"
						fill={fill}
						fontSize="16px"
					>
						{value}
					</text>
				</>
			);
		} else {
			const { moved } = series;
			if (!moved) {
				moveToPolar(coords, {
					alpha: midAngle,
					r: outerRadius * innerLabelCenterCircle,
				});
				series.moved = true;
			}
			const {
				bl: { x, y },
			} = coords;
			return (
				<text
					x={x * textScale + cx}
					y={y * textScale + cy}
					fill={"#FFFFFF"}
					fontSize="16px"
				>
					{value}
				</text>
			);
		}
	};

	return (
		<PieChart width={400} height={320}>
			<Pie
				data={data}
				cx="50%"
				cy="50%"
				outerRadius={outerRadius}
				dataKey="value"
				removed
				line
				value
				startAngle={(initialAngle * 180) / Math.PI}
				endAngle={((initialAngle + 2 * Math.PI) * 180) / Math.PI}
				labelLine={false}
				label={renderCustomizedLabel}
			/>
			<Legend iconSize={10} iconType="square" />
		</PieChart>
	);
};

export default PieGraph;
