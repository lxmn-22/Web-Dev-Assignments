import { createContext, useContext, ReactNode, useState } from "react";

// Definition of, context type: includes various filters
interface FilterContextType {
	searchQuery: string;
	setSearchQuery: (query: string) => void;
	selectedCategory: string;
	setSelectedCategory: (category: string) => void;
	minPrice: number | undefined;
	setMinPrice: (price: number | undefined) => void;
	maxPrice: number | undefined;
	setMaxPrice: (price: number | undefined) => void;
	keyword: string;
	setKeyword: (keyword: string) => void;
}

// created context: will later hold the filter state and update functions.
const FilterContext = createContext<FilterContextType | undefined>(undefined);

// created context provider: it takes "children" as a prop, meaning any component wrapped inside it can access the context.
export const FilterProvider: React.FC<{ children: ReactNode }> = ({
	children,
}) => {
	// state hooks store the filter values:
	const [searchQuery, setSearchQuery] = useState<string>("");
	const [selectedCategory, setSelectedCategory] = useState<string>("");
	const [minPrice, setMinPrice] = useState<number | undefined>(undefined);
	const [maxPrice, setMaxPrice] = useState<number | undefined>(undefined);
	const [keyword, setKeyword] = useState<string>("");

	return (
		// The context provider wraps "children" and passes the state and setter functions as value:
		<FilterContext.Provider
			value={{
				searchQuery,
				setSearchQuery,
				selectedCategory,
				setSelectedCategory,
				minPrice,
				setMinPrice,
				maxPrice,
				setMaxPrice,
				keyword,
				setKeyword,
			}}
		>
			{children}
		</FilterContext.Provider>
	);
};

// creating a custom hook for accessing the context-> it calls useContext(FilterContext) to get the current context value:
export const useFilter = () => {
	const context = useContext(FilterContext);
	if (context === undefined) {
		throw new Error("useFilter must be used within a FilterProvider");
	}
	return context;
};
