import React from "react";

function Main({ handleChange }) {
	return (
		<div className="container">
			<div className="m-3">
				<label htmlFor="height">
					Height:
					<input type="number" name="height" onChange={handleChange} />
				</label>
			</div>
			<div className="m-3">
				<label htmlFor="weight">
					Weight:
					<input type="number" name="weight" onChange={handleChange} />
				</label>
			</div>
		</div>
	);
}

export default Main;
