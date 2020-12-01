import React from "react";

function Header(onMetric, toggleMetric) {
	const toggleStyle = { display: "flex" };
	return (
		<div className="container">
			<h1>BMI Calculator</h1>
			<div className="flex">
				<div className="toggle-container" onClick={toggleMetric}>
					<div
						className={`dialog-button ${
							onMetric ? "dialog-button" : "disabled"
						}`}
					>
						{onMetric ? (
							<div style={{ height: "16px" }}></div>
						) : (
							<div style={{ height: "16px" }}></div>
						)}
					</div>
				</div>
				{onMetric ? "Metric" : "English"}
			</div>
		</div>
	);
}

export default Header;
