import { NextResponse } from "next/server";
import { sendCareerEmail } from "@/lib/email";

export async function POST(request: Request) {
    try {
        const formData = await request.formData();
        const name = formData.get("name") as string;
        const email = formData.get("email") as string;
        const phone = formData.get("phone") as string;
        const position = formData.get("position") as string;
        const coverLetter = formData.get("coverLetter") as string;
        const resume = formData.get("resume") as File | null;

        // Validate required fields
        if (!name || !email || !phone || !position || !coverLetter) {
            return NextResponse.json(
                { success: false, message: "All fields except resume are required" },
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

        console.log("--- Sending Career Application Email ---");
        console.log("To: webagency2614@gmail.com");
        console.log(`Applicant: ${name} <${email}>`);
        console.log(`Phone: ${phone}`);
        console.log(`Position: ${position}`);

        // Process resume file if uploaded
        let resumeData: { buffer: Buffer; filename: string; mimetype: string } | undefined;
        if (resume && resume.size > 0) {
            const buffer = Buffer.from(await resume.arrayBuffer());
            resumeData = {
                buffer,
                filename: resume.name,
                mimetype: resume.type,
            };
            console.log(`Resume File: ${resume.name} (${resume.size} bytes, ${resume.type})`);
        } else {
            console.log("Resume: No file uploaded");
        }
        console.log("----------------------------------------");

        // Send email with resume attachment
        await sendCareerEmail({
            name,
            email,
            phone,
            position,
            coverLetter,
            resume: resumeData,
        });

        console.log("✅ Career application email sent successfully");

        return NextResponse.json({
            success: true,
            message: "Application submitted successfully. We'll review it and get back to you soon!"
        });
    } catch (error) {
        console.error("❌ Error processing application:", error);
        return NextResponse.json(
            {
                success: false,
                message: "Failed to process application. Please try again later."
            },
            { status: 500 }
        );
    }
}
