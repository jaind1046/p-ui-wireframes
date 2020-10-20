import React, { useState, useContext } from "react";
import {
	Table,
	TableHead,
	TableRow,
	TableCell,
	TableBody,
} from "@material-ui/core";

import { PolicyContext } from "../../context/policy/policy-context";

import classes from "./Policy.module.scss";

import prevPolicy from "../../data/prevPolicy.json";

import Current from "./Current/Current";
import History from "./History/History";
import DomainField from "../../components/DomainField/DomainField";

import TabNav from "../../components/Tabs/TabNav/TabNav";
import Tab from "../../components/Tabs/Tab/Tab";
import Button from "../../components/UI/Button/Button";

import AllowedIcon from "../../assets/allowed-domains-icon.svg";
import AllowedIconSelected from "../../assets/allowed-domains-icon-selected.svg";
import SystemSettingsSelected from "../../assets/system-settings-icon-selected.svg";
import SystemSettings from "../../assets/system-settings-icon.svg";

const Policy = () => {
	const {
		id,
		email,
		policyFlags,
		timestamp,
		isPolicyChanged,
		changeToggle,
		cancelChanges,
		saveChanges,
	} = useContext(PolicyContext);

	const policy = prevPolicy.find(
		(it) => it.id === "prev-Adam2-20092020165445"
	);

	const [currentPolicy, setCurrentPolicy] = useState(true);
	const [selectedTab, setSelectedTab] = useState("Current");
	const [userDomain, setUserDomain] = useState("glasswallsolutions.com");

	const changeInput = (domain) => {
		setUserDomain(domain);
	};

	const tabs = [
		{ name: "Current" },
		{ name: "History" },
		{
			name: "Non Compliant Files",
			icon: AllowedIcon,
			iconSelected: AllowedIconSelected,
		},
		{
			name: "System Settings",
			icon: SystemSettings,
			iconSelected: SystemSettingsSelected,
		},
		{
			name: "Unprocessable File Types",
		},
		{
			name: "Glasswall Blocked Files",
		},
	];

	return (
		<article className={classes.Policy}>
			<TabNav
				tabs={tabs}
				isSelectedTab={selectedTab}
				onSetActiveTabHandler={(tab) => setSelectedTab(tab)}
			>
				<Tab isSelected={selectedTab === "Current"}>
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
								<Button onButtonClick={cancelChanges}>Cancel Changes</Button>
								<Button onButtonClick={saveChanges}>Save Changes</Button>
							</div>
						)}
					</div>
					<Current
						policyFlags={currentPolicy ? policyFlags : policy.policyFlagList}
						changeToggle={changeToggle}
					/>
				</Tab>
				<Tab isSelected={selectedTab === "History"}>
					<History
						setPrevPolicy={() => setCurrentPolicy(false)}
						isCurrent={currentPolicy}
					/>
				</Tab>
				<Tab isSelected={selectedTab === "Non Compliant Files"}>
					<div className={classes.header}>
						<p>Routes for non compliant Files</p>
						<button>+</button>
					</div>
					<DomainField
						name={userDomain}
						onChangeInputHandler={(evt) => changeInput(evt.target.value)}
					/>
				</Tab>
				<Tab isSelected={selectedTab === "System Settings"}>
					System Settings
				</Tab>
			</TabNav>
		</article>
	);
};

export default Policy;
