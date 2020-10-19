import React from "react";
import classes from "./FileRow.module.scss";
import { TableRow, TableCell } from "@material-ui/core";

const FileRow = ({
	id,
	timestamp,
	fileId,
	name,
	type,
	outcome,
	onRowClickHandler,
}) => {
	return (
		<TableRow className={classes.FileRow} id={id} onClick={onRowClickHandler}>
			<TableCell id={id}>{timestamp}</TableCell>
			<TableCell id={id}>{fileId}</TableCell>
			<TableCell id={id}>{type}</TableCell>
			<TableCell id={id}>{outcome}</TableCell>
		</TableRow>
	);
};

export default FileRow;
