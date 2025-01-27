import Counter from "./components/Counter";
import Todo from "./components/Todo";

function App() {
	return (
		<>
			<div className="flex flex-col items-center justify-center p-3">
				<h1 className="text-3xl font-semibold">
					Hello, React + TS Beginner projects
				</h1>
				<Counter />
				<Todo />
			</div>
		</>
	);
}

export default App;
