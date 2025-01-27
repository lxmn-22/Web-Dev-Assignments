import axios from "axios";
import { useEffect, useState } from "react";

const Meals = () => {
	const [items, setItems] = useState([]);

	// fetching data from an api:
	useEffect(() => {
		axios
			.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
			.then((res) => {
				// console.log(res.data.meals);
				setItems(res.data.meals);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	const itemsList = items.map(({ strMeal, strMealThumb, idMeal }) => {
		return (
			<section className="text-sm cursor-pointer py-3">
				<img
					className="h-[200px] w-[300px] rounded-lg"
					src={strMealThumb}
					alt="string meal"
				/>
				<section className="flex flex-row justify-between mt-2">
					<p className="flex justify-between font-semibold">
						{strMeal}
					</p>
					<p className="font-semibold">{idMeal}</p>
				</section>
			</section>
		);
	});

	return (
		<div className="w-screen flex flex-col items-center justify-center">
			<div>
				<h1 className="text-3xl font-semibold">Meal Component</h1>
			</div>
			<div className="flex flex-wrap justify-around">{itemsList}</div>
		</div>
	);
};

export default Meals;
