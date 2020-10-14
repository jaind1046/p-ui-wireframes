import React, { useContext } from "react";
import { GlobalStoreContext } from "../../../context/globalStore/globalStore-context";
//import { CSSTransition, TransitionGroup } from "react-transition-group";

import classes from "./NavigationItems.module.scss";

import NavigationItem from "./NavigationItem/NavigationItem";

const NavigationItems = ({ expanded, items, externalStyles }) => {
	const { changePageTitleHandler } = useContext(GlobalStoreContext);

	const cls = [classes.NavigationItems, externalStyles];
	if (expanded) {
		cls.push(classes.menuExpanded);
	}

	const links = items.map((it) => {
		return (
			//<CSSTransition key={it.id} timeout={1000} className={"navItem"}>
			<NavigationItem
				key={it.id}
				path={it.link}
				icon={it.icon}
				exact={it.exact}
				notActive={it.notActive}
				clicked={() => {
					changePageTitleHandler(it.name);
				}}
			>
				<div>
					<p>{it.name}</p>
				</div>
			</NavigationItem>
			//</CSSTransition>
		);
	});

	return (
		<nav className={cls.join(" ")}>
			{/*<TransitionGroup component={`ul`}>{links}</TransitionGroup>*/}
			<ul>{links}</ul>
		</nav>
	);
};

export default NavigationItems;
