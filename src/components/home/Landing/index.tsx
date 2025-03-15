'use client';
import { SLIDE_1, SLIDE_2 } from '@/lib/assets';
import Banner, { BannerData } from './Banner';
import { Carousel } from 'react-responsive-carousel';

const slides: BannerData[] = [
	{
		title: 'Freezer, Ice maker and Refirgerator repair services',
		bg: SLIDE_1,
	},
	{
		title: '24/7 Fridge Repair, Call Us Anytime. Fast Service.',
		bg: SLIDE_2,
	},
];

function Landing() {
	return (
		<>
			<Carousel
				autoPlay
				emulateTouch
				infiniteLoop
				stopOnHover={false}
				showIndicators={false}
				showThumbs={false}
				showStatus={false}
				transitionTime={800}
				interval={7000}
				showArrows={false}
				preventMovementUntilSwipeScrollTolerance={true}
			>
				{slides.map((item, i) => (
					<Banner key={i} {...item} />
				))}
			</Carousel>
			{/* <Banner {...slides[0]} /> */}
		</>
	);
}

export default Landing;
