import Image from 'next/image';
import { StaticImageData } from 'next/image';
import { Cog } from 'lucide-react';
import Link from 'next/link';

export interface BannerData {
	index: number;
	title: string;
	bg: StaticImageData;
	hero_img?: StaticImageData;
}

export default function Banner(props: BannerData) {
	return (
		<div className="relative select-none">
			<Image
				src={props.bg}
				alt="Fridge repair mechanics"
				fill
				priority
				className="-z-10 object-cover object-bottom"
			/>
			<div className="bg-gradient-to-b md:bg-gradient-to-l from-transparent via-[#252936c9]/70 md:via-70% to-[#252936c9]/90 absolute top-0 left-0 w-full h-full -z-[9]" />

			<div className="container min-h-[75vh] md:min-h-[88vh] flex items-center justify-start flex-col-reverse md:justify-between md:flex-row gap-8 pb-20 md:pb-0">
				<div>
					<p className="text-primary font-medium flex items-center justify-center md:justify-start gap-2 h5">
						<Cog size={22} /> Repair Services
					</p>

					{props.index === 1 ? (
						<h1 className="text-center md:text-left text-white text-4xl leading-snug sm:text-5xl sm:leading-tight xl:text-6xl xl:leading-snug 2xl:max-w-3xl font-bold max-w-xl tracking-wide">
							{props.title}
						</h1>
					) : (
						<h2 className="text-center md:text-left text-white text-4xl leading-snug sm:text-5xl sm:leading-tight xl:text-6xl xl:leading-snug 2xl:max-w-3xl font-bold max-w-xl tracking-wide">
							{props.title}
						</h2>
					)}

					<div className="mt-6 flex justify-center md:justify-start">
						<Link href="/contact" className="button-primary">
							{props.index === 1 ? 'Book Online' : 'Book Now'}
						</Link>
					</div>
				</div>
				{props.hero_img && (
					<div className="md:hidden">
						<Image
							src={props.hero_img}
							alt="fridge mechanic in slough"
							className="w-full drop-shadow-2xl"
						/>
					</div>
				)}
			</div>
		</div>
	);
}
