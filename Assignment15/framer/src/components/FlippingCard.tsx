import { motion } from "framer-motion";
import { useState } from "react";

const cardVariants = {
	front: { rotateY: 0 },
	back: { rotateY: 180 },
};

const FlippingCard = () => {
	const [isFlipped, setIsFlipped] = useState(false);

	return (
		<motion.div
			onClick={() => setIsFlipped(!isFlipped)}
			className="perspective-1000"
		>
			<motion.div
				variants={cardVariants}
				initial="front"
				animate={isFlipped ? "back" : "front"}
				transition={{ duration: 0.6 }}
				className="w-64 h-40 bg-white rounded shadow-lg overflow-hidden transform-style-preserve-3d"
			>
				<motion.div className="absolute inset-0 bg-white flex items-center justify-center text-xl font-bold">
					Front Side
				</motion.div>
				<motion.div className="absolute inset-0 bg-blue-500 flex items-center justify-center text-white text-xl font-bold">
					Back Side
				</motion.div>
			</motion.div>
		</motion.div>
	);
};

export default FlippingCard;
