import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, subject, message } = body;

        // Simulate sending email to enquiry@codefixerz.com
        console.log("--- Sending Contact Email ---");
        console.log("To: enquiry@codefixerz.com");
        console.log(`From: ${name} <${email}>`);
        console.log(`Subject: ${subject}`);
        console.log(`Message: ${message}`);
        console.log("-----------------------------");

        // Here you would typically use Nodemailer or an email service API
        // await transporter.sendMail({ ... });

        return NextResponse.json({ success: true, message: "Email sent successfully" });
    } catch (error) {
        console.error("Error sending email:", error);
        return NextResponse.json({ success: false, message: "Failed to send email" }, { status: 500 });
    }
}
