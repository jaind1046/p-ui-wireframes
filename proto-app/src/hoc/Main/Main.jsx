import React from "react";

import classes from "./Main.module.scss";

const Main = ({ title, showTitle, children, expanded }) => {
	if (showTitle && (title === undefined || title === null)) {
		console.error(
			"showTitle is set to true, but no title was supplied to <Main>."
		);
	}

	const classNamesHeading = [classes.pageHeading];
	if (expanded) {
		classNamesHeading.push(classes.expanded);
	}

	return (
		<section className={classes.Main}>
			{showTitle && <h1 className={classNamesHeading.join(" ")}>{title}</h1>}
			<div
				id="main"
				className={`${classes.mainWrap} ${expanded ? classes.expanded : ""} ${
					showTitle ? classes.showTitle : ""
				}`}
			>
				<div className={classes.content}>{children}</div>
			</div>
		</section>
	);
};

export default Main;
