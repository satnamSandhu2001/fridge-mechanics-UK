'use client';

import { slideUp, staggerChildrenVariant } from '@/lib/framer';
import { motion } from 'framer-motion';
import { Command, Minus, Plus } from 'lucide-react';
import React, { useState } from 'react';

const questions = [
	{
		question: 'Do you repair all types of electrical appliances?',
		answer:
			'We service a wide range of major electrical appliances, including refrigerators, ovens, stoves, dishwashers, washing machines, and dryers. If you have a specific appliance in need of repair, please contact us to confirm.',
	},
	{
		question: 'What plumbing services do you offer?',
		answer:
			'Our plumbing services include leak detection and repair, drain cleaning, pipe repair and replacement, fixture installation, and water heater services.',
	},
	{
		question: 'How quickly can you respond to an emergency plumbing leak?',
		answer:
			'We understand that plumbing emergencies require immediate attention. Our team is available 24/7 and we strive to respond immediate to address urgent issues and minimize damage.',
	},
	{
		question:
			'Can you provide a quote before starting any electrical or plumbing work?',
		answer:
			"Absolutely. We provide free, no-obligation quotes for all our electrical and plumbing services. We'll assess your needs and provide a detailed estimate before any work begins.",
	},
	{
		question: 'Are your electricians licensed and insured?',
		answer:
			'Yes, all of our electricians are fully licensed and insured, ensuring that your electrical work is handled by qualified professionals and meets all safety standards.',
	},
];

function FAQ() {
	const [activeQuestion, setActiveQuestion] = useState(0);

	return (
		<motion.section
			variants={staggerChildrenVariant}
			initial="hidden"
			whileInView="visible"
			className="py-16 md:py-32 bg-cover bg-top bg-no-repeat relative"
		>
			<div className="container">
				<motion.p
					variants={slideUp}
					className="text-primary font-medium flex items-center gap-2 h5"
				>
					<Command size={20} strokeWidth={1.5} className="animate-fan" />
					FAQ
				</motion.p>

				<motion.h3 variants={slideUp} className="h1 mt-2">
					Frequently Asked Questions
				</motion.h3>
				<motion.p variants={slideUp} className="mt-4 text-gray-500 max-w-4xl">
					We&apos;ve compiled a list of frequently asked questions to help you
					understand our electrical and plumbing services. If you don&apos;t
					find the answer you&apos;re looking for, please don&apos;t hesitate to
					contact us.
				</motion.p>

				<div className="mt-8 space-y-4">
					{questions.map((q, i) => (
						<motion.div
							variants={slideUp}
							key={i}
							className={`border rounded-xl transition-[border-color] duration-500 ${
								activeQuestion === i ? 'border-primary' : 'border-slate-200'
							}`}
						>
							<h2
								onClick={() => {
									setActiveQuestion(i);
								}}
								className="cursor-pointer h6 p-4 rounded-xl flex justify-between items-center"
							>
								{q.question}
								<span className="bg-black rounded-full h-6 aspect-square flex justify-center items-center p-1">
									{activeQuestion === i ? (
										<Minus className="text-white" size={15} strokeWidth={4} />
									) : (
										<Plus className="text-white" size={15} strokeWidth={4} />
									)}
								</span>
							</h2>
							<div
								className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
									activeQuestion === i ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
								}`}
							>
								<div className="overflow-hidden">
									<p className="p-4">{q.answer}</p>
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</motion.section>
	);
}

export default FAQ;
