import ContactForm from '@/components/ContactForm';
import PageBreadcrumb from '@/components/PageBreadcrumb';
import { Clock, Mail, MapPin, PhoneCall } from 'lucide-react';
import React from 'react';

function Contact() {
	return (
		<section className="min-h-screen bg-gray-50">
			<PageBreadcrumb title="Contact us" breadcrumb={['Home', 'contact']} />

			<div className="container grid xl:grid-cols-[3fr_2fr] gap-16 py-16 items-center">
				<div>
					<h1 className="h2">Contact Information</h1>
					<p className="mt-4 text-gray-500">
						When your refrigerator breaks down, you need a reliable and
						efficient repair service you can trust. Our experienced technicians
						are dedicated to providing prompt and professional solutions for all
						your fridge repair needs. Don&apos;t hesitate to reach out to us for
						expert assistance.
					</p>

					<div className="grid sm:grid-cols-2 gap-8 mt-8">
						<div className="rounded-2xl bg-white p-4 flex gap-4 shadow-soft">
							<div className="bg-slate-100 h-16 aspect-square flex items-center justify-center rounded-2xl">
								<MapPin size={35} strokeWidth={2} />
							</div>
							<div>
								<h5 className="h5 mb-1">Our Address</h5>
								<p className="text-gray-700">
									19, Ragstone Road SL12PP (Slough)
								</p>
							</div>
						</div>
						<div className="rounded-2xl bg-white p-4 flex gap-4 shadow-soft">
							<div className="bg-slate-100 h-16 aspect-square flex items-center justify-center rounded-2xl">
								<PhoneCall size={35} strokeWidth={2} />
							</div>
							<div>
								<h5 className="h5 mb-1">Phone Number</h5>
								<p className="text-gray-700">0777 0777 980</p>
							</div>
						</div>
						<div className="rounded-2xl bg-white p-4 flex gap-4 shadow-soft">
							<div className="bg-slate-100 h-16 aspect-square flex items-center justify-center rounded-2xl">
								<Mail size={35} strokeWidth={2} />
							</div>
							<div>
								<h5 className="h5 mb-1">Email Address</h5>
								<p className="text-gray-700">info@fridgemechanics.co.uk</p>
							</div>
						</div>

						<div className="rounded-2xl bg-white p-4 flex gap-4 shadow-soft">
							<div className="bg-slate-100 h-16 aspect-square flex items-center justify-center rounded-2xl">
								<Clock size={35} strokeWidth={2} />
							</div>
							<div>
								<h5 className="h5 mb-1">Working Time</h5>
								<p className="text-gray-700">We are available 24/7</p>
							</div>
						</div>
					</div>
				</div>

				<div>
					<ContactForm />
				</div>
			</div>
		</section>
	);
}

export default Contact;
