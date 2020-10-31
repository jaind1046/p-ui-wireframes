import React, { useState } from "react";
import DateRangePicker from "react-bootstrap-daterangepicker";
import moment from "moment";
import "bootstrap-daterangepicker/daterangepicker.css";
import "./daterangepicker.scss";

import classes from "./Daterangepicker.module.scss";

const Daterangepicker = ({ externalStyles, onCangeChartsData }) => {
	const [state, setState] = useState({
		start: moment().subtract(29, "days"),
		end: moment(),
	});
	const { start, end } = state;

	const handleCallback = (start, end) => {
		setState({ start, end });
		onCangeChartsData({ start, end });
	};

	const label =
		start.format("DD/MM/YYYY hh:mm A") +
		" - " +
		end.format("DD/MM/YYYY hh:mm A");

	return (
		<div className={[classes.Daterangepicker, externalStyles].join(" ")}>
			<div className={classes.intervalButton}>Date/Time</div>
			<DateRangePicker
				initialSettings={{
					timePicker: true,
					startDate: start.toDate(),
					endDate: end.toDate(),
					locale: {
						format: "DD/MM/YYYY hh:mm A",
					},
					ranges: {
						"1 Hour": [
							moment().subtract(1, "hour").toDate(),
							moment().toDate(),
						],
						"12 Hours": [
							moment().subtract(12, "hour").toDate(),
							moment().toDate(),
						],
						"24 Hours": [
							moment().subtract(24, "hour").toDate(),
							moment().toDate(),
						],
					},
				}}
				onCallback={handleCallback}
			>
				<div id="reportrange" className={classes.reportrange}>
					<span>{label}</span>
				</div>
			</DateRangePicker>
		</div>
	);
};

export default Daterangepicker;
