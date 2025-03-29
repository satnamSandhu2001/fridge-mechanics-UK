import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const PlusJakartaSans = Plus_Jakarta_Sans({
	variable: '--font-sans',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Fridge Mechanics | Fridge Repair Buckinghamshire',
	description:
		'Fridge Mechanics offers expert fridge repair across slough, including Buckinghamshire, Bracknell, Reading & more. 24/7 service. Call 0777 0777 980 for reliable repairs.',
	keywords:
		'fridge mechanic slough, refrigerator repair Buckinghamshire, appliance repair Buckinghamshire, fridge service Slough, fridge repair Bracknell, fridge repair Reading, fridge repair Maidenhead, fridge repair Newbury, fridge repair Wokingham, 24/7 fridge repair Buckinghamshire, commercial fridge repair Buckinghamshire, home fridge repair Buckinghamshire, 0777 0777 980, info@fridgemechanics.co.uk',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${PlusJakartaSans.variable} antialiased tracking-wide text`}
			>
				<Navbar />
				<main>{children}</main>
				<Footer />
			</body>
		</html>
	);
}
