import { Resend } from "resend";
import type { InquiryFormData } from "@/lib/validators/inquiry";
import { COMPANY } from "@/lib/constants";

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function formatInquiryEmail(data: InquiryFormData & { locale?: string }) {
  const cell = (value: string) => escapeHtml(value);
  return `
    <h2>New Inquiry from ${COMPANY.shortName} Website</h2>
    <table style="border-collapse:collapse;width:100%;max-width:600px;">
      <tr><td style="padding:8px;border:1px solid #e2e8f0;font-weight:bold;">Name</td><td style="padding:8px;border:1px solid #e2e8f0;">${cell(data.name)}</td></tr>
      <tr><td style="padding:8px;border:1px solid #e2e8f0;font-weight:bold;">Company</td><td style="padding:8px;border:1px solid #e2e8f0;">${cell(data.company || "—")}</td></tr>
      <tr><td style="padding:8px;border:1px solid #e2e8f0;font-weight:bold;">Email</td><td style="padding:8px;border:1px solid #e2e8f0;">${cell(data.email)}</td></tr>
      <tr><td style="padding:8px;border:1px solid #e2e8f0;font-weight:bold;">WhatsApp</td><td style="padding:8px;border:1px solid #e2e8f0;">${cell(data.whatsapp || "—")}</td></tr>
      <tr><td style="padding:8px;border:1px solid #e2e8f0;font-weight:bold;">Country</td><td style="padding:8px;border:1px solid #e2e8f0;">${cell(data.country)}</td></tr>
      <tr><td style="padding:8px;border:1px solid #e2e8f0;font-weight:bold;">Product</td><td style="padding:8px;border:1px solid #e2e8f0;">${cell(data.productInterest)}</td></tr>
      <tr><td style="padding:8px;border:1px solid #e2e8f0;font-weight:bold;">Quantity</td><td style="padding:8px;border:1px solid #e2e8f0;">${cell(data.quantity || "—")}</td></tr>
      <tr><td style="padding:8px;border:1px solid #e2e8f0;font-weight:bold;">Language</td><td style="padding:8px;border:1px solid #e2e8f0;">${cell(data.locale || "en")}</td></tr>
    </table>
    <h3 style="margin-top:24px;">Project Details</h3>
    <p style="white-space:pre-wrap;background:#f8fafc;padding:16px;border-radius:8px;">${cell(data.message)}</p>
    <p style="color:#64748b;font-size:12px;margin-top:24px;">Received at ${new Date().toISOString()}</p>
  `;
}

export async function sendInquiryEmail(
  data: InquiryFormData & { locale?: string },
): Promise<{ sent: boolean; reason?: string }> {
  const to = process.env.INQUIRY_EMAIL ?? COMPANY.email;
  const from =
    process.env.RESEND_FROM ?? "Zhenlong Aluminum <onboarding@resend.dev>";

  if (!resend) {
    console.log("[Inquiry] Email skipped (no RESEND_API_KEY):", data);
    return { sent: false, reason: "no_api_key" };
  }

  const { error } = await resend.emails.send({
    from,
    to,
    replyTo: data.email,
    subject: `[Inquiry] ${data.productInterest} — ${data.name} (${data.country})`,
    html: formatInquiryEmail(data),
  });

  if (error) {
    console.error("[Inquiry] Resend error:", error);
    throw new Error(error.message);
  }

  return { sent: true };
}
