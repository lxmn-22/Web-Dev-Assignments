import { useEffect, useState } from "react";
import { useFilter } from "./FilterContext";
import { Tally3 } from "lucide-react";
import BookCard from "./BookCard";
import axios from "axios";

const MainContent = () => {
	const { searchQuery, selectedCategory, minPrice, maxPrice, keyword } =
		useFilter();

	const [products, setProducts] = useState<any[]>([]);
	const [filter, setFilter] = useState("all");
	const [currentPage, setCurrentPage] = useState(1);
	const [dropdownOpen, setDropdownOpen] = useState(false);
	const itemsPerPage = 12;

	useEffect(() => {
		let url = `https://dummyjson.com/products?limit=${itemsPerPage}&skip=${
			(currentPage - 1) * itemsPerPage
		}`;

		if (keyword) {
			let url = `https://dummyjson.com/products/search?q=${keyword}`;
		}

		axios
			.get(url)
			.then((response) => {
				setProducts(response.data.products);
			})
			.catch((error) => {
				console.error("Error fetching data: ", error);
			});
	}, [currentPage, keyword]);

	const getFilteredProducts = () => {
		let filteredProducts = products;

		if (selectedCategory) {
			filteredProducts = filteredProducts.filter(
				(product) => product.categtory === selectedCategory
			);
		}

		if (minPrice !== undefined) {
			filteredProducts = filteredProducts.filter(
				(product) => product.price >= minPrice
			);
		}

		if (maxPrice !== undefined) {
			filteredProducts = filteredProducts.filter(
				(product) => product.price <= maxPrice
			);
		}

		if (searchQuery) {
			filteredProducts = filteredProducts.filter((product) =>
				product.title.toLowerCase().includes(searchQuery.toLowerCase())
			);
		}

		switch (filter) {
			case "high":
				return filteredProducts.sort((a, b) => b.price - a.price);
			case "low":
				return filteredProducts.sort((a, b) => a.price - b.price);
			case "popular":
				return filteredProducts.sort((a, b) => b.rating - a.rating);
			default:
				return filteredProducts;
		}
	};

	const filteredProducts = getFilteredProducts();
	const totalProducts = 100;
	const totalPages = Math.ceil(totalProducts / itemsPerPage);

	const handlePageChange = (page: number) => {
		if (page > 0 && page <= totalPages) {
			setCurrentPage(page);
		}
	};

	const getPaginationButtons = () => {
		const buttons: number[] = [];
		let startPage = Math.max(1, currentPage - 2);
		let endPage = Math.min(totalPages, currentPage + 2);

		if (currentPage - 2 < 1) {
			endPage = Math.min(totalPages, endPage + (2 - (currentPage - 1)));
		}
		if (currentPage + 2 > totalPages) {
			startPage = Math.max(
				1,
				startPage - (2 - (totalPages - currentPage))
			);
		}

		for (let page = startPage; page <= endPage; page++) {
			buttons.push(page);
		}

		return buttons;
	};

	return (
		<section className="xl:w-[55rem] lg:w-[55rem] sm:w-[40rem] xs:w-[20rem] p-5">
			<div className="mb-5">
				<div className="flex flex-col sm:flex-row items-center justify-between">
					<div className="relative mb-5 mt-5">
						<button
							onClick={() => setDropdownOpen(!dropdownOpen)}
							className="border flex items-center px-4 py-1"
						>
							<Tally3 className="mr-2" />
							{filter === "all"
								? "Filter"
								: filter.charAt(0).toUpperCase() +
								  filter.slice(1)}
						</button>
						{dropdownOpen && (
							<div className="absolute w-full sm:w-40 bg-white border border-gray-300 rounded mt-2">
								<button
									onClick={() => setFilter("Low")}
									className="block w-full px-4 py-2 text-left hover:bg-gray-200"
								>
									Low
								</button>
								<button
									onClick={() => setFilter("High")}
									className="block w-full px-4 py-2 text-left hover:bg-gray-200"
								>
									High
								</button>
								<button
									onClick={() => setFilter("Popular")}
									className="block w-full px-4 py-2 text-left hover:bg-gray-200"
								>
									Popular
								</button>
							</div>
						)}
					</div>
				</div>

				<div className="grid grid-cols-4 sm:grid-cols-3 md:grid-cols-4 gap-5">
					{filteredProducts.map((product) => (
						<BookCard
							key={product.id}
							id={product.id}
							title={product.title}
							image={product.thumbnail}
							price={product.price}
						/>
					))}
				</div>
				<div className="flex flex-col sm:flex-row items-center justify-between mt-5">
					<button
						onClick={() => handlePageChange(currentPage - 1)}
						disabled={currentPage === 1}
						className="border px-4 py-2 mx-2"
					>
						Previous
					</button>
					<div className="flex flex-wrap justify-center">
						{getPaginationButtons().map((page) => (
							<button
								key={page}
								onClick={() => handlePageChange(page)}
								className={`border px-4 py-2 mx-1 rounded-full ${
									page === currentPage
										? "bg-black text-white"
										: ""
								}`}
							>
								{page}
							</button>
						))}
					</div>

					<button
						onClick={() => handlePageChange(currentPage + 1)}
						disabled={currentPage === totalPages}
						className="border px-4 py-2 mx-2"
					>
						Next
					</button>
				</div>
			</div>
		</section>
	);
};

export default MainContent;
