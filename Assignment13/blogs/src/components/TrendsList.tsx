import React from "react";

const trends = [
	{
		title: "Be the Person You Are on Vacation",
		author: "Maren Torff",
	},
	{
		title: "Hate NFTs? I have some bad news...",
		author: "Zain Levin",
	},
	{
		title: "The real impact of dark UX patterns",
		author: "Lindsey Curtis",
	},
];

const TrendsList = () => {
	return (
		<div className="bg-white p-4 rounded-lg shadow mt-8">
			<h3 className="font-semibold text-lg mb-4">📈 Today's top trend</h3>
			<ul className="space-y-4">
				{trends.map((trend, index) => (
					<li key={index} className="flex flex-col">
						<span className="font-medium">{trend.title}</span>
						<span className="text-sm text-gray-500">
							{trend.author}
						</span>
					</li>
				))}
			</ul>
		</div>
	);
};

export default TrendsList;
