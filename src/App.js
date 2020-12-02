import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
	const [onMetric, setOnMetric] = useState(true);

	const toggleMetric = (e) => setOnMetric(!onMetric);

	return (
		<div className="container">
			<Header onMetric={onMetric} toggleMetric={toggleMetric} />
			<Main />
		</div>
	);
}

export default App;
