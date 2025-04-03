'use server';

import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
	host: process.env.SMTP_HOST,
	port: Number(process.env.SMTP_PORT),
	secure: true,
	auth: {
		user: process.env.SMTP_USER,
		pass: process.env.SMTP_PASS,
	},
});

export async function sendEmail(prevState: unknown, formData: FormData) {
	const name = formData.get('name') as string;
	const email = formData.get('email') as string;
	const phone = formData.get('phone') as string;
	const message = formData.get('message') as string;
	const captchaToken = formData.get('captchaToken') as string;

	if (!message || !phone || !name) {
		return {
			error: 'Please fill all fields!',
		};
	}

	// Honeypot spam detection
	if (formData.get('website')) {
		console.log('Spam message detected : ', { name, email, phone, message });
		return { error: 'Spam detected!' };
	}
	// Verify reCAPTCHA
	const verifyRecaptcha = async (token: string) => {
		const secretKey = process.env.RECAPTCHA_SECRET_KEY;
		const response = await fetch(
			`https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`,
			{ method: 'POST' }
		);
		const data = await response.json();
		return data.success;
	};

	const isHuman = await verifyRecaptcha(captchaToken);

	if (!isHuman) {
		return {
			error: 'Captcha verification failed. Please try again.',
		};
	}

	try {
		await transporter.sendMail({
			from: process.env.SMTP_USER,
			to: process.env.CLIENT_EMAIL,
			subject: 'Web Enquiry - Fridgemechanics.co.uk',
			text: 'Hello. This email is for your website enquiry form.',
			html: `
				<h2>New Web Enquiry</h2>
				<p><strong>Name:</strong> ${name}</p>
				<p><strong>Email:</strong> ${email}</p>
				<p><strong>Phone:</strong> ${phone}</p>
				<p><strong>Message:</strong></p>
				<p>${message}</p>
			`,
		});

		return {
			message:
				"Thank you for contacting us! We'll be in touch with you shortly.",
		};
	} catch (error) {
		console.log(error);
		return {
			error: 'Something went wrong!',
		};
	}
}
