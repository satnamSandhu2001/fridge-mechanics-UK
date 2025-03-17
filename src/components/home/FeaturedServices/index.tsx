'use client';

import { FRIDGE_IMG_2, FRIDGE_IMG_3, SERVICE_FEATURED } from '@/lib/assets';
import { slideUp, staggerChildrenVariant } from '@/lib/framer';
import { motion } from 'framer-motion';
import { ArrowRight, Command } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

function FeaturedServices() {
	return (
		<motion.section
			variants={staggerChildrenVariant}
			initial="hidden"
			whileInView="visible"
			className="py-16 bg-blue-50"
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<motion.p
					variants={slideUp}
					className="text-primary font-medium flex items-center justify-center gap-2 h5"
				>
					<Command size={20} strokeWidth={1.5} className="animate-fan" />
					Our Services
				</motion.p>

				<motion.h3 variants={slideUp} className="h1 mt-2 text-center">
					What We Can Offer You
				</motion.h3>

				<motion.p
					variants={slideUp}
					className="mt-4 max-w-3xl mx-auto text-lg text-gray-600 text-center"
				>
					Your one-stop solution for reliable fridge and car AC repairs. We
					offer expert services for homes, businesses, and vehicles, ensuring
					your comfort and convenience.
				</motion.p>
				<div className="grid md:grid-cols-3 gap-8 mt-16">
					<motion.div
						variants={slideUp}
						className="bg-white rounded-xl shadow-soft overflow-hidden"
					>
						<div className="relative h-48">
							<Image
								src={SERVICE_FEATURED}
								alt="24/7 Emergency Service"
								layout="fill"
								objectFit="cover"
							/>
						</div>
						<div className="p-6">
							<h3 className="text-xl font-bold text-gray-900 mb-3">
								Domestic Fridge Repair
							</h3>
							<p className="text-gray-600 mb-4">
								Is your home fridge not cooling properly? We provide fast and
								reliable domestic fridge repair services in Berkshire. Our
								experienced technicians can fix all types of residential
								fridges.
							</p>
							<ul className="space-y-2 text-gray-600">
								<li className="flex items-start">
									<svg
										className="h-5 w-5 text-primary mr-2 mt-0.5"
										fill="currentColor"
										viewBox="0 0 20 20"
									>
										<path
											fillRule="evenodd"
											d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
											clipRule="evenodd"
										/>
									</svg>
									Fast Response Time
								</li>
								<li className="flex items-start">
									<svg
										className="h-5 w-5 text-primary mr-2 mt-0.5"
										fill="currentColor"
										viewBox="0 0 20 20"
									>
										<path
											fillRule="evenodd"
											d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
											clipRule="evenodd"
										/>
									</svg>
									All Brands Serviced
								</li>
								<li className="flex items-start">
									<svg
										className="h-5 w-5 text-primary mr-2 mt-0.5"
										fill="currentColor"
										viewBox="0 0 20 20"
									>
										<path
											fillRule="evenodd"
											d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
											clipRule="evenodd"
										/>
									</svg>
									Affordable Rates
								</li>
							</ul>
						</div>
					</motion.div>

					<motion.div
						variants={slideUp}
						className="bg-white rounded-xl shadow-soft overflow-hidden"
					>
						<div className="relative h-48">
							<Image
								src={FRIDGE_IMG_2}
								alt="Preventative Maintenance"
								layout="fill"
								objectFit="cover"
							/>
						</div>
						<div className="p-6">
							<h3 className="text-xl font-bold text-gray-900 mb-3">
								Commercial Fridge Repair
							</h3>
							<p className="text-gray-600 mb-4">
								Keep your business running smoothly with our commercial fridge
								repair services in Berkshire. We handle all types of commercial
								refrigeration units, ensuring minimal downtime.
							</p>
							<ul className="space-y-2 text-gray-600">
								<li className="flex items-start">
									<svg
										className="h-5 w-5 text-primary mr-2 mt-0.5"
										fill="currentColor"
										viewBox="0 0 20 20"
									>
										<path
											fillRule="evenodd"
											d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
											clipRule="evenodd"
										/>
									</svg>
									24/7 Emergency Service
								</li>
								<li className="flex items-start">
									<svg
										className="h-5 w-5 text-primary mr-2 mt-0.5"
										fill="currentColor"
										viewBox="0 0 20 20"
									>
										<path
											fillRule="evenodd"
											d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
											clipRule="evenodd"
										/>
									</svg>
									Experienced Technicians
								</li>
								<li className="flex items-start">
									<svg
										className="h-5 w-5 text-primary mr-2 mt-0.5"
										fill="currentColor"
										viewBox="0 0 20 20"
									>
										<path
											fillRule="evenodd"
											d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
											clipRule="evenodd"
										/>
									</svg>
									Preventative Maintenance
								</li>
							</ul>
						</div>
					</motion.div>

					<motion.div
						variants={slideUp}
						className="bg-white rounded-xl shadow-soft overflow-hidden"
					>
						<div className="relative h-48">
							<Image
								src={FRIDGE_IMG_3}
								alt="Expert Installation"
								layout="fill"
								objectFit="cover"
							/>
						</div>
						<div className="p-6">
							<h3 className="text-xl font-bold text-gray-900 mb-3">
								Car Air Conditioning Repair
							</h3>
							<p className="text-gray-600 mb-4">
								Stay cool on the road with our car air conditioning repair
								services in Berkshire. We diagnose and fix all AC problems, from
								leaks to compressor issues, ensuring your comfort.
							</p>
							<ul className="space-y-2 text-gray-600">
								<li className="flex items-start">
									<svg
										className="h-5 w-5 text-primary mr-2 mt-0.5"
										fill="currentColor"
										viewBox="0 0 20 20"
									>
										<path
											fillRule="evenodd"
											d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
											clipRule="evenodd"
										/>
									</svg>
									AC System Diagnostics
								</li>
								<li className="flex items-start">
									<svg
										className="h-5 w-5 text-primary mr-2 mt-0.5"
										fill="currentColor"
										viewBox="0 0 20 20"
									>
										<path
											fillRule="evenodd"
											d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
											clipRule="evenodd"
										/>
									</svg>
									Refrigerant Refills
								</li>
								<li className="flex items-start">
									<svg
										className="h-5 w-5 text-primary mr-2 mt-0.5"
										fill="currentColor"
										viewBox="0 0 20 20"
									>
										<path
											fillRule="evenodd"
											d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
											clipRule="evenodd"
										/>
									</svg>
									Component Repairs
								</li>
							</ul>
						</div>
					</motion.div>
				</div>

				<motion.div variants={slideUp} className="mt-6 md:mt-12 text-center">
					<Link
						href="/contact"
						className="flex gap-2 w-fit mx-auto justify-center items-center bg-primary text-white py-3 px-6 rounded-xl text-lg font-medium hover:brightness-95 transition duration-300"
					>
						Request a Service <ArrowRight size={20} />
					</Link>
				</motion.div>
			</div>
		</motion.section>
	);
}
export default FeaturedServices;
