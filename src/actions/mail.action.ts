'use server';

import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
	host: 'smtp.gmail.com',
	service: 'gmail',
	port: 465,
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

	if (!message || !phone || !name) {
		return {
			error: 'Please fill all fields!',
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
