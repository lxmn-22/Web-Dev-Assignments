import React from "react";
import { FaHome, FaSearch, FaUser } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";

const Sidebar = () => {
	return (
		<aside className="sidebar fixed top-0 left-0 h-screen w-20 bg-[#1A1C1E] text-white">
			<ul className="h-full flex flex-col items-center justify-between p-6">
				{/* Top Div */}
				<div className="top">
					<li className="mb-4">
						<div className="flex items-center">
							<FaHome className="mr-2 mb-3" size={18} />
						</div>
					</li>
					<li className="mb-4">
						<div className="flex items-center">
							<FaUser className="mr-2 mb-3" size={18} />
						</div>
					</li>
					<li className="mb-4">
						<div className="flex items-center">
							<FaSearch className="mr-2 mb-3" size={18} />
						</div>
					</li>
				</div>
				{/* Bottom Div */}
				<div className="bottom">
					<li className="mb-4">
						<IoMdSettings size={18} />
						<FaUser className="mt-5" size={18} />
					</li>
				</div>
			</ul>
		</aside>
	);
};

export default Sidebar;
