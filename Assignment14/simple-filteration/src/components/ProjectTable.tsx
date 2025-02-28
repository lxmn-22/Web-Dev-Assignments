import { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { BiSort } from "react-icons/bi";
import { MdSort } from "react-icons/md";
import { AiOutlineDown } from "react-icons/ai";
import { data } from "../utils/data";

const ProjectTable = () => {
	const [projects, setProjects] = useState(data);

	const [sortConfig, setSortConfig] = useState<{
		key: string;
		direction: string;
	} | null>(null);

	const [dropdownVisible, setDropdownVisible] = useState(false);
	const [filtersVisible, setFiltersVisible] = useState(false);
	const [searchQuery, setSearchQuery] = useState("");
	const [filters, setFilters] = useState({
		name: "",
		country: "",
		email: "",
		project: "",
		status: "",
	});
	const [statusDropdownVisible, setStatusDropdownVisible] = useState<
		number | null
	>(null);

	// Function: project sorting
	const sortProjects = (key: string) => {
		const sortedProjects = [...projects];

		if (
			sortConfig &&
			sortConfig.key === key &&
			sortConfig.direction === "ascending"
		) {
			sortedProjects.sort((a, b) => (a[key] > b[key] ? -1 : 1));
			setSortConfig({ key, direction: "descending" });
		} else {
			sortedProjects.sort((a, b) => (a[key] > b[key] ? 1 : -1));
			setSortConfig({ key, direction: "ascending" });
		}
		setProjects(sortedProjects);
	};

	const handleSortOptionClick = (key: string) => {
		sortProjects(key);
		setDropdownVisible(false);
	};

	const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFilters({
			...filters,
			[e.target.name]: e.target.value,
		});
	};

	// Function: Project status
	const handleStatusChange = (index: number, newStatus: string) => {
		const updatedProjects = projects.map((project, i) =>
			i === index
				? {
						...project,
						status: newStatus,
						progress:
							newStatus === "Completed"
								? "100%"
								: project.progress,
				  }
				: project
		);
		setProjects(updatedProjects);
		setStatusDropdownVisible(null);
	};

	// Filter function Logic:
	const filteredProjects = projects.filter(
		(project) =>
			(searchQuery === "" ||
				Object.values(project).some((value) =>
					value.toLowerCase().includes(searchQuery.toLowerCase())
				)) &&
			(filters.name === "" ||
				project.client
					.toLowerCase()
					.includes(filters.name.toLowerCase())) &&
			(filters.country === "" ||
				project.country
					.toLowerCase()
					.includes(filters.country.toLowerCase())) &&
			(filters.email === "" ||
				project.email
					.toLowerCase()
					.includes(filters.email.toLowerCase())) &&
			(filters.project === "" ||
				project.project
					.toLowerCase()
					.includes(filters.project.toLowerCase())) &&
			(filters.status === "" ||
				project.status
					.toLowerCase()
					.includes(filters.status.toLowerCase()))
	);

	// Calculate paginated data:
	const [currentPage, setCurrentPage] = useState(1);
	const itemsPerPage = 10;
	const startIndex = (currentPage - 1) * itemsPerPage;
	const currentProjects = filteredProjects.slice(
		startIndex,
		startIndex + itemsPerPage
	);
	const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
	const handlePageChange = (pageNumber: number) => setCurrentPage(pageNumber);

	return (
		<div className="p-4 w-[93%] ml-[5rem]">
			{/* Sorting */}
			<div className="flex items-center mb-5">
				<div className="relative">
					<button
						onClick={() => setDropdownVisible(!dropdownVisible)}
						className="border border-gray-700 flex items-center justify-center text-white p-2 cursor-pointer"
					>
						<BiSort className="mr-[0.3rem]" />
						Sort
						<AiOutlineDown className="ml-2" />
					</button>
					{dropdownVisible && (
						<div className="absolute top-full left-0 mt-2 bg-gray-800 border border-gray-700 shadow-lg">
							{/* Sorting by Name */}
							<button
								onClick={() => handleSortOptionClick("client")}
								className="block px-4 py-2 text-white w-full hover:bg-gray-700"
							>
								Name
							</button>

							{/* Sorting by Country */}
							<button
								onClick={() => handleSortOptionClick("country")}
								className="block px-4 py-2 text-white hover:bg-gray-700"
							>
								Country
							</button>

							{/* Sorting by Date */}
							<button
								onClick={() => handleSortOptionClick("date")}
								className="block px-4 py-2 text-white  w-full hover:bg-gray-700"
							>
								Date
							</button>
						</div>
					)}
				</div>

				{/* Filters */}
				<div className="relative ml-4 w-full">
					<button
						onClick={() => setFiltersVisible(!filtersVisible)}
						className="border border-gray-700 flex items-center justify-center text-white p-2 cursor-pointer"
					>
						<MdSort className="mr-[0.3rem]" />
						Filters
						<AiOutlineDown className="ml-2" />
					</button>
					{filtersVisible && (
						<div className="absolute top-full left-0 mt-2 bg-gray-800 border border-gray-700 shadow-lg p-4">
							{/* Filter By Name */}
							<div className="mb-2">
								<label className="block text-white">
									Filter by Name:
								</label>
								<input
									type="text"
									name="name"
									value={filters.name}
									onChange={handleFilterChange}
									className="bg-gray-900 text-white p-2 w-full"
								/>
							</div>

							{/* Filter by Country */}
							<div className="mb-2">
								<label className="block text-white">
									Filter by Country:
								</label>
								<input
									type="text"
									name="country"
									value={filters.country}
									onChange={handleFilterChange}
									className="bg-gray-900 text-white p-2 w-full"
								/>
							</div>

							{/* Filter by Email */}
							<div className="mb-2">
								<label className="block text-white">
									Filter by Email:
								</label>
								<input
									type="text"
									name="email"
									value={filters.email}
									onChange={handleFilterChange}
									className="bg-gray-900 text-white p-2 w-full"
								/>
							</div>

							{/* Filter by Project */}
							<div className="mb-2">
								<label className="block text-white">
									Filter by Project:
								</label>
								<input
									type="text"
									name="project"
									value={filters.project}
									onChange={handleFilterChange}
									className="bg-gray-900 text-white p-2 w-full"
								/>
							</div>

							{/* Filter by Status */}
							<div className="mb-2">
								<label className="block text-white">
									Filter by Status:
								</label>
								<input
									type="text"
									name="status"
									value={filters.status}
									onChange={handleFilterChange}
									className="bg-gray-900 text-white p-2 w-full"
								/>
							</div>
						</div>
					)}
				</div>
			</div>

			{/* Main Table */}
			<table className="min-w-full table-auto rounded border border-gray-700 text-white">
				<thead>
					<tr>
						<th className="px-5 py-3 text-left">Image</th>
						<th className="px-5 py-3 text-left">Name</th>
						<th className="px-5 py-3 text-left">Country</th>
						<th className="px-5 py-3 text-left">Email</th>
						<th className="px-5 py-3 text-left">Project Name</th>
						<th className="px-5 py-3 text-left">Task Progress</th>
						<th className="px-5 py-3 text-left">Status</th>
						<th className="px-5 py-3 text-left">Date</th>
						<th className="px-5 py-3 text-left">Actions</th>
					</tr>
				</thead>
				<tbody>
					{currentProjects.map((project, index) => (
						<tr key={index} className="border border-gray-700">
							{/* Client Profile Image */}
							<td className="px-4 py-2">
								<img
									src={project.image}
									alt={project.client}
									className="w-[3rem] h-[3rem] object-cover rounded-full"
								/>
							</td>

							{/* Client Name, Country, Email, Project-name */}
							<td className="px-4 py-2">{project.client}</td>
							<td className="px-4 py-2">{project.country}</td>
							<td className="px-4 py-2">{project.email}</td>
							<td className="px-4 py-2">{project.project}</td>

							{/* Project Task Progress */}
							<td className="px-4 py-2">
								<div className="w-24 h-2 bg-gray-700 rounded">
									<div
										className={`w-[${project.progress}] h-2 bg-green-500 rounded`}
									></div>
								</div>
							</td>
							<td className="px-4 py-2 w-[10rem]">
								<span
									className={`bg-${
										project.status === "Completed"
											? "green"
											: "yellow"
									}-600 p-2`}
								>
									{project.status}
								</span>
							</td>

							{/* Project Date */}
							<td className="px-4 py-2">{project.date}</td>

							{/* Project Action */}
							<td className="px-4 py-2">
								<div className="relative">
									<BsThreeDots
										className="cursor-pointer"
										onClick={() =>
											setStatusDropdownVisible(index)
										}
									/>
									{statusDropdownVisible === index && (
										<div className="absolute top-full right-0 mt-2 bg-gray-800 border border-gray-700 rounded shadow-lg">
											<button
												onClick={() =>
													handleStatusChange(
														index,
														"In Progress"
													)
												}
												className="block px-4 py-2 text-white hover:bg-gray-700 w-full text-left"
											>
												In Progress
											</button>
											<button
												onClick={() =>
													handleStatusChange(
														index,
														"Completed"
													)
												}
												className="block px-4 py-2 text-white hover:bg-gray-700 w-full text-left"
											>
												Completed
											</button>
										</div>
									)}
								</div>
							</td>
						</tr>
					))}
				</tbody>
			</table>

			{/* Pagination */}
			<div className="flex justify-end mt-4">
				{/* Previous Button */}
				<button
					disabled={currentPage === 1}
					onClick={() => handlePageChange(currentPage - 1)}
					className="px-4 py-2 bg-gray-700 hover:bg-gray-600 hover:font-semibold text-white mr-2 disabled:opacity-50"
				>
					Previous
				</button>

				{/* Page Numbers */}
				<span className="px-4 py-2 text-white font-semibold">
					{currentPage} / {totalPages}
				</span>

				{/* Next Button */}
				<button
					disabled={currentPage === totalPages}
					onClick={() => handlePageChange(currentPage + 1)}
					className="px-4 py-2 bg-gray-700 hover:bg-gray-600 hover:font-semibold text-white ml-2 disabled:opacity-50"
				>
					Next
				</button>
			</div>
		</div>
	);
};

export default ProjectTable;
