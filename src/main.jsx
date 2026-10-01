import { createRoot } from "react-dom/client";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Header from "./assets/components/Header/Header";
import Home from "./assets/pages/Home/Home";
import Fashion from "./assets/pages/Fashion/Fashion";
import Model from "./assets/pages/Model/Model";
import Travel from "./assets/pages/Travel/Travel";
import About from "./assets/pages/About/About";
import Contact from "./assets/pages/Contact/Contact";
import Single from "./assets/pages/Single/Single";
import "./index.css";

const App = () => {
	const slidesInfo = [
		{
			"id": 0,
			"title": "Popular Lifestyle with Fashion & Modeling",
			"tag": "Fashion",
			"imageSrc": "./src/assets/images/bg_1.jpg"
		},
		{
			"id": 1,
			"title": "Canadian Girl make your world go round",
			"tag": "Model",
			"imageSrc": "./src/assets/images/bg_2.jpg"
		}
	];

	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route path="/" element={<Header slidesInfo={slidesInfo} />}>
				<Route index element={<Home />} />
				<Route path="fashion" element={<Fashion />} />
				<Route path="model" element={<Model />} />
				<Route path="travel" element={<Travel />} />
				<Route path="about" element={<About />} />
				<Route path="contact" element={<Contact />} />
				<Route path="single" element={<Single />} />
			</Route>
		)
	);

	return (
		<>
			<RouterProvider router={router} />
		</>
	);
};

createRoot(document.getElementById("root")).render(<App />);

