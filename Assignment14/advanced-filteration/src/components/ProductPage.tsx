import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

interface Product {
	id: number;
	title: string;
	description: string;
	price: number;
	rating: number;
	images: string[];
}

const ProductPage: React.FC = () => {
	const { id } = useParams<{ id: string }>();
	const navigate = useNavigate();
	const [product, setProduct] = useState<Product | null>(null);

	useEffect(() => {
		if (id) {
			axios
				.get<Product>(`https://dummyjson.com/products/${id}`)
				.then((response) => {
					setProduct(response.data);
				})
				.catch((error) => {
					console.error("Error fetching product data: ", error);
				});
		}
	}, [id]);

	if (!product) {
		return <div>Loading...</div>;
	}

	return (
		<div className="w-[60%] p-5">
			<button
				onClick={() => navigate(-1)}
				className="mb-5 px-4 py-2 bg-black text-white"
			>
				Back
			</button>
			<img
				src={product.images[0]}
				alt={product.title}
				className="w-[50%] h-auto mb-5"
			/>
			<h1 className="text-2xl mb-4 font-bold">{product.title}</h1>
			<p className="w-[70%] mb-4 text-gray-700">{product.description}</p>
			<div className="flex">
				<p>Price: {product.price}</p>
				<p className="ml-10">Rating: {product.rating}</p>
			</div>
		</div>
	);
};

export default ProductPage;
