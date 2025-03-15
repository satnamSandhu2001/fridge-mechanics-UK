'use client';

import { slideUp, staggerChildrenVariant } from '@/lib/framer';
import { motion } from 'framer-motion';
import { Command, Minus, Plus } from 'lucide-react';
import React, { useState } from 'react';

const questions = [
	{
		question: 'Where do you provide service?',
		answer:
			'We proudly provide our electrical and plumbing services throughout the entire county of Berkshire, including major towns such as Slough, Bracknell, Maidenhead, Reading, Newbury, Wokingham, and all surrounding areas. Please contact us to confirm if we serve your specific location.',
	},
	{
		question: 'What types of fridges do you repair?',
		answer:
			'We repair all types of fridges, including single door, double door, side-by-side, deep freezers, inverter fridges, and more.',
	},
	{
		question: 'Do you offer emergency fridge repair services?',
		answer:
			'Yes, we understand that a broken fridge can be a major inconvenience. We offer prompt and reliable emergency fridge repair services.',
	},
	{
		question: 'Are your technicians experienced in repairing inverter fridges?',
		answer:
			'Yes, our technicians are trained and experienced in repairing modern inverter fridges.',
	},
	{
		question: 'Can you provide a quote before starting work?',
		answer:
			"Absolutely. We provide free, no-obligation quotes for all our services. We'll assess your needs and provide a detailed estimate before any work begins.",
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
								className="cursor-pointer h6 p-4 rounded-xl flex justify-between items-center gap-4"
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
