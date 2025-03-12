import { ABOUT_IMG_1, ABOUT_IMG_2, ABOUT_IMG_3 } from '@/utils/assets';
import { Command, PhoneCall, Stars } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function About() {
	return (
		<section className="py-32">
			<div className="container flex flex-col-reverse lg:flex-row gap-x-16 gap-y-8">
				<div className="grid grid-cols-2 gap-4 h-[250px] lg:h-auto lg:flex-1/2">
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
				</div>
				<div className="lg:flex-1/2 lg:py-10">
					<p className="text-primary font-medium flex items-center gap-2 h5">
						<Command size={20} strokeWidth={1.5} className="animate-fan" />
						About Us
					</p>

					<h3 className="h1 mt-2">We Provide Experienced & Quality Services</h3>
					<p className="mt-6 text-gray-500">
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam
						debitis reiciendis alias natus amet fugit, consectetur, iusto, at
						asperiores reprehenderit sit impedit nisi inventore illo in ullam!
						Saepe, voluptatem reprehenderit?
					</p>
					<div className="grid grid-cols-2 gap-6 rounded-xl my-6 text-gray-500">
						<div className="flex flex-col gap-3">
							<p className="flex items-center gap-2 font-medium">
								<Stars size={20} className="text-primary" />
								Warrantes & Gurantees
							</p>
							<p className="flex items-center gap-2 font-medium">
								<Stars size={20} className="text-primary" />
								Exceed Expectation
							</p>
						</div>
						<div className="flex flex-col gap-3">
							<p className="flex items-center gap-2 font-medium">
								<Stars size={20} className="text-primary" />
								Online Schedule
							</p>
							<p className="flex items-center gap-2 font-medium">
								<Stars size={20} className="text-primary" />
								Financing Available
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
							<p className="text-sm text-gray-500">
								Call us anytime. we are available 24*7
							</p>
							<p className="font-semibold mt-1">(+44) 0777 0777 980</p>
						</div>
					</Link>
				</div>
			</div>
		</section>
	);
}

export default About;
