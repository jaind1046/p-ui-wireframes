import React from "react";

import classes from "./RoutesForNonCompliantFiles.module.scss";

import DomainField from "../../../components/DomainField/DomainField";

const RoutesForNonCompliantFiles = ({ userDomain, changeInput }) => {
	return (
		<div className={classes.RoutesForNonCompliantFiles}>
			<section className={classes.routes}>
				<h2>Routes for non-compliant files</h2>
				<p>
					We will route that do not comply with the current for passage onto
					separate file systems.Specified file systems and routing
					mechanism(s) will be determined at the
				</p>
				<div className={classes.table}>
					<DomainField
						name={userDomain}
						onChangeInputHandler={(evt) => changeInput(evt.target.value)}
					/>
				</div>
			</section>
		</div>
	);
};

export default RoutesForNonCompliantFiles;
