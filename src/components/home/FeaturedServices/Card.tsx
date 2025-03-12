import React from 'react';
import Image, { StaticImageData } from 'next/image';

type Props = {
	title: string;
	subtitle: string;
	image: StaticImageData;
};

function Card(props: Props) {
	return (
		<div className="bg-white p-4 sm:p-10 flex items-center justify-center flex-col rounded-xl text-center">
			<div className="flex justify-center items-center bg-primary/20 p-6 aspect-square h-28 rounded-xl overflow-hidden mb-6">
				<Image
					src={props.image}
					alt="Washing Machine repair, Fridge Repair in berkshire"
					className="object-contain h-full w-full"
				/>
			</div>
			<h4 className="h6">{props.title}</h4>
			<p className="font-medium text-gray-500">{props.subtitle}</p>
		</div>
	);
}

export default Card;
