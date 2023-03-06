import "./App.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Company from "./pages/Company/Company";
// import Overview from './pages/Company/Overview';
import CompanyOverview from "./pages/Home/CompanyOverview";
import CompanyReview from "./pages/Company/CompanyReview";
import Post from "./pages/Company/Post";

const App = () => {
	const [count, setCount] = useState(0);
	return (
		<>
			<BrowserRouter>
				<div className="App">
					<Header />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/company" element={<Company />}>
							<Route path="overview" element={<CompanyOverview />} />
							<Route path="post" element={<Post />} />
							<Route path="review" element={<CompanyReview />} />
						</Route>
					</Routes>
				</div>
			</BrowserRouter>
		</>
	);
};

export default App;
