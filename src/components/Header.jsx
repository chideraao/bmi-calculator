import React from "react";

function Header({ toggleMetric, onMetric }) {
	const toggleStyle = { display: "flex" };

	return (
		<div className="container">
			<h1>BMI Calculator</h1>
			<div style={toggleStyle}>
				<div className="toggle-container" onClick={toggleMetric}>
					<div className={`dialog-button ${onMetric ? "" : "disabled"}`}>
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
