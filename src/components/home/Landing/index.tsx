'use client';
import { FRIDGE_HERO, SLIDE_1, SLIDE_2 } from '@/lib/assets';
import Banner, { BannerData } from './Banner';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

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
			<Swiper
				modules={[Autoplay]}
				autoplay={{ delay: 7000, disableOnInteraction: false }}
				loop={true}
				speed={800}
				spaceBetween={50}
				slidesPerView={1}
				touchRatio={1}
				grabCursor={true}
				preventInteractionOnTransition={true}
				allowTouchMove
			>
				{slides.map((item, i) => (
					<SwiperSlide key={i}>
						<Banner {...item} />
					</SwiperSlide>
				))}
			</Swiper>
		</>
	);
}

export default Landing;
