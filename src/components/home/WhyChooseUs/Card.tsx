'use client';

import { fadeIn } from '@/lib/framer';
import { motion } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';
import React from 'react';

type Props = {
	icon: StaticImageData;
	title: string;
	desc: string;
};

function Card(props: Props) {
	return (
		<motion.div variants={fadeIn}>
			<Image
				src={props.icon}
				alt={props.title}
				className="object-contain h-24"
			/>
			<h5 className="h6">{props.title}</h5>
			<p className="text-gray-500 mt-2">{props.desc}</p>
		</motion.div>
	);
}

export default Card;
