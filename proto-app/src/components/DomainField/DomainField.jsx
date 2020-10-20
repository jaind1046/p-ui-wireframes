import React from "react";

import {
	Table,
	TableHead,
	TableRow,
	TableCell,
	TableBody,
} from "@material-ui/core";

import classes from "./DomainField.module.scss";
import { ReactComponent as TickIcon } from "../../assets/tick-icon.svg";
import { ReactComponent as DeleteIcon } from "../../assets/delete-icon-white.svg";

import Input from "../UI/Input/Input";

const DomainField = ({ name, onChangeInputHandler, disabled }) => {
	return (
		<Table className={classes.table}>
			<TableHead>
				<TableRow>
					<TableCell>Domain Name</TableCell>
					<TableCell>Validated</TableCell>
				</TableRow>
			</TableHead>
			<TableBody className={classes.tbody}>
				<TableRow className={classes.domainRow}>
					<TableCell>
						<Input
							type="text"
							value={name}
							onChange={onChangeInputHandler}
							disabled={disabled}
						/>
					</TableCell>
					<TableCell>
						<TickIcon stroke="#73AE6F" />
						<DeleteIcon stroke="#D69598" />
					</TableCell>
				</TableRow>
			</TableBody>
		</Table>
		//<div className={classes.DomainField}>
		//	<div className={classes.td}>
		//		<Input
		//			type="text"
		//			value={name}
		//			onChange={onChangeInputHandler}
		//			disabled={disabled}
		//		/>
		//		<div className={classes.validated}>
		//			<TickIcon stroke="#73AE6F" />
		//			<DeleteIcon stroke="#D69598" />
		//		</div>
		//	</div>
		//</div>
	);
};

export default DomainField;
