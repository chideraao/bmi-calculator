import React from "react";

function Header({ toggleMetric, onMetric }) {
	const toggleStyle = {
		display: "flex",
		paddingTop: "2rem",
		paddingLeft: "10rem",
	};

	return (
		<div className="container flex">
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
