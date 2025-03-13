'use client';
import { Command } from 'lucide-react';
import React from 'react';
import Card from './Card';
import {
	CHOOSE_US_ICON_1,
	CHOOSE_US_ICON_2,
	CHOOSE_US_ICON_3,
	CHOOSE_US_ICON_4,
	WHY_CHOOSE_US_BG,
} from '@/lib/assets';
import { motion } from 'framer-motion';
import { slideUp, staggerChildrenVariant } from '@/lib/framer';

const featureList = [
	{
		title: '24/7 Online Support',
		desc: 'Our Care Emergency and Service is available 24/7',
		icon: CHOOSE_US_ICON_1,
	},
	{
		title: 'Expert Technicians',
		desc: 'Skilled professionals delivering reliable and efficient service.',
		icon: CHOOSE_US_ICON_2,
	},
	{
		title: 'Quality Materials',
		desc: 'Durable, industry-standard components for lasting repairs.',
		icon: CHOOSE_US_ICON_3,
	},
	{
		title: 'Guaranteed Satisfaction',
		desc: 'We stand behind our work, ensuring your peace of mind.',
		icon: CHOOSE_US_ICON_4,
	},
];

function WhyChooseUs() {
	return (
		<motion.section
			variants={staggerChildrenVariant}
			initial="hidden"
			whileInView="visible"
			className="py-16 md:py-32 bg-cover bg-center bg-no-repeat"
			style={{ backgroundImage: `url(${WHY_CHOOSE_US_BG.src})` }}
		>
			<div className="container">
				<div className="lg:max-w-3xl lg:ml-[28%] mx-auto">
					<motion.p
						variants={slideUp}
						className="text-primary font-medium flex items-center gap-2 h5"
					>
						<Command size={20} strokeWidth={1.5} className="animate-fan" />
						Why Choose Us
					</motion.p>

					<motion.h3 variants={slideUp} className="h1 mt-2">
						Discover Why Our Commitment to Quality Service Sets Us Apart.
					</motion.h3>

					<div className="mt-8 grid grid-cols-2 gap-4 md:gap-8">
						{featureList.map((item, i) => (
							<Card key={i} {...item} />
						))}
					</div>
				</div>
			</div>
		</motion.section>
	);
}

export default WhyChooseUs;
