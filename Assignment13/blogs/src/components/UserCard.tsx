import React from "react";
import { FaUserCircle } from "react-icons/fa";

interface UserCardProps {
	index: number;
	person: string;
}

const UserCard = ({ index, person }: UserCardProps) => {
	return (
		<div className="flex items-center justify-between">
			<div className="flex items-center">
				<FaUserCircle className="text-gray-500 text-3xl mr-3" />
				<span>{person.name}</span>
			</div>
			<button
				className={`px-4 py-1 text-sm rounded-full ${
					person.following
						? "bg-black text-white"
						: "bg-gray-200 text-gray-700"
				}`}
			>
				{person.following ? "Following" : "Follow"}
			</button>
		</div>
	);
};

export default UserCard;
