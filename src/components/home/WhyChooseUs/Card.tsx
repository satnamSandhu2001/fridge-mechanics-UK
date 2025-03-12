import Image, { StaticImageData } from 'next/image';
import React from 'react';

type Props = {
	icon: StaticImageData;
	title: string;
	desc: string;
};

function Card(props: Props) {
	return (
		<div>
			<Image
				src={props.icon}
				alt={props.title}
				className="object-contain h-24"
			/>
			<h5 className="h5">{props.title}</h5>
			<p className="text-gray-500">{props.desc}</p>
		</div>
	);
}

export default Card;
