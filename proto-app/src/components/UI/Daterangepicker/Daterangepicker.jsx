import React, { useState } from "react";
import DateRangePicker from "react-bootstrap-daterangepicker";
import moment from "moment";
import "bootstrap-daterangepicker/daterangepicker.css";
import "./daterangepicker.scss";

import classes from "./Daterangepicker.module.scss";

const Daterangepicker = ({ externalStyles }) => {
	const [state, setState] = useState({
		start: moment().subtract(29, "days"),
		end: moment(),
	});
	const { start, end } = state;
	const handleCallback = (start, end) => {
		setState({ start, end });
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
						Today: [moment().toDate(), moment().toDate()],
						Yesterday: [
							moment().subtract(1, "days").toDate(),
							moment().subtract(1, "days").toDate(),
						],
						"Last 7 Days": [
							moment().subtract(6, "days").toDate(),
							moment().toDate(),
						],
						"Last 30 Days": [
							moment().subtract(29, "days").toDate(),
							moment().toDate(),
						],
						"This Month": [
							moment().startOf("month").toDate(),
							moment().endOf("month").toDate(),
						],
						"Last Month": [
							moment().subtract(1, "month").startOf("month").toDate(),
							moment().subtract(1, "month").endOf("month").toDate(),
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
