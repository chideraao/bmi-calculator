import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
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
			<div className="container full">
				<Header onMetric={onMetric} toggleMetric={toggleMetric} />
				<Main onMetric={onMetric} />
				<Footer />
			</div>
		</BMIProvider>
	);
}

export default App;
