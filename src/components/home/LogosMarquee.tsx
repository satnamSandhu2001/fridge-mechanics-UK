'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

import {
	LOGO_SLIDE_1,
	LOGO_SLIDE_2,
	LOGO_SLIDE_3,
	LOGO_SLIDE_4,
	LOGO_SLIDE_5,
	LOGO_SLIDE_6,
	LOGO_SLIDE_7,
	LOGO_SLIDE_8,
} from '@/lib/assets';

const logos = [
	LOGO_SLIDE_1,
	LOGO_SLIDE_2,
	LOGO_SLIDE_3,
	LOGO_SLIDE_4,
	LOGO_SLIDE_5,
	LOGO_SLIDE_6,
	LOGO_SLIDE_7,
	LOGO_SLIDE_8,
];

function LogosMarquee() {
	return (
		<div className="overflow-hidden bg-white py-6">
			<motion.div
				className="flex w-max space-x-8"
				initial={{ x: 0 }}
				animate={{ x: '-50%' }}
				transition={{ repeat: Infinity, duration: 25, ease: 'linear' }}
			>
				{[...logos, ...logos].map((logo, index) => (
					<Image
						key={index}
						src={logo}
						alt={`Logo ${index + 1}`}
						className="h-16 w-auto object-contain"
					/>
				))}
			</motion.div>
		</div>
	);
}

export default LogosMarquee;
