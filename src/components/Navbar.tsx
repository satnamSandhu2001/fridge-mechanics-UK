'use client';

import { LOGO } from '@/lib/assets';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, PhoneCallIcon, X } from 'lucide-react';
import { useRef, useState } from 'react';
import { usePathname } from 'next/navigation';

const links = [
	{ title: 'Home', url: '/' },
	{ title: 'Services', url: '/#' },
	{ title: 'Contact us', url: '/#' },
];

function Navbar() {
	const pathname = usePathname();
	console.log(pathname);
	const menuRef = useRef<HTMLDivElement>(null);
	const [isMenuOpen, setisMenuOpen] = useState<boolean>(false);

	function toogleNavMenu() {
		if (menuRef.current !== null) {
			setisMenuOpen(
				menuRef.current.classList.contains('-translate-y-[calc(100%+130px)]')
			);
			menuRef.current.classList.toggle('translate-y-0');
			menuRef.current.classList.toggle('-translate-y-[calc(100%+130px)]');
		}
	}

	return (
		<nav className="relative z-50">
			<div className="container mx-auto flex items-center gap-16 justify-between">
				<div>
					<Image
						src={LOGO}
						alt="Fridge Mechanic"
						className="max-w-44 sm:max-w-56"
					/>
				</div>

				{/* hamburger */}
				<button onClick={toogleNavMenu} className="lg:hidden text-primary">
					{isMenuOpen ? <X size={40} /> : <Menu size={40} />}
				</button>

				<div className="w-full hidden lg:flex items-center justify-between gap-16">
					<div />
					<div className="flex gap-8">
						{links.map((link, i) => (
							<Link
								key={i}
								href={link.url}
								className={`font-medium underline decoration-2 underline-offset-8 hover:decoration-primary transition-all ${
									pathname === link.url
										? 'text-primary decoration-primary'
										: 'text-black decoration-transparent'
								}`}
							>
								{link.title}
							</Link>
						))}
					</div>
					<Link href="tel:+4407770777980">
						<button className="button-primary flex items-center gap-2">
							<PhoneCallIcon color="#fff" size={18} />
							0777-0777-980
						</button>
					</Link>
				</div>

				<div
					ref={menuRef}
					className="-z-[1] flex lg:hidden items-center gap-8 container absolute top-[80px] left-1/2 -translate-x-1/2 bg-white/80 backdrop-blur-[4px] -translate-y-[calc(100%+130px)] flex-col transition-all duration-500 shadow p-6 rounded-2xl"
				>
					<div className="flex flex-col items-center gap-8">
						{links.map((link, i) => (
							<Link
								key={i}
								href={link.url}
								className={`font-medium underline decoration-2 underline-offset-8 hover:decoration-primary transition-all ${
									pathname === link.url
										? 'text-primary decoration-primary'
										: 'text-black decoration-transparent'
								}`}
							>
								{link.title}
							</Link>
						))}
					</div>
					<Link href="tel:+4407770777980">
						<button className="button-primary flex items-center gap-2">
							<PhoneCallIcon color="#fff" size={18} />
							0777-0777-980
						</button>
					</Link>
				</div>
			</div>
		</nav>
	);
}
export default Navbar;
