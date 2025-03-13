import About from '@/components/home/About';
import FAQ from '@/components/home/FAQ';
import FeaturedServices from '@/components/home/FeaturedServices';
import Landing from '@/components/home/Landing';
import Testimonials from '@/components/home/Testimonials';
import WhyChooseUs from '@/components/home/WhyChooseUs';

export default function Home() {
	return (
		<section className="w-full overflow-hidden">
			<Landing />
			<About />
			<FeaturedServices />
			<WhyChooseUs />
			<FAQ />
			<Testimonials />
		</section>
	);
}
