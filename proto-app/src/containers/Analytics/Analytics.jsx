import React from "react";

import classes from "./Analytics.module.scss";

import LineChart from "../../components/UI/Charts/LineChart/LineChart";
import PieChart from "../../components/UI/Charts/PieChart/PieChart";
import InfoBlock from "../../components/UI/InfoBlock/InfoBlock";
import Daterangepicker from "../../components/UI/Daterangepicker/Daterangepicker";

const Analytics = () => {
	return (
		<article className={classes.Analytics}>
			<div className={classes.top}>ICAP requests</div>
			<div className={classes.pickersWrap}>
				<div className={classes.pickersBlock}>
					<h3>Filter</h3>
					<Daterangepicker externalStyles={classes.pickers} />
				</div>
			</div>
			<div className={classes.innerContent}>
				<div className={classes.innerTop}>
					<div className={classes.infoBlocks}>
						<InfoBlock title={"Total files processed"} sum={"134,326"} />
						<InfoBlock title={"Total ICAP requests"} sum={"213,596"} />
						<InfoBlock title={"Max processed files/s"} sum={"75,491"} />
					</div>
					<div className={classes.pieChart}>
						<PieChart />
					</div>
				</div>
				<div className={classes.lineChart}>
					<LineChart />
				</div>
			</div>
		</article>
	);
};

export default Analytics;
