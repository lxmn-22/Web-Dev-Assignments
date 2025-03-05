import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import ProductPage from "./components/ProductPage";

function App() {
	return (
		<Router>
			<div className="flex h-screen">
				<Sidebar />
				<div className="w-full flex flex-wrap justify-between rounded">
					<Routes>
						<Route path="/" element={<MainContent />} />
						<Route path="/product/:id" element={<ProductPage />} />
					</Routes>
				</div>
			</div>
		</Router>
	);
}

export default App;
