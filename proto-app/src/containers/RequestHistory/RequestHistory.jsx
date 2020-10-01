import React, { useState, useContext } from "react";

import GlobalStoreContext from "../../context/globalStore/globalStore-context";

import classes from "./RequestHistory.module.scss";

import Modal from "../../components/Modal/Modal";

import {
	Table,
	TableHead,
	TableRow,
	TableCell,
	TableBody,
	TableSortLabel,
} from "@material-ui/core";

import FileRow from "./FileRow/FileRow";
import Filters from "../../components/Filters/Filters";

const RequestHistory = () => {
	const [sortedRows, setSortedRows] = useState(null);
	const [openModal, setOpenModal] = useState(false);
	const [rowId, setRowId] = useState(null);

	const openInfoModal = (id) => {
		setOpenModal((prevState) => !prevState);
		setRowId(id);
	};

	const closeInfoModal = () => {
		setOpenModal(false);
	};

	const { userfiles, selectedFilters } = useContext(GlobalStoreContext);

	const getSortedRows = (rows, sortLabel) => {
		let sortedRows;
		switch (sortLabel) {
			case "timestamp":
				setSortedRows(
					rows.sort(
						(a, b) =>
							new Date(a.props.timestamp).getTime() -
							new Date(b.props.timestamp).getTime()
					)
				);
				break;
			case "fileId":
				setSortedRows(
					rows.sort((a, b) => {
						if (a.props.fileId < b.props.fileId) return -1;
						if (a.props.fileId > b.props.fileId) return 1;
						return 0;
					})
				);
				break;
			case "fileType":
				setSortedRows(
					rows.sort((a, b) => {
						if (a.props.type < b.props.type) return -1;
						if (a.props.type > b.props.type) return 1;
						return 0;
					})
				);
				break;

			case "outcome":
				setSortedRows(
					rows.sort((a, b) => {
						if (a.props.type < b.props.type) return -1;
						if (a.props.type > b.props.type) return 1;
						return 0;
					})
				);
				break;

			default:
				sortedRows = rows;
				break;
		}
		return sortedRows;
	};

	let filteredUserfiles = userfiles;

	if (selectedFilters.length > 0) {
		filteredUserfiles = userfiles.filter(
			(file) =>
				file.type.toLowerCase() === selectedFilters[0].value.toLowerCase()
		);
	}

	const fileInfo = filteredUserfiles.find((it) => it.id === rowId);

	const rows = filteredUserfiles.map(
		({ id, timestamp, fileId, name, type, outcome }) => {
			return (
				<FileRow
					key={id}
					id={id}
					timestamp={timestamp}
					fileId={fileId}
					name={name}
					type={type}
					outcome={outcome}
					onRowClickHandler={(evt) => openInfoModal(evt.target.id)}
				/>
			);
		}
	);

	return (
		<article className={classes.RequestHistory}>
			<Filters />
			<div className={classes.wrapTable}>
				<Table className={classes.table}>
					<TableHead>
						<TableRow>
							<TableCell>
								<TableSortLabel
									onClick={() => getSortedRows(rows, "timestamp")}
								>
									Timestamp
								</TableSortLabel>
							</TableCell>

							<TableCell>
								<TableSortLabel onClick={() => getSortedRows(rows, "fileId")}>
									File ID
								</TableSortLabel>
							</TableCell>

							<TableCell>
								<TableSortLabel
									onClick={() => getSortedRows(rows, "fileType")}
								>
									File Type
								</TableSortLabel>
							</TableCell>

							<TableCell>
								<TableSortLabel
									onClick={() => getSortedRows(rows, "outcome")}
								>
									Outcome
								</TableSortLabel>
							</TableCell>
						</TableRow>
					</TableHead>
					<TableBody className={classes.tbody}>
						{sortedRows || rows}
					</TableBody>
				</Table>
			</div>
			{openModal && <Modal data={fileInfo} onClose={closeInfoModal} />}
		</article>
	);
};

export default RequestHistory;
