import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
	const [inputs, setInputs] = useState({});
	const [onMetric, setOnMetric] = useState(true);

	const toggleMetric = (e) => setOnMetric(!onMetric);

	const handleChange = (e) => {};

	return (
		<div className="container">
			<Header onMetric={onMetric} toggleMetric={toggleMetric} />
			<Main handleChange={handleChange} />
		</div>
	);
}

export default App;
