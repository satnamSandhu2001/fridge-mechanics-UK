import React from 'react';
import Image, { StaticImageData } from 'next/image';
import { motion } from 'framer-motion';
import { slideLeft, slideRight } from '@/lib/framer';

type Props = {
	index: number;
	title: string;
	subtitle: string;
	image: StaticImageData;
};

function Card(props: Props) {
	return (
		<motion.div
			variants={props.index % 2 == 0 ? slideRight : slideLeft}
			className="bg-white p-4 sm:p-10 flex items-center justify-center flex-col rounded-xl text-center"
		>
			<div className="flex justify-center items-center bg-primary/20 p-6 aspect-[5/4] h-28 rounded-xl overflow-hidden mb-4 relative">
				<Image
					src={props.image}
					alt="Fridge Repair in berkshire"
					fill
					className="object-cover h-full w-full"
				/>
			</div>
			<h4 className="h6">{props.title}</h4>
			<p className="font-medium text-gray-500">{props.subtitle}</p>
		</motion.div>
	);
}

export default Card;
