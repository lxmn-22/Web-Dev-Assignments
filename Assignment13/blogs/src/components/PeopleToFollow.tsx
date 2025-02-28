import React from "react";
import UserCard from "./UserCard";

const peopleToFollow = [
	{ name: "Ashish", following: false },
	{ name: "Himanshu", following: true },
	{ name: "Lakshya", following: false },
	{ name: "Eklavya", following: false },
];
const PeopleToFollow = () => {
	return (
		<div className="bg-white p-4 rounded-lg shadow">
			<h3 className="font-semibold text-lg mb-4">
				👥 People who to follow
			</h3>
			<div className="space-y-4">
				{peopleToFollow.map((person, index) => (
					<UserCard key={index} person={person} />
				))}
			</div>
		</div>
	);
};

export default PeopleToFollow;
