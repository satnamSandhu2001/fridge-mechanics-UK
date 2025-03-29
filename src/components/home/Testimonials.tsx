'use client';

import { TESTIMONIAL_BG, TESTIMONIAL_IMG } from '@/lib/assets';
import { slideLeft, slideRight, staggerChildrenVariant } from '@/lib/framer';
import { motion } from 'framer-motion';
import { Command, MapPin, Quote, Star, StarHalf, User2 } from 'lucide-react';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const testimonials = [
	{
		name: 'Sarah Thompson',
		review:
			'Our fridge broke down on a Friday night, and we were worried about losing all our food. Fridge Mechanics came out within the hour and had it fixed quickly and efficiently. Fantastic service! Highly recommended.',
		location: 'Slough, Buckinghamshire',
	},
	{
		name: 'David Miller',
		review:
			'As a small business owner, a working commercial fridge is essential. Fridge Mechanics provided a fast and reliable repair, minimizing any disruption to my business. Very professional and reasonably priced.',
		location: 'Reading, Buckinghamshire',
	},
	{
		name: 'Emily Carter',
		review:
			"My car's air conditioning stopped working during a heatwave, which was unbearable! Fridge Mechanics fixed it promptly and were very knowledgeable. I'm so grateful for their excellent service.",
		location: 'Maidenhead, Buckinghamshire',
	},
];

function Testimonials() {
	return (
		<motion.section
			variants={staggerChildrenVariant}
			initial="hidden"
			whileInView="visible"
			className="py-16 md:py-32 bg-cover bg-center bg-no-repeat text-white relative"
			style={{ backgroundImage: `url(${TESTIMONIAL_BG.src})` }}
		>
			<motion.div
				variants={slideRight}
				className="container flex-1 md:flex-1/2 select-none relative z-20"
			>
				<div className="w-full">
					<p className="text-primary font-medium flex items-center gap-2 h5">
						<Command size={20} strokeWidth={1.5} className="animate-fan" />
						Testimonials
					</p>

					<h3 className="h1 mt-2">Our Clients Feedback</h3>
					<Swiper
						modules={[Autoplay]}
						autoplay={{ delay: 7000, disableOnInteraction: false }}
						loop={true}
						speed={800}
						spaceBetween={50}
						slidesPerView={1}
						grabCursor={true}
						preventInteractionOnTransition={true}
						allowTouchMove
					>
						{testimonials.map((t, i) => (
							<SwiperSlide key={i}>
								<div className="mt-10 text-left w-full">
									<div className="text-primary flex">
										{[1, 2, 3, 4].map((i) => (
											<Star key={i} />
										))}
										<StarHalf />
									</div>
									<p className="my-4 w-full max-w-2xl">{t.review}</p>
									<div className="flex gap-4 mt-6">
										<div className="bg-primary rounded-full flex items-center justify-center h-16 aspect-square">
											<User2 size={28} />
										</div>
										<div>
											<h5 className="h6 mb-2 text-primary">{t.name}</h5>
											<p className="flex items-center gap-2 text-gray-400">
												<MapPin size={18} /> {t.location}
											</p>
										</div>
									</div>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</motion.div>

			<motion.div
				variants={slideLeft}
				className="hidden lg:inline-block absolute top-0 right-0 h-full w-[25%] xl:w-[40%] bg-cover bg-left bg-no-repeat"
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
