'use client';
import { FRIDGE_HERO, SLIDE_1, SLIDE_2 } from '@/lib/assets';
import Banner, { BannerData } from './Banner';
import { Carousel } from 'react-responsive-carousel';

const slides: BannerData[] = [
	{
		index: 1,
		title: 'Domestic, Commercial and Display Fridge, Freezer Repair',
		bg: SLIDE_1,
		hero_img: FRIDGE_HERO,
	},

	{
		index: 2,
		title: '24/7 Fridge, Freezer Repair, Call Us Anytime. Fast Service.',
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
		</>
	);
}

export default Landing;
