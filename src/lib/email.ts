import nodemailer from 'nodemailer';

// Create reusable transporter object using SMTP transport
export const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.EMAIL_PORT || '587'),
    secure: process.env.EMAIL_SECURE === 'true',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

// Verify transporter configuration
export async function verifyEmailConfig() {
    try {
        await transporter.verify();
        console.log('Email server is ready to send messages');
        return true;
    } catch (error) {
        console.error('Email configuration error:', error);
        return false;
    }
}

// Send contact form email
export async function sendContactEmail(data: {
    name: string;
    email: string;
    subject: string;
    message: string;
}) {
    const mailOptions = {
        from: `"${data.name}" <${process.env.EMAIL_FROM}>`,
        to: process.env.EMAIL_TO || 'webagency2614@gmail.com',
        replyTo: data.email,
        subject: `Contact Form: ${data.subject}`,
        html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
                    New Contact Form Submission
                </h2>
                <div style="background-color: #f8f9fa; padding: 20px; border-radius: 5px; margin: 20px 0;">
                    <p style="margin: 10px 0;"><strong>Name:</strong> ${data.name}</p>
                    <p style="margin: 10px 0;"><strong>Email:</strong> ${data.email}</p>
                    <p style="margin: 10px 0;"><strong>Subject:</strong> ${data.subject}</p>
                </div>
                <div style="margin: 20px 0;">
                    <h3 style="color: #555;">Message:</h3>
                    <p style="line-height: 1.6; color: #666;">${data.message.replace(/\n/g, '<br>')}</p>
                </div>
                <hr style="margin: 30px 0; border: none; border-top: 1px solid #ddd;">
                <p style="color: #999; font-size: 12px; text-align: center;">
                    This email was sent from your website's contact form
                </p>
            </div>
        `,
        text: `
New Contact Form Submission

Name: ${data.name}
Email: ${data.email}
Subject: ${data.subject}

Message:
${data.message}
        `,
    };

    return await transporter.sendMail(mailOptions);
}

// Send career application email with resume attachment
export async function sendCareerEmail(data: {
    name: string;
    email: string;
    phone: string;
    position: string;
    coverLetter: string;
    resume?: { buffer: Buffer; filename: string; mimetype: string };
}) {
    const mailOptions = {
        from: `"${data.name}" <${process.env.EMAIL_FROM}>`,
        to: process.env.EMAIL_TO || 'webagency2614@gmail.com',
        replyTo: data.email,
        subject: `Career Application: ${data.position} - ${data.name}`,
        html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                <h2 style="color: #333; border-bottom: 2px solid #28a745; padding-bottom: 10px;">
                    New Career Application
                </h2>
                <div style="background-color: #f8f9fa; padding: 20px; border-radius: 5px; margin: 20px 0;">
                    <p style="margin: 10px 0;"><strong>Applicant Name:</strong> ${data.name}</p>
                    <p style="margin: 10px 0;"><strong>Email:</strong> ${data.email}</p>
                    <p style="margin: 10px 0;"><strong>Phone:</strong> ${data.phone}</p>
                    <p style="margin: 10px 0;"><strong>Position Applied:</strong> ${data.position}</p>
                </div>
                <div style="margin: 20px 0;">
                    <h3 style="color: #555;">Cover Letter:</h3>
                    <p style="line-height: 1.6; color: #666; white-space: pre-wrap;">${data.coverLetter}</p>
                </div>
                ${data.resume ? '<p style="color: #28a745; margin: 20px 0;"><strong>📎 Resume attached</strong></p>' : '<p style="color: #dc3545; margin: 20px 0;"><strong>⚠️ No resume attached</strong></p>'}
                <hr style="margin: 30px 0; border: none; border-top: 1px solid #ddd;">
                <p style="color: #999; font-size: 12px; text-align: center;">
                    This email was sent from your website's career application form
                </p>
            </div>
        `,
        text: `
New Career Application

Applicant Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}
Position Applied: ${data.position}

Cover Letter:
${data.coverLetter}

${data.resume ? 'Resume attached' : 'No resume attached'}
        `,
        attachments: data.resume
            ? [
                {
                    filename: data.resume.filename,
                    content: data.resume.buffer,
                    contentType: data.resume.mimetype,
                },
            ]
            : [],
    };

    return await transporter.sendMail(mailOptions);
}
