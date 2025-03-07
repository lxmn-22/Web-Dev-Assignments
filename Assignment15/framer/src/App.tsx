import AnimatedCard from "./components/AnimatedCard";
import FlippingCard from "./components/FlippingCard";
import ImageGallery from "./components/ImageGallery";

function App() {
	return (
		<div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 gap-6">
			<FlippingCard />
			<AnimatedCard />
			<ImageGallery />
		</div>
	);
}

export default App;
