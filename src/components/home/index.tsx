import { HOME_BG, REPAIRMAN } from '@/utils/assets';
import { Cog } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function Landing() {
	return (
		<div className="relative">
			<Image
				src={HOME_BG}
				alt="Fridge repair mechanics"
				fill
				priority
				className="hidden md:inline-block -z-10 object-center object-cover"
			/>
			<div className="bg-gradient-to-b md:hidden from-transparent via-secondary/70 to-secondary/90 absolute top-0 left-0 w-full h-full -z-[9]" />

			<div className="container min-h-[92vh] flex items-center justify-center flex-col-reverse md:justify-between md:flex-row gap-8">
				<div>
					<p className="text-primary font-medium flex items-center justify-center md:justify-start gap-2 h5">
						<Cog size={22} /> Repairing Services
					</p>
					<h1 className="text-center md:text-left text-white md:text-gray-900 text-4xl leading-snug sm:text-5xl sm:leading-tight xl:text-6xl xl:leading-tight 2xl:text-7xl 2xl:leading-tight 2xl:max-w-3xl font-black max-w-xl tracking-wide">
						Freezer, Ice maker and Refirgerator repair services
					</h1>
					<div className="mt-6 flex justify-center md:justify-start">
						{/* TODO : link fix */}
						<Link href="/#" className="button-primary">
							Book Online
						</Link>
					</div>
				</div>
				<div className="md:hidden">
					<Image
						src={REPAIRMAN}
						alt="fridge repair in Berkshire"
						className="w-full"
					/>
				</div>
			</div>
		</div>
	);
}

export default Landing;
