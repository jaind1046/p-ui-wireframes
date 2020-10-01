import React, { useState } from "react";
import classes from "./Modal.module.scss";
import {
	Table,
	TableHead,
	TableRow,
	TableCell,
	TableBody,
} from "@material-ui/core";

import Checkbox from "../UI/Checkbox/Checkbox";
import Backdrop from "../UI/Backdrop/Backdrop";
import ButtonClose from "../UI/ButtonClose/ButtonClose";

const Modal = ({ data, onClose, styleModal }) => {
	const { fileId, outcome, timestamp, type } = data;

	const [blockExpanded, setBlockExpanded] = useState({
		issue: false,
		sanitisation: false,
		remedy: false,
		policyDetails: false,
	});

	let background = null;
	if (outcome === "Safe") {
		background = "#91CAA8";
	} else if (outcome === "Blocked") {
		background = "#E6CC70";
	}

	const clsBlockExpandend = [classes.block];

	return (
		<>
			<section className={classes.Modal} style={styleModal}>
				<header className={classes.header}>
					<h2>File ID: {fileId}</h2>
					<div>
						<span style={{ background }}>{outcome}</span>
						<ButtonClose
							color="#196480"
							width="2rem"
							height="2rem"
							externalStyles={classes.buttonClose}
							onButtonClick={onClose}
						/>
					</div>
				</header>

				<div className={classes.inner}>
					<div className={classes.block}>
						<h3>Request Info</h3>
						<Table className={classes.table}>
							<TableHead>
								<TableRow>
									<TableCell>Timestamp</TableCell>
									<TableCell>Unique File ID</TableCell>
									<TableCell>Detected File Extension</TableCell>
									<TableCell>Risk(Transaction)</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								<TableRow className={classes.noborder}>
									<TableCell>{timestamp}</TableCell>
									<TableCell>{fileId}</TableCell>
									<TableCell>{type}</TableCell>
									<TableCell>{outcome}</TableCell>
								</TableRow>
							</TableBody>
						</Table>
					</div>

					<div className={clsBlockExpandend.join(" ")}>
						<h3>Issue Items</h3>
						<div className={classes.wrapArrow}>
							<Checkbox
								id="span-issue"
								onHandleChange={() =>
									setBlockExpanded((prevState) => ({
										...prevState,
										issue: !prevState.issue,
									}))
								}
								checkboxIcon={<span className={classes.arrow} />}
								checkedIcon={
									<span
										className={[classes.arrow, classes.rotate].join(" ")}
									/>
								}
							/>
						</div>
						{blockExpanded.issue && (
							<Table className={classes.table}>
								<TableHead>
									<TableRow>
										<TableCell>Issue</TableCell>
										<TableCell>Description</TableCell>
										<TableCell>Count</TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									<TableRow>
										<TableCell>0x05cf00ec</TableCell>
										<TableCell>Metadata detected in Created</TableCell>
										<TableCell>1</TableCell>
									</TableRow>
								</TableBody>
							</Table>
						)}
					</div>

					<div className={classes.block}>
						<h3>Sanitisation Items</h3>
						<div className={classes.wrapArrow}>
							<Checkbox
								id="span-sanitisation"
								onHandleChange={() =>
									setBlockExpanded((prevState) => ({
										...prevState,
										sanitisation: !prevState.sanitisation,
									}))
								}
								checkboxIcon={<span className={classes.arrow} />}
								checkedIcon={
									<span
										className={[classes.arrow, classes.rotate].join(" ")}
									/>
								}
							/>
						</div>
						{blockExpanded.sanitisation && (
							<Table className={classes.table}>
								<TableHead>
									<TableRow>
										<TableCell>Issue</TableCell>
										<TableCell>Description</TableCell>
										<TableCell>Count</TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									<TableRow>
										<TableCell>0x05cf00ec</TableCell>
										<TableCell>Metadata detected in Created</TableCell>
										<TableCell>1</TableCell>
									</TableRow>
								</TableBody>
							</Table>
						)}
					</div>

					<div className={classes.block}>
						<h3>Remedy Items</h3>
						<div className={classes.wrapArrow}>
							<Checkbox
								id="span-remedy"
								onHandleChange={() =>
									setBlockExpanded((prevState) => ({
										...prevState,
										remedy: !prevState.remedy,
									}))
								}
								checkboxIcon={<span className={classes.arrow} />}
								checkedIcon={
									<span
										className={[classes.arrow, classes.rotate].join(" ")}
									/>
								}
							/>
						</div>
						{blockExpanded.remedy && (
							<Table className={classes.table}>
								<TableHead>
									<TableRow>
										<TableCell>Issue</TableCell>
										<TableCell>Description</TableCell>
										<TableCell>Count</TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									<TableRow>
										<TableCell>0x05cf00ec</TableCell>
										<TableCell>Metadata detected in Created</TableCell>
										<TableCell>1</TableCell>
									</TableRow>
								</TableBody>
							</Table>
						)}
					</div>

					<div className={classes.block}>
						<div className={classes.wrapArrow}>
							<Checkbox
								id="span-details"
								onHandleChange={() =>
									setBlockExpanded((prevState) => ({
										...prevState,
										policyDetails: !prevState.policyDetails,
									}))
								}
								checkboxIcon={<span className={classes.arrow} />}
								checkedIcon={
									<span
										className={[classes.arrow, classes.rotate].join(" ")}
									/>
								}
							/>
						</div>
						<h3>Content Management Policy Details</h3>
						{blockExpanded.policyDetails && (
							<Table className={classes.table}>
								<TableHead>
									<TableRow>
										<TableCell>Issue</TableCell>
										<TableCell>Description</TableCell>
										<TableCell>Count</TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									<TableRow>
										<TableCell>0x05cf00ec</TableCell>
										<TableCell>Metadata detected in Created</TableCell>
										<TableCell>1</TableCell>
									</TableRow>
								</TableBody>
							</Table>
						)}
					</div>
				</div>
			</section>
			<Backdrop onClickOutside={onClose} />
		</>
	);
};

export default Modal;
