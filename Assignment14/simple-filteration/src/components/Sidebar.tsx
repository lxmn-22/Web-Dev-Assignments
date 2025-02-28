import React from "react";

export const Sidebar = () => {
	return (
		<div className="w-16 fixed h-screen flex flex-col items-center border border-[#242424] p-4 space-y-6">
			<div className="text-white font-medium">Logo</div>
			<div className="text-gray-400">📁</div>
			<div className="text-gray-400">👤</div>
			<div className="text-gray-400">⚙️</div>
		</div>
	);
};
