import React, { useReducer, useState } from "react";

function Main() {
	const [BMI, setBMI] = useState("");
	/**setting up the hook which handles inputs, best to use reducer as there are multiple inputs */
	const [userInput, setUserInput] = useReducer(
		(state, newState) => ({ ...state, ...newState }),
		{ height: "", weight: "" }
	);
	const handleChange = (e) => {
		const { name, value } = e.target;
		setUserInput({ [name]: value });
	};

	/** Initialise BMI and destructure weight and height from the useReducer */

	const { weight, height } = userInput;

	/**Calculate the BMI and round to two decimal places */
	const calculateBMI = () => {
		let currentBMI = weight / (height * height);
		setBMI(Math.round(currentBMI * 100) / 100);
	};

	return (
		<div className="container">
			<div className="m-3">
				<label htmlFor="height">Height:</label>
				<input
					type="number"
					name="height"
					onChange={handleChange}
					value={userInput.height}
				/>
			</div>
			<div className="m-3">
				<label htmlFor="weight">Weight:</label>
				<input
					type="number"
					name="weight"
					onChange={handleChange}
					value={userInput.weight}
				/>
			</div>
			<button className="btn btn-outline" onClick={calculateBMI}>
				Calculate
			</button>
		</div>
	);
}
export default Main;
