import Link from 'next/link';
import React from 'react';

function Footer() {
	return (
		<footer className="bg-blue-50">
			<div className="container grid sm:grid-cols-2 gap-x-24 gap-y-8 py-16 sm:py-20">
				<div>
					<h4 className="relative mb-6 h5 before:content-[''] before:absolute before:-bottom-2 before:left-0 before:w-8 before:bg-primary before:h-1 before:rounded-full">
						About Us
					</h4>
					<p>
						We&apos;ve been providing a dependable fridge freezer repair service
						for over a decade. Our skilled technicians are committed to
						delivering quality repairs and installations you can count on.
					</p>
					<div className="font-bold mt-3">
						<p className="text-sm text-primary">Emergency: </p>
						<p className="hover:text-primary transition-colors">
							<Link href="tel:+4407770777980" target="_blank">
								0777 0777 980
							</Link>
						</p>
					</div>
				</div>

				<div>
					<h4 className="relative mb-6 h5 before:content-[''] before:absolute before:-bottom-2 before:left-0 before:w-8 before:bg-primary before:h-1 before:rounded-full">
						Contact Info
					</h4>

					<div className="space-y-2">
						<div>
							<p className="font-semibold">Support: </p>
							<p className="hover:text-primary transition-colors">
								<Link href="tel:+4407770777980" target="_blank">
									0777 0777 980
								</Link>
							</p>
						</div>
						<div>
							<p className="font-semibold">Email: </p>
							<p className="hover:text-primary transition-colors">
								<Link href="mailto:info@fridgemechanics.co.uk" target="_blank">
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
