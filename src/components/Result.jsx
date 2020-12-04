import React, { useContext } from "react";
import { BMIContext } from "../management/BMIContext";

function Result() {
	const [BMI] = useContext(BMIContext);

	return (
		<div>
			{BMI < 18.5 ? (
				<div>
					Your BMI is {BMI}, indicating your weight is in the Underweight
					category for adults of your height.
				</div>
			) : BMI <= 24.9 ? (
				<div>
					Your BMI is {BMI}, indicating your weight is in the Normal category
					for adults of your height.
				</div>
			) : BMI <= 29.9 ? (
				<div>
					Your BMI is {BMI}, indicating your weight is in the Overweight
					category for adults of your height.
				</div>
			) : (
				<div>
					Your BMI is {BMI}, indicating your weight is in the Obese category for
					adults of your height.
				</div>
			)}
		</div>
	);
}

export default Result;
