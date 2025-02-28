import React from "react";

const Modal: React.FC<{ children: React.ReactNode; onClose: () => void }> = ({
	children,
	onClose,
}) => {
	return (
		<div className="fixed flex items-center justify-center inset-0 bg-black bg-opacity-50">
			<div className="bg-white p-4 rounded-lg shadow relative">
				{children}
				<button
					onClick={onClose}
					className="absolute top-2 right-2 text-gray-500"
				>
					x
				</button>
			</div>
		</div>
	);
};

export default Modal;
