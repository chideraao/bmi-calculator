import React, { useContext, useReducer } from "react";
import { BMIContext } from "../management/BMIContext";

function Main({ onMetric }) {
	const [BMI, setBMI] = useContext(BMIContext);

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
		let metricHeight = height / 100;
		let currentBMI = weight / (metricHeight * metricHeight);
		setBMI(Math.round(currentBMI * 100) / 100);
	};

	const calculateEnglishBMI = () => {
		let metricWeight = 0.453592 * weight;
		let metricHeight = 0.3048 * height;
		let currentBMI = metricWeight / (metricHeight * metricHeight);
		setBMI(Math.round(currentBMI * 100) / 100);
	};

	return (
		<div className="container">
			{onMetric ? (
				<>
					{" "}
					<div className="m-3">
						<label htmlFor="height">Height(cm): </label>
						<input
							type="number"
							name="height"
							onChange={handleChange}
							value={userInput.height}
						/>
					</div>
					<div className="m-3">
						<label htmlFor="weight">Weight(Kg): </label>
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
				</>
			) : (
				<>
					<div className="m-3">
						<label htmlFor="height">Height(ft): </label>
						<input
							type="number"
							name="height"
							onChange={handleChange}
							value={userInput.height}
						/>
					</div>
					<div className="m-3">
						<label htmlFor="weight">Weight(lb): </label>
						<input
							type="number"
							name="weight"
							onChange={handleChange}
							value={userInput.weight}
						/>
					</div>
					<button className="btn btn-outline" onClick={calculateEnglishBMI}>
						Calculate
					</button>
				</>
			)}
		</div>
	);
}
export default Main;
