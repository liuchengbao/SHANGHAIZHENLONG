import { NextResponse } from "next/server";
import { ZodError } from "zod";
import { inquirySchema } from "@/lib/validators/inquiry";
import { sendInquiryEmail } from "@/lib/email";
import { rateLimit } from "@/lib/rate-limit";

export async function POST(request: Request) {
  try {
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      "unknown";
    const limited = rateLimit(`inquiry:${ip}`);
    if (!limited.ok) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 },
      );
    }

    const body = await request.json();
    const { locale, ...formData } = body;

    if (typeof formData.website === "string" && formData.website.trim() !== "") {
      return NextResponse.json({ success: true });
    }

    const data = inquirySchema.parse({
      ...formData,
      website: formData.website ?? "",
    });

    const { website: _honeypot, ...payload } = data;
    const result = await sendInquiryEmail({ ...payload, locale });
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
