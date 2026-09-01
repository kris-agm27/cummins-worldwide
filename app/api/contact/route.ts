import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

const FROM_EMAIL = "Cummins Worldwide <admin@agmagency.com>";
const DEFAULT_NOTIFICATION_EMAIL = "kristopher@agmagency.com";
const DEFAULT_REPLY_TO_EMAIL = "Info@Cummins.World";
const SERVICES = new Set([
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

function value(form: FormData, key: string, maxLength: number) {
  const item = form.get(key);
  return typeof item === "string" ? item.trim().slice(0, maxLength) : "";
}

function escapeHtml(input: string) {
  return input.replace(/[&<>'"]/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "'": "&#39;",
    '"': "&quot;",
  })[character] || character);
}

async function sendMail({
  to,
  replyTo,
  subject,
  text,
  html,
}: {
  to: string;
  replyTo: string;
  subject: string;
  text: string;
  html: string;
}) {
  const apiKey = process.env.MAILGUN_API_KEY;
  const domain = process.env.MAILGUN_DOMAIN || "agmagency.com";
  const apiBase = process.env.MAILGUN_API_BASE || "https://api.mailgun.net";

  if (!apiKey) throw new Error("MAILGUN_API_KEY is not configured");

  const body = new FormData();
  body.set("from", FROM_EMAIL);
  body.set("to", to);
  body.set("h:Reply-To", replyTo);
  body.set("subject", subject);
  body.set("text", text);
  body.set("html", html);
  body.set("o:tracking", "no");
  body.set("o:tag", "cummins-contact-form");

  const response = await fetch(`${apiBase}/v3/${encodeURIComponent(domain)}/messages`, {
    method: "POST",
    headers: { Authorization: `Basic ${Buffer.from(`api:${apiKey}`).toString("base64")}` },
    body,
    cache: "no-store",
  });

  if (!response.ok) {
    const detail = await response.text();
    throw new Error(`Mailgun rejected the message (${response.status}): ${detail}`);
  }
}

function redirect(request: NextRequest, path: string) {
  return NextResponse.redirect(new URL(path, request.url), 303);
}

export async function POST(request: NextRequest) {
  const origin = request.headers.get("origin");
  if (origin && new URL(origin).host !== request.nextUrl.host) {
    return new NextResponse("Invalid request origin", { status: 403 });
  }

  const form = await request.formData();
  if (value(form, "_honey", 200)) return redirect(request, "/thank-you");

  const name = value(form, "name", 120);
  const email = value(form, "email", 254).toLowerCase();
  const phone = value(form, "phone", 50);
  const company = value(form, "company", 120);
  const service = value(form, "service", 100);
  const message = value(form, "message", 5000);
  const consent = value(form, "consent", 20);
  const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  if (name.length < 2 || !emailIsValid || !SERVICES.has(service) || message.length < 10 || consent !== "Agreed") {
    return redirect(request, "/contact?error=invalid#contact-form");
  }

  const safe = {
    name: escapeHtml(name),
    email: escapeHtml(email),
    phone: escapeHtml(phone || "Not provided"),
    company: escapeHtml(company || "Not provided"),
    service: escapeHtml(service),
    message: escapeHtml(message).replace(/\r?\n/g, "<br />"),
  };
  const notificationEmail = process.env.CONTACT_NOTIFICATION_EMAIL || DEFAULT_NOTIFICATION_EMAIL;
  const replyToEmail = process.env.CONTACT_REPLY_TO_EMAIL || DEFAULT_REPLY_TO_EMAIL;
  const firstName = name.split(/\s+/)[0];

  const teamText = [
    "New Cummins Worldwide website inquiry",
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${phone || "Not provided"}`,
    `Company: ${company || "Not provided"}`,
    `Service: ${service}`,
    "",
    "Message:",
    message,
  ].join("\n");

  const teamHtml = `<div style="font-family:Arial,sans-serif;color:#14212b;line-height:1.6;max-width:640px;margin:auto"><div style="background:#071725;color:#f5f1e8;padding:24px 28px;border-bottom:4px solid #c8a649"><strong style="font-size:20px;letter-spacing:.08em">CUMMINS WORLDWIDE</strong><div style="color:#e6cf88;font-size:12px;margin-top:5px">NEW WEBSITE INQUIRY</div></div><div style="padding:28px;background:#fbfaf6"><p><strong>Name:</strong> ${safe.name}<br><strong>Email:</strong> ${safe.email}<br><strong>Phone:</strong> ${safe.phone}<br><strong>Company:</strong> ${safe.company}<br><strong>Service:</strong> ${safe.service}</p><p><strong>Message</strong><br>${safe.message}</p></div></div>`;

  const confirmationText = `Hello ${firstName},\n\nThank you for contacting Cummins Worldwide. We received your inquiry about ${service}. A member of our team will review your message and follow up as soon as possible during regular business hours.\n\nFor urgent questions, call +1 727-223-5335.\n\nCummins Worldwide\n625 Court St, Suite 100\nClearwater, FL 33756`;
  const confirmationHtml = `<div style="font-family:Arial,sans-serif;color:#14212b;line-height:1.7;max-width:640px;margin:auto"><div style="background:#071725;color:#f5f1e8;padding:28px;border-bottom:4px solid #c8a649"><strong style="font-size:20px;letter-spacing:.08em">CUMMINS WORLDWIDE</strong><div style="color:#e6cf88;font-size:12px;margin-top:5px">INQUIRY RECEIVED</div></div><div style="padding:32px 28px;background:#fbfaf6"><p>Hello ${escapeHtml(firstName)},</p><p>Thank you for contacting Cummins Worldwide. We received your inquiry about <strong>${safe.service}</strong>. A member of our team will review your message and follow up as soon as possible during regular business hours.</p><p>For urgent questions, call <strong>+1 727-223-5335</strong>.</p><p style="margin-top:30px">Cummins Worldwide<br>625 Court St, Suite 100<br>Clearwater, FL 33756</p></div></div>`;

  try {
    await Promise.all([
      sendMail({
        to: notificationEmail,
        replyTo: email,
        subject: `New website inquiry: ${service}`,
        text: teamText,
        html: teamHtml,
      }),
      sendMail({
        to: email,
        replyTo: replyToEmail,
        subject: "We received your inquiry | Cummins Worldwide",
        text: confirmationText,
        html: confirmationHtml,
      }),
    ]);
    return redirect(request, "/thank-you");
  } catch (error) {
    console.error("Contact form email delivery failed", error);
    return redirect(request, "/contact?error=send#contact-form");
  }
}
