import Link from 'next/link';
import React from 'react';

function Footer() {
	return (
		<footer className="bg-slate-100">
			<div className="container grid sm:grid-cols-2 md:grid-cols-3 gap-16 py-16 sm:py-32">
				<div>
					<h5 className="relative mb-6 h5 before:content-[''] before:absolute before:-bottom-2 before:left-0 before:w-8 before:bg-primary before:h-1 before:rounded-full">
						About Us
					</h5>
					<p>
						We&apos;ve been providing dependable fridge repairing, plumbing, and
						electrical services from decade. Our skilled technicians are
						committed to delivering quality repairs and installations you can
						count on.
					</p>
					<div className="font-bold mt-3">
						<p className="text-sm text-primary">Emergency: </p>
						<p className="hover:text-primary transition-colors">
							<Link href="tel:+4407770777980" target="_blank">
								(+44) 0777 0777 980
							</Link>
						</p>
					</div>
				</div>

				<div>
					<h5 className="relative mb-6 h5 before:content-[''] before:absolute before:-bottom-2 before:left-0 before:w-8 before:bg-primary before:h-1 before:rounded-full">
						Services
					</h5>
					<ul className="list-inside list-disc">
						<li className="hover:text-primary transition-colors">
							<Link href="/contact">Fridge Repair</Link>
						</li>
						<li className="hover:text-primary transition-colors">
							<Link href="/contact">Plumbing Services</Link>
						</li>
						<li className="hover:text-primary transition-colors">
							<Link href="/contact">AC Repair</Link>
						</li>
						<li className="hover:text-primary transition-colors">
							<Link href="/contact">Circuit Upgrades</Link>
						</li>
						<li className="hover:text-primary transition-colors">
							<Link href="/contact">Pipe Replacements</Link>
						</li>
					</ul>
				</div>

				<div>
					<h5 className="relative mb-6 h5 before:content-[''] before:absolute before:-bottom-2 before:left-0 before:w-8 before:bg-primary before:h-1 before:rounded-full">
						Contact Info
					</h5>

					<div className="space-y-2">
						<div>
							<p className="font-semibold">Support: </p>
							<p className="hover:text-primary transition-colors">
								<Link href="tel:+4407770777980" target="_blank">
									(+44) 0777 0777 980
								</Link>
							</p>
						</div>
						<div>
							<p className="font-semibold">Email: </p>
							<p className="hover:text-primary transition-colors">
								<Link href="mail:info@fridgemechanics.co.uk" target="_blank">
									info@fridgemechanics.co.uk
								</Link>
							</p>
						</div>
					</div>
				</div>
			</div>

			<div className="container border-t border-gray-200 py-6 text-center">
				@{new Date().getFullYear()} All right Reserved by{' '}
				<span className="text-primary">fridgemechanics.co.uk</span>
			</div>
		</footer>
	);
}

export default Footer;
