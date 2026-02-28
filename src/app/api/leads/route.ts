import { NextRequest, NextResponse } from "next/server";

type LeadPayload = {
  name?: string;
  phone?: string;
  email?: string;
  city?: string;
  serviceType?: string;
  service?: string;
  urgency?: string;
  preferredContact?: string;
  message?: string;
  details?: string;
  consent?: boolean;
  company?: string;
  sourcePage?: string;
  landingUrl?: string;
  referrer?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  utmTerm?: string;
  utmContent?: string;
};

function clean(value: unknown, maxLength: number): string {
  if (typeof value !== "string") {
    return "";
  }

  return value.trim().slice(0, maxLength);
}

function isValidPhone(phone: string): boolean {
  const digits = phone.replace(/\D/g, "");
  return digits.length >= 10 && digits.length <= 15;
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

async function writeToAirtable(payload: {
  name: string;
  phone: string;
  email: string;
  city: string;
  serviceType: string;
  urgency: string;
  message: string;
  sourcePage: string;
  submittedAt: string;
}): Promise<boolean | null> {
  const apiKey = process.env.AIRTABLE_API_KEY;
  const baseId = process.env.AIRTABLE_BASE_ID;
  const tableName = process.env.AIRTABLE_TABLE_NAME;

  if (!apiKey || !baseId || !tableName) {
    return null;
  }

  const response = await fetch(
    `https://api.airtable.com/v0/${baseId}/${encodeURIComponent(tableName)}`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        records: [
          {
            fields: {
              Name: payload.name,
              Phone: payload.phone,
              Email: payload.email,
              City: payload.city,
              "Service Type": payload.serviceType,
              Urgency: payload.urgency,
              Message: payload.message,
              "Submitted At": payload.submittedAt,
              Source: "summerhousemedspa.com",
              "Source Page": payload.sourcePage,
            },
          },
        ],
      }),
    },
  );

  return response.ok;
}

async function sendWebhook(payload: Record<string, string>): Promise<boolean | null> {
  const webhookUrl = process.env.LEAD_WEBHOOK_URL;

  if (!webhookUrl) {
    return null;
  }

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    return response.ok;
  } catch {
    return false;
  }
}

function buildLeadMessage(rawMessage: string, context: Array<[string, string]>): string {
  const contextRows = context
    .filter(([, value]) => value)
    .map(([label, value]) => `${label}: ${value}`);

  if (!contextRows.length) {
    return rawMessage;
  }

  if (!rawMessage) {
    return contextRows.join("\n");
  }

  return `${rawMessage}\n\n--- Lead Context ---\n${contextRows.join("\n")}`;
}

export async function POST(req: NextRequest) {
  let body: LeadPayload;

  try {
    body = (await req.json()) as LeadPayload;
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const payload = {
    name: clean(body.name, 80),
    phone: clean(body.phone, 30),
    email: clean(body.email, 120),
    city: clean(body.city, 80) || "Dallas",
    serviceType: clean(body.serviceType ?? body.service, 80),
    urgency: clean(body.urgency, 40) || "Standard",
    preferredContact: clean(body.preferredContact, 30) || "text",
    message: clean(body.message ?? body.details, 2000),
    consent: Boolean(body.consent),
    company: clean(body.company, 80),
    sourcePage: clean(body.sourcePage, 160) || "unknown",
    landingUrl: clean(body.landingUrl, 500),
    referrer: clean(body.referrer, 500),
    utmSource: clean(body.utmSource, 120),
    utmMedium: clean(body.utmMedium, 120),
    utmCampaign: clean(body.utmCampaign, 180),
    utmTerm: clean(body.utmTerm, 180),
    utmContent: clean(body.utmContent, 180),
    submittedAt: new Date().toISOString(),
  };

  if (payload.company) {
    return NextResponse.json({ success: true }, { status: 200 });
  }

  if (!payload.name || !payload.phone) {
    return NextResponse.json({ error: "Please provide your name and phone number." }, { status: 400 });
  }

  if (!payload.consent) {
    return NextResponse.json({ error: "Please confirm contact consent." }, { status: 400 });
  }

  if (!isValidPhone(payload.phone)) {
    return NextResponse.json({ error: "Please provide a valid phone number" }, { status: 400 });
  }

  if (payload.email && !isValidEmail(payload.email)) {
    return NextResponse.json({ error: "Please provide a valid email address" }, { status: 400 });
  }

  const fullMessage = buildLeadMessage(payload.message, [
    ["Preferred Contact", payload.preferredContact],
    ["Landing URL", payload.landingUrl],
    ["Referrer", payload.referrer],
    ["utm_source", payload.utmSource],
    ["utm_medium", payload.utmMedium],
    ["utm_campaign", payload.utmCampaign],
    ["utm_term", payload.utmTerm],
    ["utm_content", payload.utmContent],
  ]);

  const sinkPayload = {
    ...payload,
    message: fullMessage,
  };

  const [airtableResult, webhookResult] = await Promise.all([
    writeToAirtable({
      ...sinkPayload,
      email: sinkPayload.email || "",
    }),
    sendWebhook(
      Object.fromEntries(
        Object.entries(sinkPayload).map(([key, value]) => [key, String(value)]),
      ),
    ),
  ]);

  const sinksConfigured = airtableResult !== null || webhookResult !== null;

  if (!sinksConfigured) {
    console.warn("No lead sink configured. Lead stored in function logs only.", sinkPayload);
    return NextResponse.json({ success: true, sink: "logs_only" }, { status: 200 });
  }

  const succeeded = [airtableResult, webhookResult].some((result) => result === true);

  if (!succeeded) {
    return NextResponse.json({ error: "Failed to save lead. Please call us directly." }, { status: 502 });
  }

  return NextResponse.json({ success: true }, { status: 200 });
}
