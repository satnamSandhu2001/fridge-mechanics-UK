import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';

const PlusJakartaSans = Plus_Jakarta_Sans({
	variable: '--font-sans',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Fridge Mechanics',
	description: 'Fridge Mechanics',
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
			</body>
		</html>
	);
}
