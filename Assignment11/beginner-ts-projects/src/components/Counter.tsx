import { useState } from "react";

const Counter = () => {
	const [count, setCount] = useState(0);

	const handleIncrement = () => setCount(count + 1);

	const handleDecrement = () => setCount(count - 1);

	return (
		<div className="w-screen flex flex-col items-center justify-center px-6 py-2 mt-3">
			<div>
				<h1 className="text-3xl font-semibold">Counter Component</h1>
			</div>
			<div className="text-6xl font-bold mt-3">{count}</div>
			<div className="w-full flex items-center justify-center gap-3 mt-3">
				<button
					onClick={handleIncrement}
					className="lg:w-1/5 bg-blue-600 text-3xl font-bold text-white rounded-full px-5 py-1"
				>
					+
				</button>
				<button
					onClick={handleDecrement}
					className="lg:w-1/5 bg-blue-600 text-3xl font-bold text-white rounded-full px-5 py-1"
				>
					-
				</button>
			</div>
		</div>
	);
};

export default Counter;
