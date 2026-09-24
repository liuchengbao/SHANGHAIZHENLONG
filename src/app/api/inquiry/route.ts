import { NextResponse } from "next/server";
import { ZodError } from "zod";
import { inquirySchema } from "@/lib/validators/inquiry";
import { sendInquiryEmail } from "@/lib/email";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { locale, ...formData } = body;
    const data = inquirySchema.parse(formData);

    const result = await sendInquiryEmail({ ...data, locale });
    if (!result.sent) {
      return NextResponse.json(
        { error: "Inquiry email is not configured yet." },
        { status: 503 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json(
        { error: "Invalid form data. Please check your inputs." },
        { status: 400 },
      );
    }
    console.error("[Inquiry] Error:", error);
    return NextResponse.json(
      { error: "Failed to submit inquiry. Please try again later." },
      { status: 500 },
    );
  }
}
