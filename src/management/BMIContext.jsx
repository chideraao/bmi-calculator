import React, { createContext, useState } from "react";

export const BMIContext = createContext();

export const BMIProvider = (props) => {
	const [BMI, setBMI] = useState();
	return (
		<BMIContext.Provider value={[BMI, setBMI]}>
			{props.children}
		</BMIContext.Provider>
	);
};
