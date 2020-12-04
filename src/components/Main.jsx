import React, { useContext, useReducer, useState } from "react";
import { BMIContext } from "../management/BMIContext";
import Result from "./Result";

function Main({ onMetric }) {
	const [BMI, setBMI] = useContext(BMIContext);
	const [result, setResult] = useState(false);

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

	console.log(BMI);

	/**Calculate the BMI and round to two decimal places(METRIC) */
	const calculateBMI = () => {
		/** converting the height from cm to m */
		let metricHeight = height / 100;

		let currentBMI = weight / (metricHeight * metricHeight);
		setBMI(Math.round(currentBMI * 100) / 100);

		setResult(true);
	};

	/**Calculate the BMI and round to two decimal places(IMPERIAL) */
	const calculateEnglishBMI = () => {
		/** converting the height and weight from Imperial system to metric system as that is the BMI standard */
		let metricWeight = 0.453592 * weight;
		let metricHeight = 0.3048 * height;

		let currentBMI = metricWeight / (metricHeight * metricHeight);
		setBMI(Math.round(currentBMI * 100) / 100);
		setResult(true);
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
					<button className="btn btn-outline m-3" onClick={calculateBMI}>
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
					<button
						className="btn btn-outline m-3 "
						onClick={calculateEnglishBMI}
					>
						Calculate
					</button>
				</>
			)}
			{result ? <Result /> : ""}
		</div>
	);
}
export default Main;
