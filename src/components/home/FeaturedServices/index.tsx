'use client';

import {
	FRIDGE_IMG_1,
	FRIDGE_IMG_2,
	FRIDGE_IMG_3,
	FRIDGE_IMG_4,
	SERVICE_FEATURED,
} from '@/lib/assets';
import { ArrowBigRightDash, Command } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import Card from './Card';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeIn, slideUp, staggerChildrenVariant } from '@/lib/framer';

const servicesList = [
	{
		title: 'Fridge',
		subtitle: 'Repairing',
		image: FRIDGE_IMG_1,
	},
	{
		title: 'Refrigerator',
		subtitle: 'Repairing',
		image: FRIDGE_IMG_2,
	},
	{
		title: 'Commercial Fridge',
		subtitle: 'Repairing',
		image: FRIDGE_IMG_3,
	},
	{
		title: 'Ice Maker',
		subtitle: 'Repairing',
		image: FRIDGE_IMG_4,
	},
];

function FeaturedServices() {
	return (
		<motion.section
			variants={staggerChildrenVariant}
			initial="hidden"
			whileInView="visible"
			className="py-16 sm:py-32 relative bg-gray-100"
			id="services"
		>
			<div className="container z-10 relative">
				<motion.p
					variants={slideUp}
					className="text-primary font-medium flex items-center justify-center gap-2 h5"
				>
					<Command size={20} strokeWidth={1.5} className="animate-fan" />
					Featured Services
				</motion.p>

				<motion.h3 variants={slideUp} className="h1 mt-2 text-center">
					What We Can Offer You
				</motion.h3>

				<div className="grid lg:grid-cols-2 gap-4 mt-16">
					<div className="grid grid-cols-2 gap-4">
						{servicesList.map((item, i) => (
							<Card key={i} {...item} index={i} />
						))}
					</div>
					<motion.div variants={fadeIn} className="relative h-full">
						<div className="w-full h-full">
							<Image
								src={SERVICE_FEATURED}
								alt="Professional appliance repair service in Slough"
								className="object-cover h-full max-h-96 lg:max-h-full w-full rounded-xl -z-10"
							/>
						</div>

						<div className="bg-white absolute bottom-5 left-1/2 -translate-x-1/2 md:translate-x-0 md:left-5 z-10 w-[90%] md:w-[70%] p-8 rounded-xl">
							<p>
								Our technicians are skilled in diagnosing and fixing all types
								of refrigerator issues.
							</p>
							<Link
								href="/#"
								className="flex items-center gap-2 text-primary font-semibold mt-3 group"
							>
								Hire us
								<ArrowBigRightDash
									size={18}
									className="group-hover:translate-x-2 transition-transform"
								/>
							</Link>
						</div>
					</motion.div>
				</div>
			</div>
		</motion.section>
	);
}
export default FeaturedServices;
