import "./App.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import CompanyOverview from "./pages/Home/CompanyOverview";

const App = () => {
	const [count, setCount] = useState(0);
	return (
		<>
			<BrowserRouter>
				<div className="App">
					<Header />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/overview" element={<CompanyOverview />} />
					</Routes>
				</div>
			</BrowserRouter>
		</>
	);
};

export default App;
