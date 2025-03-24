'use client';
import { SLIDE_1, SLIDE_2, SLIDE_3 } from '@/lib/assets';
import Banner, { BannerData } from './Banner';
import { Carousel } from 'react-responsive-carousel';

const slides: BannerData[] = [
	{
		title: 'Display, Commercial and Americans Fridge Freezer Repair',
		bg: SLIDE_1,
	},
	{
		title:
			'Domestic and Commercial Fridge Freezer Repair and Maintenance Services',
		bg: SLIDE_2,
	},
	{
		title: '24/7 Fridge Freezer Repair, Call Us Anytime. Fast Service.',
		bg: SLIDE_3,
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
