import React, { useState } from "react";
import { assets } from "../assets/assets";
import { FaCamera } from "react-icons/fa";

const Profile = () => {
	const [bannerUrl, setBannerUrl] = useState(assets.banner);
	const [profileUrl, setProfileUrl] = useState(assets.profileImage);

	const handleBannerChange = (e: any) => {
		const file = e.target.files[0];

		if (file) {
			setBannerUrl(URL.createObjectURL(file));
		}
	};

	const handleProfileChange = (e: any) => {
		const file = e.target.files[0];

		if (file) {
			setProfileUrl(URL.createObjectURL(file));
		}
	};

	return (
		<div className="relative w-[95%] ml-[5rem]">
			<div className="relative">
				<img
					className="w-full h-60 object-cover"
					src={bannerUrl}
					alt="Banner Image"
				/>
				<button className="absolute top-2 right-2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600">
					<label htmlFor="banner-upload" className="cursor-pointer">
						<FaCamera size={24} />
					</label>
					<input
						className="hidden"
						type="file"
						id="banner-upload"
						accept="image/*"
						onChange={handleBannerChange}
					/>
				</button>
			</div>

			{/* Channel Logo */}
			<div className="flex items-center ml-4 mt-[2rem]">
				<img
					className="w-40 h-40 object-cover rounded-full border-white relative"
					src={profileUrl}
					alt="Channel Logo"
				/>
				<button className="absolute ml-[3.6rem] z-10 mt-[9rem] bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600">
					<label className="cursor-pointer" htmlFor="profile-upload">
						<FaCamera size={24} />
					</label>
					<input
						className="hidden"
						type="file"
						id="profile-upload"
						accept="image/*"
						onChange={handleProfileChange}
					/>
				</button>
			</div>
		</div>
	);
};

export default Profile;
