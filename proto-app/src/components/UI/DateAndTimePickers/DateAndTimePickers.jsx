import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import { createMuiTheme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";

import { DateTimePicker } from "@material-ui/pickers";

import classes from "./DateAndTimePickers.module.scss";
import Popup from "../Popup/Popup";

const defaultMaterialTheme = createMuiTheme({
	root: {
		background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
		borderRadius: 3,
		border: 0,
		color: "white",
		height: 48,
		padding: "0 30px",
		boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
	},
	palette: {
		primary: { main: "#ffffff" },
	},
	overrides: {
		MuiInput: {
			input: {
				cursor: "pointer",
			},
		},
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

const DateAndTimePickers = ({ externalStyles }) => {
	const [isOpen, setIsOpen] = useState(false);

	const timeIntervalList = [
		{
			name: "1 Hour",
			onClickButtonHandler: () => setIsOpen((prevState) => !prevState),
		},
		{
			name: "12 Hours",
			onClickButtonHandler: () => setIsOpen((prevState) => !prevState),
		},
		{
			name: "24 Hours",
			onClickButtonHandler: () => setIsOpen((prevState) => !prevState),
		},
		{
			name: "Last 7 Days",
			onClickButtonHandler: () => setIsOpen((prevState) => !prevState),
		},
		{
			name: "Custom Range",
			onClickButtonHandler: () => setIsOpen((prevState) => !prevState),
		},
	];

	const date = new Date();

	let earlierDate = new Date();
	earlierDate.setMonth(date.getMonth() - 1);
	earlierDate = earlierDate.toISOString().substr(0, 19);

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
				<DateTimePicker
					value={earlierDate}
					InputProps={{ disableUnderline: true, backgroundColor: "red" }}
					variant="inline"
					onChange={handleDateChange}
					disableFuture
					format="dd/MM/yyyy hh:mm a"
					autoOk
				/>
				<p>-</p>
				<DateTimePicker
					value={selectedDate}
					InputProps={{ disableUnderline: true }}
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
