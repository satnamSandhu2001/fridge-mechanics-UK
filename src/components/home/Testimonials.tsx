'use client';

import { TESTIMONIAL_BG, TESTIMONIAL_IMG } from '@/lib/assets';
import { slideLeft, slideRight, staggerChildrenVariant } from '@/lib/framer';
import { motion } from 'framer-motion';
import { Command, MapPin, Quote, Star, StarHalf, User2 } from 'lucide-react';
import React from 'react';

function Testimonials() {
	return (
		<motion.section
			variants={staggerChildrenVariant}
			initial="hidden"
			whileInView="visible"
			className="py-16 md:py-32 bg-cover bg-center bg-no-repeat text-white relative"
			style={{ backgroundImage: `url(${TESTIMONIAL_BG.src})` }}
		>
			<div className="container grid lg:grid-cols-2">
				<motion.div variants={slideRight}>
					<p className="text-primary font-medium flex items-center gap-2 h5">
						<Command size={20} strokeWidth={1.5} className="animate-fan" />
						Testimonials
					</p>

					<h3 className="h1 mt-2">Our Clients Feedback</h3>

					<div className="mt-10">
						<div className="text-primary flex">
							{[1, 2, 3, 4].map((i) => (
								<Star key={i} />
							))}
							<StarHalf />
						</div>
						<p className="my-4 max-w-2xl">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse,
							eveniet. Eligendi voluptatibus nisi odit dignissimos consequuntur
							cupiditate temporibus odio nobis consectetur rem quo ratione esse
							maiores, corrupti quaerat voluptas earum.
						</p>
						<div className="flex gap-4 mt-6">
							<div className="bg-primary rounded-full flex items-center justify-center h-16 aspect-square">
								<User2 size={28} />
							</div>
							<div>
								<h6 className="h6 mb-2 text-primary">John Doe</h6>
								<p className="flex items-center gap-2 text-gray-400">
									<MapPin size={18} /> Birkshire
								</p>
							</div>
						</div>
					</div>
				</motion.div>
				<div />
			</div>

			<motion.div
				variants={slideLeft}
				className="hidden lg:inline-block absolute top-0 right-0 h-full w-[40%] bg-cover bg-left bg-no-repeat"
				style={{ backgroundImage: `url(${TESTIMONIAL_IMG.src})` }}
			>
				<div className="w-full h-full relative flex items-center">
					<div className="w-fit -translate-x-1/2 rounded-full p-2 aspect-square border-4 border-primary">
						<div className="w-full h-full bg-primary rounded-full p-6">
							<Quote className="text-white" fill="#fff" size={40} />
						</div>
					</div>
				</div>
			</motion.div>
		</motion.section>
	);
}

export default Testimonials;
