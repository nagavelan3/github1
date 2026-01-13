
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    try {
        const data = await request.json();

        // Configure transporter with Gmail (or other SMTP)
        // NOTE: For Gmail, you need an App Password if 2FA is on.
        // For testing/dev, we can just log efficiently or use Ethereal.
        // But assuming user wants to use their gmail:
        const userEmail = process.env.EMAIL_USER || 'nagavelan2005@gmail.com';
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: userEmail,
                pass: process.env.EMAIL_PASSWORD || '',
            },
        });

        // Email content
        const subject = data.subject || "New Form Submission - CMP Builders";
        let textContent = "";

        for (const [key, value] of Object.entries(data)) {
            if (key !== 'subject' && key !== 'type') {
                textContent += `${key.charAt(0).toUpperCase() + key.slice(1)}: ${value}\n`;
            }
        }

        const mailOptions = {
            from: userEmail,
            to: 'nagavelan2005@gmail.com',
            replyTo: data.email,
            subject: subject,
            text: textContent,
        };

        // Attempt to send
        // Note: Without a valid password in env, this will fail authentication.
        // We will catch it and return a specific message.
        if (process.env.EMAIL_PASSWORD) {
            await transporter.sendMail(mailOptions);
            return NextResponse.json({ status: 'success', message: 'Email sent successfully via Nodemailer' });
        } else {
            // Mock success for development if no password provided, but log it.
            console.log("MOCK EMAIL SEND (No Password Configured):");
            console.log(mailOptions);
            return NextResponse.json({ status: 'success', message: 'Mock email sent (check console)' });
        }

    } catch (error) {
        console.error('Email sending error:', error);
        return NextResponse.json({ status: 'error', message: 'Failed to send email' }, { status: 500 });
    }
}
