'use client';

import { sendEmail } from '@/actions/mail.action';
import React, {
	useActionState,
	useState,
	useRef,
	startTransition,
} from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

function ContactForm() {
	const [state, formAction, isPending] = useActionState(sendEmail, null);
	const [captchaError, setCaptchaError] = useState<string | null>(null);
	const [showCaptcha, setShowCaptcha] = useState<boolean>(false);
	const recaptchaRef = useRef<ReCAPTCHA>(null);

	const handleFieldFocus = () => {
		if (!showCaptcha) setShowCaptcha(true);
	};
	const handleCaptchaChange = (token: string | null) => {
		if (token) setCaptchaError(null);
	};

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const token = recaptchaRef.current?.getValue();
		if (!token) {
			setCaptchaError('Please complete the CAPTCHA.');
			return;
		}

		const form = event.currentTarget;
		const formData = new FormData(form);
		formData.append('captchaToken', token);
		startTransition(() => {
			formAction(formData);
		});
	};

	return (
		<div className="rounded-2xl shadow-soft py-8 px-4 sm:px-8 md:p-10 bg-white">
			<h4 className="h4 text-center">Book An Appointment</h4>

			<form onSubmit={handleSubmit} className="mt-10 w-full space-y-4">
				{/* Honeypot field */}
				<div style={{ position: 'absolute', left: '-5000px', opacity: 0 }}>
					<label htmlFor="website">Website</label>
					<input
						name="website"
						type="text"
						tabIndex={-1}
						autoComplete="off"
						id="website"
					/>
				</div>

				<input
					name="name"
					type="text"
					required
					maxLength={100}
					placeholder="Your Name"
					className="outline-none bg-slate-100 px-6 py-3 w-full rounded-xl overflow-hidden text-black"
					onFocus={handleFieldFocus}
				/>
				<input
					name="email"
					type="email"
					maxLength={100}
					placeholder="Your Email address"
					className="outline-none bg-slate-100 px-6 py-3 w-full rounded-xl overflow-hidden text-black"
					onFocus={handleFieldFocus}
				/>
				<input
					name="phone"
					required
					type="text"
					minLength={10}
					maxLength={15}
					placeholder="Your Mobile number"
					className="outline-none bg-slate-100 px-6 py-3 w-full rounded-xl overflow-hidden text-black"
					onFocus={handleFieldFocus}
				/>
				<textarea
					name="message"
					placeholder="Write Message..."
					className="outline-none bg-slate-100 px-6 py-3 w-full rounded-xl overflow-hidden text-black"
					rows={4}
					onFocus={handleFieldFocus}
				/>

				{/* Show captcha only after user interacts */}
				{showCaptcha && (
					<div className="my-4">
						<ReCAPTCHA
							ref={recaptchaRef}
							sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string}
							onChange={handleCaptchaChange}
						/>
						{captchaError && (
							<p className="text-red-500 mt-2">{captchaError}</p>
						)}
					</div>
				)}

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
