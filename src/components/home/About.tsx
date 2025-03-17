'use client';

import { ABOUT_IMG_1, ABOUT_IMG_2, ABOUT_IMG_3 } from '@/lib/assets';
import { fadeIn, slideLeft, staggerChildrenVariant } from '@/lib/framer';
import { motion } from 'framer-motion';
import { Command, PhoneCall, Stars } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function About() {
	return (
		<motion.section
			variants={staggerChildrenVariant}
			initial="hidden"
			whileInView="visible"
			className="py-16 sm:py-32"
		>
			<div className="container flex flex-col-reverse lg:flex-row gap-x-16 gap-y-8">
				<motion.div
					variants={fadeIn}
					className="grid grid-cols-2 gap-4 h-[250px] lg:h-auto lg:flex-1/2"
				>
					<div className="h-full w-full relative rounded-xl overflow-hidden">
						<Image
							src={ABOUT_IMG_1}
							alt="Air conditioner mechanic in Berkshire"
							fill
							className="object-cover"
						/>
					</div>
					<div className="flex flex-col gap-4 h-full">
						<div className="h-full w-full relative rounded-xl overflow-hidden">
							<Image
								src={ABOUT_IMG_2}
								alt="Plumber in Berkshire"
								fill
								className="object-cover"
							/>
						</div>
						<div className="h-full w-full relative rounded-xl overflow-hidden">
							<Image
								src={ABOUT_IMG_3}
								alt="Refrigerator mechanic in Berkshire"
								fill
								className="object-cover"
							/>
						</div>
					</div>
				</motion.div>
				<motion.div variants={slideLeft} className="lg:flex-1/2 lg:py-10">
					<p className="text-primary font-medium flex items-center gap-2 h5">
						<Command size={20} strokeWidth={1.5} className="animate-fan" />
						About Us
					</p>

					<h3 className="h1 mt-2">We Provide Experienced & Quality Services</h3>
					<p className="mt-6 text-gray-500">
						We pride ourselves on our commitment to quality workmanship, using
						only the best materials and employing skilled technicians who are
						passionate about their craft. From minor repairs to major
						installations, we handle every project with professionalism and
						attention to detail.
					</p>
					<div className="grid grid-cols-2 gap-6 rounded-xl my-6 text-gray-500">
						<div className="flex flex-col gap-3">
							<p className="flex items-center gap-2 font-medium">
								<Stars size={20} className="text-primary" />
								Experienced Professionals
							</p>
							<p className="flex items-center gap-2 font-medium">
								<Stars size={20} className="text-primary" />
								Quality Workmanship
							</p>
						</div>
						<div className="flex flex-col gap-3">
							<p className="flex items-center gap-2 font-medium">
								<Stars size={20} className="text-primary" />
								Prompt Response
							</p>
							<p className="flex items-center gap-2 font-medium">
								<Stars size={20} className="text-primary" />
								Customer Satisfaction
							</p>
						</div>
					</div>

					<Link
						href="tel:+4407770777980"
						target="_blank"
						className="flex items-center gap-4 pt-4"
					>
						<div className="bg-primary rounded-full flex items-center justify-center aspect-square h-14">
							<PhoneCall color="#fff" size={23} strokeWidth={1.5} />
						</div>
						<div>
							<p className="font-medium mt-1">
								(+44) 0777 0777 980 <br /> info@fridgemechanics.co.uk
							</p>
						</div>
					</Link>
				</motion.div>
			</div>
		</motion.section>
	);
}

export default About;
