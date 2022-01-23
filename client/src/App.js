import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

const App = () => {
	return (
		<>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />}></Route>
					{/* <Route path="/" element={<Home />}></Route>
					<Route path="/" element={<Home />}></Route> */}
				</Routes>
			</BrowserRouter>
			<div className="container">
				<Home />
			</div>
		</>
	);
};

export default App;
