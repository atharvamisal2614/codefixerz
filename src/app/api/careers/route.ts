import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const formData = await request.formData();
        const name = formData.get("name");
        const email = formData.get("email");
        const phone = formData.get("phone");
        const position = formData.get("position");
        const coverLetter = formData.get("coverLetter");
        const resume = formData.get("resume") as File | null;

        // Simulate sending email to hr@codefixerz.com with attachment
        console.log("--- Sending Career Application Email ---");
        console.log("To: hr@codefixerz.com");
        console.log(`Applicant: ${name} <${email}>`);
        console.log(`Phone: ${phone}`);
        console.log(`Position: ${position}`);
        console.log(`Cover Letter: ${coverLetter}`);

        if (resume) {
            console.log(`Resume File: ${resume.name} (${resume.size} bytes, ${resume.type})`);
            // In a real app, you would buffer the file and attach it
            // const buffer = Buffer.from(await resume.arrayBuffer());
        } else {
            console.log("Resume: No file uploaded");
        }
        console.log("----------------------------------------");

        return NextResponse.json({ success: true, message: "Application submitted successfully" });
    } catch (error) {
        console.error("Error processing application:", error);
        return NextResponse.json({ success: false, message: "Failed to process application" }, { status: 500 });
    }
}
