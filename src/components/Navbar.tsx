'use client';

import { LOGO } from '@/lib/assets';
import Image from 'next/image';
import Link from 'next/link';
import { Mail, Menu, PhoneCallIcon, X } from 'lucide-react';
import { useRef, useState } from 'react';
import { usePathname } from 'next/navigation';

const links = [
	{ title: 'Home', url: '/' },
	{ title: 'Services', url: '/#services' },
	{ title: 'Contact us', url: '/contact' },
];

function Navbar() {
	const pathname = usePathname();
	const menuRef = useRef<HTMLDivElement>(null);
	const [isMenuOpen, setisMenuOpen] = useState<boolean>(false);

	function toogleNavMenu() {
		if (menuRef.current !== null) {
			setisMenuOpen(
				menuRef.current.classList.contains('-translate-y-[calc(100%+170px)]')
			);
			menuRef.current.classList.toggle('translate-y-0');
			menuRef.current.classList.toggle('-translate-y-[calc(100%+170px)]');
		}
	}

	return (
		<nav className="relative z-50 bg-white">
			<div className="bg-blue-50">
				<div className="container py-2 text-primary font-medium text-sm md:text-base flex flex-col sm:flex-row justify-between items-center">
					<Link
						href="tel:+4407770777980"
						target="_blank"
						className="flex items-center gap-x-2"
					>
						<PhoneCallIcon size={15} /> 0777 0777 980
					</Link>
					<Link
						href="mailto:info@fridgemechanics.co.uk"
						target="_blank"
						className="flex items-center gap-x-2"
					>
						<Mail size={15} /> info@fridgemechanics.co.uk
					</Link>
				</div>
			</div>
			<div className="relative bg-white">
				<div className="container mx-auto flex items-center gap-16 justify-between">
					<Link href="/">
						<Image
							src={LOGO}
							alt="Fridge Mechanic"
							className="max-w-44 sm:max-w-56"
						/>
					</Link>

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
								Call us
							</button>
						</Link>
					</div>

					{/* mobile menu */}
					<div
						ref={menuRef}
						className="-z-[1] flex lg:hidden items-center gap-8 container absolute top-[75px] left-1/2 -translate-x-1/2 bg-white/80 backdrop-blur-[4px] -translate-y-[calc(100%+170px)] flex-col transition-all duration-500 shadow p-6 rounded-2xl"
					>
						<div className="flex flex-col items-center gap-8">
							{links.map((link, i) => (
								<Link
									key={i}
									href={link.url}
									onClick={toogleNavMenu}
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
								Call us
							</button>
						</Link>
					</div>
				</div>
			</div>
		</nav>
	);
}
export default Navbar;
