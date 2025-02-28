import React, { useState } from "react";
import { AiOutlineDown } from "react-icons/ai";
import { BiSort } from "react-icons/bi";
import { MdSort } from "react-icons/md";
import { data } from "../utils/data";
import { BsThreeDots } from "react-icons/bs";

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

	const sortProjects = (key: string) => {
		let sortedProjects = [...projects];
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
		setFilters({ ...filters, [e.target.name]: e.target.value });
	};

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
	const itemsPerPage = 5;
	const startIndex = (currentPage - 1) * itemsPerPage;
	const currentProjects = filteredProjects.slice(
		startIndex,
		startIndex + itemsPerPage
	);
	const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
	const handlePageChange = (pageNumber: number) => setCurrentPage(pageNumber);

	return (
		<div className="w-[93%] ml-[5rem]">
			{/* Sorting */}
			<div className="flex items-center mb-5">
				<div className="relative">
					<button className="flex items-center justify-center border border-gray-700 text-white p-2 rounded">
						<BiSort className="mr-[0.3rem]" />
						Sort
						<AiOutlineDown className="ml-2" />
					</button>
				</div>
			</div>

			{/* Filters */}
			<div className="w-full relative ml-4">
				<button className="flex items-center justify-center border border-gray-700 text-white p-2 rounded">
					<MdSort className="mr-[0.3rem]" />
					Filters
					<AiOutlineDown className="ml-2" />
				</button>
			</div>

			{/* Main Table */}
			<table className="min-w-full table-auto rounded boder border-gray-700 text-white">
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
							<td className="px-4 py-2">
								<img
									className="w-[3rem] h-[3rem] object-cover rounded-full"
									src="{project.image} alt={project.client}"
								/>
							</td>
							<td className="px-4 py-2">{project.client}</td>
							<td className="px-4 py-2">{project.country}</td>
							<td className="px-4 py-2">{project.email}</td>
							<td className="px-4 py-2">{project.project}</td>

							{/* Task Progress */}
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
									}-500 p-2 rounded`}
								>
									{project.status}
								</span>
							</td>
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
											<button className="block w-full px-4 py-2 text-white hover:bg-gray-700 text-left">
												In Progress
											</button>
											<button className="block w-full px-4 py-2 text-white hover:bg-gray-700 text-left">
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
			<div className="flex justify-center mt-4">
				<button className="px-4 py-2 bg-gray-700 text-white rounded mr-2 disabled:opacity-50">
					Previous
				</button>
				<span className="px-4 py-2 text-white">Page</span>
				<button className="px-4 py-2 bg-gray-700 text-white rounded mr-2 disabled:opacity-50">
					Next
				</button>
			</div>
		</div>
	);
};

export default ProjectTable;
