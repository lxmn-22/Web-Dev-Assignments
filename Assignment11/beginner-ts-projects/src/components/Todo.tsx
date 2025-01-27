import { useState } from "react";

const Todo = () => {
	// store all the todos in the array:
	const [todos, setTodos] = useState([]);

	const [input, setInput] = useState("");

	const handleSubmit = () => {
		setTodos((todos) => {
			return todos.concat({
				text: input,
				id: Math.floor(Math.random() * 10),
			});
		});
		setInput("");
	};

	const removeTodo = (id: number) =>
		setTodos((todos) => todos.filter((t) => t.id !== id));

	return (
		<div className="w-screen flex flex-col items-center justify-center px-6 py-2 mt-3">
			<div>
				<h1 className="text-3xl font-semibold">Todo Component</h1>
			</div>
			<div className="lg:w-1/3 flex gap-1 mt-2">
				<input
					className="w-full border-2 border-slate-300 rounded-full px-4 py-1"
					type="text"
					placeholder="Add task..."
					value={input}
					onChange={(e) => setInput(e.target.value)}
				/>
				<button
					onClick={handleSubmit}
					className="bg-green-500 text-white font-bold rounded-full px-3"
				>
					+
				</button>
			</div>
			<div>
				<ul>
					{todos.map(({ text, id }) => (
						<li className="flex" key={id}>
							<span>{text}</span>
							<button
								onClick={() => removeTodo(id)}
								className="bg-red-500 text-white font-bold rounded-full px-3"
							>
								x
							</button>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default Todo;
