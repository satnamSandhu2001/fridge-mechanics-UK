'use client';

import { sendEmail } from '@/actions/mail.action';
import React, { useActionState } from 'react';

function ContactForm() {
	const [state, formAction, isPending] = useActionState(sendEmail, null);

	return (
		<div className="rounded-2xl shadow-soft py-8 px-4 sm:px-8 md:p-10 bg-white">
			<h4 className="h4 text-center">Book An Appointment</h4>

			<form action={formAction} className="mt-10 w-full space-y-4">
				<input
					name="name"
					type="text"
					required
					maxLength={100}
					placeholder="Your Name"
					className="outline-none bg-slate-100 px-6 py-3 w-full rounded-xl overflow-hidden text-black"
				/>
				<input
					name="email"
					type="email"
					maxLength={100}
					placeholder="Your Email address"
					className="outline-none bg-slate-100 px-6 py-3 w-full rounded-xl overflow-hidden text-black"
				/>
				<input
					name="phone"
					required
					type="text"
					minLength={10}
					maxLength={15}
					placeholder="Your Mobile number"
					className="outline-none bg-slate-100 px-6 py-3 w-full rounded-xl overflow-hidden text-black"
				/>
				<textarea
					name="message"
					placeholder="Write Message..."
					className="outline-none bg-slate-100 px-6 py-3 w-full rounded-xl overflow-hidden text-black"
					rows={4}
				/>
				{state && (
					<p
						className={`rounded-xl p-3 ${
							state.error
								? 'text-red-500 bg-red-50'
								: 'text-green-500 bg-green-50'
						}`}
					>
						{state.error || state.message}
					</p>
				)}
				<button className="button-primary w-full" disabled={isPending}>
					{isPending ? 'Submitting...' : 'Send Message'}
				</button>
			</form>
		</div>
	);
}
export default ContactForm;
