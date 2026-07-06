import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { PDFDocument, rgb, StandardFonts } from "pdf-lib";

const NAVY = rgb(0.102, 0.165, 0.424);
const GREY = rgb(0.333, 0.333, 0.333);
const LIGHT = rgb(0.6, 0.6, 0.6);

async function buildPdf(fields: Record<string, string>): Promise<Buffer> {
  const doc = await PDFDocument.create();
  const page = doc.addPage([595, 842]);
  const { width, height } = page.getSize();
  const bold = await doc.embedFont(StandardFonts.HelveticaBold);
  const regular = await doc.embedFont(StandardFonts.Helvetica);

  // Header bar
  page.drawRectangle({ x: 0, y: height - 80, width, height: 80, color: NAVY });
  page.drawText("Tutors India — Ask an Expert Submission", {
    x: 40, y: height - 50, font: bold, size: 16, color: rgb(1, 1, 1),
  });
  const ts = new Date().toLocaleString("en-GB", { timeZone: "Asia/Kolkata" }) + " IST";
  page.drawText(ts, { x: 40, y: height - 68, font: regular, size: 9, color: rgb(0.75, 0.82, 0.9) });

  let y = height - 110;

  const rows: [string, string][] = [
    ["Name",    fields.name],
    ["Email",   fields.email],
    ["Subject", fields.subject],
  ];

  for (const [label, value] of rows) {
    page.drawText(label + ":", { x: 40, y, font: bold, size: 11, color: NAVY });
    page.drawText(value || "—", { x: 180, y, font: regular, size: 11, color: GREY });
    y -= 24;
  }

  y -= 10;
  page.drawLine({ start: { x: 40, y }, end: { x: 555, y }, thickness: 0.5, color: rgb(0.87, 0.89, 0.94) });
  y -= 20;

  page.drawText("Question:", { x: 40, y, font: bold, size: 11, color: NAVY });
  y -= 18;

  const words = (fields.question || "—").split(" ");
  let line = "";
  for (const word of words) {
    const test = line ? line + " " + word : word;
    if (regular.widthOfTextAtSize(test, 11) > 515) {
      page.drawText(line, { x: 40, y, font: regular, size: 11, color: GREY });
      y -= 16;
      line = word;
      if (y < 80) break;
    } else {
      line = test;
    }
  }
  if (line) page.drawText(line, { x: 40, y, font: regular, size: 11, color: GREY });

  page.drawLine({ start: { x: 40, y: 50 }, end: { x: 555, y: 50 }, thickness: 0.5, color: rgb(0.87, 0.89, 0.94) });
  page.drawText("Tutors India  |  www.tutorsindia.com  |  support@guires.com", {
    x: 40, y: 32, font: regular, size: 9, color: LIGHT,
  });

  const bytes = await doc.save();
  return Buffer.from(bytes);
}

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const { name, email, subject, question } = data;

    const pdfBuffer = await buildPdf({ name, email, subject, question });

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === "true",
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    });

    const ts = new Date().toLocaleString("en-GB", { timeZone: "Asia/Kolkata" });

    await transporter.sendMail({
      from: `"${process.env.SMTP_FROM_NAME || "Tutorsindia"}" <${process.env.SMTP_USER}>`,
      to: process.env.LEAD_RECIPIENT,
      subject: `Ask an Expert: ${name} — ${subject}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;">
          <div style="background:#1a2a6c;padding:24px 30px;border-radius:6px 6px 0 0;">
            <h2 style="color:#fff;margin:0;font-size:18px;">Tutors India — Ask an Expert</h2>
            <p style="color:#a0b8e0;margin:6px 0 0;font-size:12px;">${ts} IST</p>
          </div>
          <div style="background:#f5f7fb;padding:24px 30px;border:1px solid #dde2ef;border-top:none;border-radius:0 0 6px 6px;">
            <table style="width:100%;border-collapse:collapse;font-size:14px;">
              ${[["Name", name], ["Email", email], ["Subject", subject]].map(([l, v]) => `
                <tr>
                  <td style="padding:8px 12px;font-weight:700;color:#1a2a6c;width:140px;border-bottom:1px solid #e8eaf0;">${l}</td>
                  <td style="padding:8px 12px;color:#222;border-bottom:1px solid #e8eaf0;">${v || "—"}</td>
                </tr>`).join("")}
            </table>
            <div style="margin-top:16px;padding:14px 16px;background:#fff;border:1px solid #dde2ef;border-radius:4px;">
              <p style="font-weight:700;color:#1a2a6c;margin:0 0 8px;font-size:13px;">Question</p>
              <p style="color:#333;margin:0;line-height:1.7;">${(question || "—").replace(/\n/g, "<br>")}</p>
            </div>
          </div>
          <p style="text-align:center;font-size:11px;color:#aaa;margin-top:10px;">Full details attached as PDF.</p>
        </div>`,
      attachments: [{
        filename: `question-${(name || "unknown").replace(/\s+/g, "-")}-${Date.now()}.pdf`,
        content: pdfBuffer,
        contentType: "application/pdf",
      }],
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Ask question error:", err);
    return NextResponse.json({ ok: false, error: "Failed to send" }, { status: 500 });
  }
}
