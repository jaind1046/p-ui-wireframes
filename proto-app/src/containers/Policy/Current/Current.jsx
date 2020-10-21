import React, { useState } from "react";
import DomainField from "../../../components/DomainField/DomainField";
import Button from "../../../components/UI/Button/Button";

import {
	Table,
	TableHead,
	TableRow,
	TableCell,
	TableBody,
} from "@material-ui/core";

import classes from "./Current.module.scss";

import CurrentRow from "./CurrentRow/CurrentRow";
import RoutesForNonCompliantFiles from "../RoutesForNonCompliantFiles/RoutesForNonCompliantFiles";
import PolicyForNonCompliantFiles from "../PolicyForNonCompliantFiles/PolicyForNonCompliantFiles";

const Current = ({
	timestamp,
	id,
	email,
	policyFlags,
	changeToggle,
	currentPolicy,
	policy,
	isPolicyChanged,
	cancelChanges,
	saveChanges,
}) => {
	const [userDomain, setUserDomain] = useState("glasswallsolutions.com");
	return (
		<div className={classes.Current}>
			<div className={classes.header}>
				<div className={classes.table}>
					<Table>
						<TableHead>
							<TableRow>
								<TableCell>Timestamp</TableCell>
								<TableCell>Updated By</TableCell>
							</TableRow>
						</TableHead>
						<TableBody className={classes.tbody}>
							<TableRow>
								<TableCell
									component="th"
									scope="row"
									id={currentPolicy ? id : policy.id}
								>
									{currentPolicy ? timestamp : policy.timestamp}
								</TableCell>
								<TableCell
									component="th"
									scope="row"
									id={currentPolicy ? id : policy.id}
								>
									{currentPolicy ? email : policy.userEmail}
								</TableCell>
							</TableRow>
						</TableBody>
					</Table>
				</div>
				{isPolicyChanged && (
					<div className={classes.buttons}>
						<Button
							externalStyles={classes.buttons}
							onButtonClick={cancelChanges}
						>
							Cancel Changes
						</Button>
						<Button
							externalStyles={classes.buttons}
							onButtonClick={saveChanges}
						>
							Save Changes
						</Button>
					</div>
				)}
			</div>
			<div className={classes.innerContent}>
				<h2>Content Flags</h2>
				<div className={classes.toggleBlock}>
					<div>
						<h2>Word</h2>
						<CurrentRow
							block="word"
							itemList={policyFlags.word}
							onChangeHandler={changeToggle}
						/>
					</div>
					<div>
						<h2>Excel</h2>
						<CurrentRow
							block="excel"
							itemList={policyFlags.excel}
							onChangeHandler={changeToggle}
						/>
					</div>
					<div>
						<h2>Powerpoint</h2>
						<CurrentRow
							block="powerpoint"
							itemList={policyFlags.powerpoint}
							onChangeHandler={changeToggle}
						/>
					</div>
					<div>
						<h2>PDF</h2>
						<CurrentRow
							block="pdf"
							itemList={policyFlags.pdf}
							onChangeHandler={changeToggle}
						/>
					</div>
				</div>
				<RoutesForNonCompliantFiles
					userDomain={userDomain}
					changeInput={setUserDomain}
				/>
				<PolicyForNonCompliantFiles />
			</div>
		</div>
	);
};

export default Current;
