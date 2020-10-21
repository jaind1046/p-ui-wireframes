import React from "react";
import classes from "./Popup.module.scss";

const Popup = ({
	links,
	openPopupHover,
	closePopupHover,
	externalStyles,
}) => {
	const buttonList = links.map(({ name, icon, onHoverButtonHandler }) => {
		return (
			<button
				key={name}
				onMouseEnter={onHoverButtonHandler}
				style={{
					backgroundImage: `url(${icon})`,
				}}
			>
				<p>{name}</p>
			</button>
		);
	});
	return (
		<div
			className={[classes.wrap, externalStyles].join(" ")}
			onMouseEnter={openPopupHover}
			onMouseLeave={closePopupHover}
		>
			<div className={[classes.Popup].join(" ")}>{buttonList}</div>
		</div>
	);
};

export default Popup;
