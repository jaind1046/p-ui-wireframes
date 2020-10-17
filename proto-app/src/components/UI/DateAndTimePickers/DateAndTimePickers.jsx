import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import { createMuiTheme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";

import { KeyboardDateTimePicker } from "@material-ui/pickers";

import classes from "./DateAndTimePickers.module.scss";
import Popup from "../Popup/Popup";

const defaultMaterialTheme = createMuiTheme({
	palette: {
		primary: { main: "#ffffff" },
	},
	overrides: {
		MuiPickersDay: {
			daySelected: {
				backgroundColor: "#4592b0",
			},
		},

		MuiPickersClockNumber: {
			clockNumberSelected: {
				backgroundColor: "#4592b0",
			},
		},
	},
});

const timeIntervalList = [
	{ name: "1 Hour" },
	{ name: "12 Hours" },
	{ name: "24 Hours" },
	{ name: "Last 7 Days" },
	{ name: "Custom Range" },
];

const DateAndTimePickers = ({ externalStyles }) => {
	const [isOpen, setIsOpen] = useState(false);

	const date = new Date();

	let earlierDate = new Date();
	earlierDate.setMonth(date.getMonth() - 1);
	earlierDate = earlierDate.toISOString().substr(0, 19);

	const [clearedDate, handleClearedDateChange] = useState(null);
	const [selectedDate, handleDateChange] = useState(new Date());

	return (
		<div className={[classes.DateAndTimePickers, externalStyles].join(" ")}>
			<button
				className={classes.intervalButton}
				onClick={() => setIsOpen((prevState) => !prevState)}
			>
				Date/Time
			</button>

			<ThemeProvider theme={defaultMaterialTheme}>
				<KeyboardDateTimePicker
					value={selectedDate}
					variant="inline"
					onChange={handleDateChange}
					disableFuture
					format="dd/MM/yyyy hh:mm a"
					autoOk
				/>
				<p>-</p>
				<KeyboardDateTimePicker
					value={earlierDate}
					variant="inline"
					onChange={handleDateChange}
					disableFuture
					format="dd/MM/yyyy hh:mm a"
					autoOk
				/>
			</ThemeProvider>

			<CSSTransition
				in={isOpen}
				timeout={300}
				mountOnEnter
				unmountOnExit
				classNames={{
					enter: classes.openPopupEnter,
					enterActive: classes.openPopupEnterActive,
					emterDone: classes.openPopupEnterDone,
					exit: classes.closePopupExit,
					exitActive: classes.closePopupExitActive,
					exitDone: classes.closePopupExitDone,
				}}
			>
				<Popup
					links={timeIntervalList}
					externalStyles={classes.popup}
					closePopupHover={() => setIsOpen((prevState) => !prevState)}
				/>
			</CSSTransition>
		</div>
	);
};

export default DateAndTimePickers;
