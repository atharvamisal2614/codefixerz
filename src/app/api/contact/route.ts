import { NextResponse } from "next/server";
import { sendContactEmail } from "@/lib/email";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, subject, message } = body;

        // Validate required fields
        if (!name || !email || !subject || !message) {
            return NextResponse.json(
                { success: false, message: "All fields are required" },
                { status: 400 }
            );
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { success: false, message: "Invalid email address" },
                { status: 400 }
            );
        }

        console.log("--- Sending Contact Email ---");
        console.log("To: webagency2614@gmail.com");
        console.log(`From: ${name} <${email}>`);
        console.log(`Subject: ${subject}`);
        console.log("-----------------------------");

        // Send email using nodemailer
        await sendContactEmail({
            name,
            email,
            subject,
            message,
        });

        console.log("✅ Contact email sent successfully");

        return NextResponse.json({
            success: true,
            message: "Email sent successfully. We'll get back to you soon!"
        });
    } catch (error) {
        console.error("❌ Error sending email:", error);
        return NextResponse.json(
            {
                success: false,
                message: "Failed to send email. Please try again later."
            },
            { status: 500 }
        );
    }
}
