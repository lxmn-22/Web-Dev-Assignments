import { FaSearch, FaUserCircle } from "react-icons/fa";

const Navigation = () => {
	return (
		<nav className="flex items-center justify-between border-2 text-black border-gray-200 p-4">
			{/* Center:Search Bar */}
			<div className="max-w-md flex items-center border-2 rounded-full px-4 py-1 ml-[5rem]">
				<FaSearch className="mr-2 text-xl" />
				<input
					type="text"
					placeholder="Search"
					className="w-full bg-transparent outline-none"
				/>
			</div>

			{/* Right:User Profile */}
			<div className="flex items-center mr-[5rem]">
				<FaUserCircle className="text-3xl mr-2" />
			</div>
		</nav>
	);
};

export default Navigation;
