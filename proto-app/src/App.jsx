import React, { useState, useContext } from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import { GlobalStoreContext } from "./context/globalStore/globalStore-context";
import { AuthContext } from "./context/auth/auth-context";

import classes from "./App.module.scss";

import Auth from "./hoc/Auth/Auth";
import Main from "./hoc/Main/Main";

import Toolbar from "./components/Navigation/Toolbar.jsx/Toolbar";
import Login from "./components/Login/Login";
import PassReminder from "./components/PassReminder/PassReminder";
import Users from "./containers/Users/Users";
import Config from "./containers/Config/Config";
import RequestHistory from "./containers/RequestHistory/RequestHistory";
import Policy from "./containers/Policy/Policy";
import Dashboard from "./containers/Dashboard/Dashboard";
import FileDrop from "./containers/FileDrop/FileDrop";

// TODO: Remove from production, for prototype only
import Sow from "./components/Sow/Sow";

const App = () => {
	const [navExpanded, setNavExpanded] = useState(true);
	const { isAuth } = useContext(AuthContext);
	const { title } = useContext(GlobalStoreContext);

	return (
		<div className={classes.app}>
			<Router>
				{!isAuth && (
					<Route
						render={({ location }) => (
							<TransitionGroup>
								<CSSTransition
									key={location.key}
									//* время проигрывания анимации
									timeout={1000}
									mountOnEnter
									unmountOnExit
									classNames={{
										enter: classes.authEnter,
										enterActive: classes.authEnterActive,
										emterDone: classes.authEnterDone,
										exit: classes.authExit,
										exitActive: classes.authExitActive,
										exitDone: classes.authExitDone,
									}}
								>
									<Auth>
										<Switch location={location}>
											// TODO: Remove from production, for prototype only
											<Route path="/sow" component={Sow} />
											<Route path="/pass-reminder" component={PassReminder} />
											<Route path="/" component={Login} exact />
											<Redirect to="/" />
										</Switch>
									</Auth>
								</CSSTransition>
							</TransitionGroup>
						)}
					/>
				)}

				{isAuth && (
					<div className={classes.mainContainer}>
						<Route
							render={({ location }) => (
								<TransitionGroup>
									<CSSTransition
										key={location.key}
										timeout={300}
										mountOnEnter
										unmountOnExit
										classNames={{
											enter: classes.fadeEnter,
											enterActive: classes.fadeEnterActive,
											emterDone: classes.fadeEnterDone,
											exit: classes.fadeExit,
											exitActive: classes.fadeExitActive,
											exitDone: classes.fadeExitDone,
										}}
									>
										<Main showTitle title={title} expanded={navExpanded}>
											<Switch location={location}>
												<Route path="/dashboard" component={Dashboard} />
												<Route
													path="/request-history"
													component={RequestHistory}
												/>
												<Route path="/request-history">
													<div>Request history</div>
												</Route>
												<Route path="/file-drop" component={FileDrop} />
												<Route path="/policy" component={Policy} />

												<Route path="/configuration" component={Config} />
												<Route path="/users" component={Users} />
												{/*<Redirect to="/" />*/}
											</Switch>
										</Main>
									</CSSTransition>
								</TransitionGroup>
							)}
						/>
						<Toolbar
							expanded={navExpanded}
							navExpandedHandler={() => setNavExpanded(!navExpanded)}
						/>
					</div>
				)}
			</Router>
		</div>
	);
};

export default App;
