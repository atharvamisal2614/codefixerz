import { NextRequest, NextResponse } from "next/server";
import { sendEmail } from "@/lib/email";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const position = formData.get("position") as string;
    const resumeFile = formData.get("resume") as File | null;

    if (!name || !email || !position || !resumeFile) {
      return NextResponse.json({ error: "All fields and resume are required" }, { status: 400 });
    }

    const buffer = Buffer.from(await resumeFile.arrayBuffer());

    const htmlContent = `
      <h2>New Career Application</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Position Applied For:</strong> ${position}</p>
    `;

    const result = await sendEmail({
      to: process.env.EMAIL_TO || "webagency2614@gmail.com",
      subject: `New Application for ${position} from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nPosition: ${position}`,
      html: htmlContent,
      replyTo: email,
      attachments: [
        {
          filename: resumeFile.name,
          content: buffer,
        },
      ],
    });

    if (!result.success) {
      return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
    }

    return NextResponse.json({ success: true, message: "Application sent successfully" });
  } catch (error) {
    console.error("Careers API error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
