import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import { BMIProvider } from "./management/BMIContext";

function App() {
	const [onMetric, setOnMetric] = useState(true);

	const toggleMetric = () => {
		setOnMetric(!onMetric);
	};

	return (
		<BMIProvider>
			<div className="container">
				<Header onMetric={onMetric} toggleMetric={toggleMetric} />
				<Main onMetric={onMetric} />
			</div>
		</BMIProvider>
	);
}

export default App;
