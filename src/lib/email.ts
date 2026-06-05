import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.EMAIL_PORT || '587'),
    secure: process.env.EMAIL_SECURE === 'true',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

export const sendEmail = async ({
    to,
    subject,
    text,
    html,
    attachments,
    replyTo
}: {
    to: string;
    subject: string;
    text?: string;
    html?: string;
    attachments?: any[];
    replyTo?: string;
}) => {
    try {
        const info = await transporter.sendMail({
            from: process.env.EMAIL_FROM || process.env.EMAIL_USER,
            to,
            subject,
            text,
            html,
            attachments,
            replyTo
        });
        return { success: true, info };
    } catch (error) {
        console.error("Error sending email:", error);
        return { success: false, error };
    }
};
