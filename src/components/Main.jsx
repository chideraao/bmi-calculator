import React, { useReducer } from "react";

function Main() {
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
	let BMI = null;
	const calculateBMI = () => {
		BMI = weight / (height * height);
		console.log(BMI);
		return BMI;
		//let BMIValue = Math.round(calcBMI * 100) / 100;
		//return BMIValue;
	};

	console.log(BMI);

	/**const calculateBMI = () => {
		const calcBMI = weight / (height * height);
		let BMIValue = Math.round(calcBMI * 100) / 100;
		return BMIValue;
	};

	const BMI = calculateBMI();
	console.log(BMI);*/

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
