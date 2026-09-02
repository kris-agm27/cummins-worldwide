import { NextResponse } from "next/server";

export const runtime = "nodejs";

const ADMIN_EMAIL = "admin@agmagency.com";
const FROM_EMAIL = `Cummins Worldwide <${ADMIN_EMAIL}>`;
const allowedServices = new Set([
  "Budgeting Resources",
  "Tax Solutions",
  "Bookkeeping & Accounting",
  "Risk Management",
  "Policy & Training Programs",
  "Talent Sourcing",
  "Employee Retention Resources",
  "Corporate Compliance",
  "General Inquiry",
]);

function field(formData: FormData, name: string, maxLength: number) {
  const value = formData.get(name);
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function escapeHtml(value: string) {
  return value.replace(/[&<>'"]/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "'": "&#39;",
    '"': "&quot;",
  })[character] ?? character);
}

async function sendEmail(apiKey: string, payload: Record<string, unknown>, idempotencyKey: string) {
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
      "Idempotency-Key": idempotencyKey,
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error(`Email provider returned ${response.status}`);
  }
}

export async function POST(request: Request) {
  const successUrl = new URL("/thank-you", request.url);
  const errorUrl = new URL("/contact?status=email-error#contact-form", request.url);

  try {
    const formData = await request.formData();

    // Silently accept bot submissions caught by the honeypot.
    if (field(formData, "_honey", 200)) {
      return NextResponse.redirect(successUrl, 303);
    }

    const name = field(formData, "name", 120);
    const email = field(formData, "email", 254).toLowerCase();
    const phone = field(formData, "phone", 60);
    const company = field(formData, "company", 160);
    const service = field(formData, "service", 120);
    const message = field(formData, "message", 5000);
    const consent = field(formData, "consent", 20);

    if (
      !name ||
      !email ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
      !allowedServices.has(service) ||
      !message ||
      consent !== "Agreed"
    ) {
      return NextResponse.redirect(new URL("/contact?status=invalid#contact-form", request.url), 303);
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) throw new Error("RESEND_API_KEY is not configured");

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone || "Not provided");
    const safeCompany = escapeHtml(company || "Not provided");
    const safeService = escapeHtml(service);
    const safeMessage = escapeHtml(message).replace(/\n/g, "<br />");
    const requestId = crypto.randomUUID();

    await Promise.all([
      sendEmail(apiKey, {
        from: FROM_EMAIL,
        to: [email],
        reply_to: ADMIN_EMAIL,
        subject: "We received your Cummins Worldwide inquiry",
        text: `Hi ${name},\n\nThank you for contacting Cummins Worldwide about ${service}. We received your inquiry, and a member of our team will follow up as soon as possible.\n\nBest,\nCummins Worldwide`,
        html: `<div style="font-family:Arial,sans-serif;color:#071725;line-height:1.7;max-width:620px"><p>Hi ${safeName},</p><p>Thank you for contacting Cummins Worldwide about <strong>${safeService}</strong>. We received your inquiry, and a member of our team will follow up as soon as possible.</p><p>Best,<br /><strong>Cummins Worldwide</strong></p></div>`,
      }, `${requestId}-confirmation`),
      sendEmail(apiKey, {
        from: FROM_EMAIL,
        to: [ADMIN_EMAIL],
        reply_to: email,
        subject: `New Cummins Worldwide inquiry — ${service}`,
        text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || "Not provided"}\nCompany: ${company || "Not provided"}\nService: ${service}\n\nMessage:\n${message}`,
        html: `<div style="font-family:Arial,sans-serif;color:#071725;line-height:1.6;max-width:680px"><h2>New website inquiry</h2><p><strong>Name:</strong> ${safeName}<br /><strong>Email:</strong> ${safeEmail}<br /><strong>Phone:</strong> ${safePhone}<br /><strong>Company:</strong> ${safeCompany}<br /><strong>Service:</strong> ${safeService}</p><p><strong>Message:</strong><br />${safeMessage}</p></div>`,
      }, `${requestId}-internal`),
    ]);

    return NextResponse.redirect(successUrl, 303);
  } catch (error) {
    console.error("Contact form email failed", error instanceof Error ? error.message : "Unknown error");
    return NextResponse.redirect(errorUrl, 303);
  }
}
