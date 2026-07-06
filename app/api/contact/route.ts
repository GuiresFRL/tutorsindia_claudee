import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import PDFDocument from "pdfkit";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const {
      name, email, phone, country, service, subject, wordCount, deadline, message,
    } = data;

    // ── 1. Generate PDF ──────────────────────────────────────────────────────
    const pdfBuffer = await new Promise<Buffer>((resolve, reject) => {
      const doc = new PDFDocument({ margin: 50, size: "A4" });
      const chunks: Buffer[] = [];
      doc.on("data", (c: Buffer) => chunks.push(c));
      doc.on("end", () => resolve(Buffer.concat(chunks)));
      doc.on("error", reject);

      // Header
      doc.fontSize(20).fillColor("#1a2a6c").text("Tutors India — New Lead", { align: "center" });
      doc.moveDown(0.5);
      doc.fontSize(11).fillColor("#555").text(`Submitted: ${new Date().toLocaleString("en-GB", { timeZone: "Asia/Kolkata" })} IST`, { align: "center" });
      doc.moveDown(1);

      // Divider
      doc.moveTo(50, doc.y).lineTo(545, doc.y).strokeColor("#1a2a6c").stroke();
      doc.moveDown(1);

      // Fields
      const row = (label: string, value: string) => {
        doc.fontSize(11).fillColor("#1a2a6c").text(label + ":", { continued: true, width: 150 });
        doc.fillColor("#222").text("  " + (value || "—"));
        doc.moveDown(0.4);
      };

      row("Full Name", name);
      row("Email", email);
      row("Phone", phone);
      row("Country", country);
      row("Service Required", service);
      row("Subject / Topic", subject);
      row("Word Count", wordCount);
      row("Deadline", deadline);
      doc.moveDown(0.6);

      doc.fontSize(11).fillColor("#1a2a6c").text("Message / Requirements:");
      doc.moveDown(0.3);
      doc.fontSize(11).fillColor("#222").text(message || "—", { width: 495 });
      doc.moveDown(1);

      // Footer
      doc.moveTo(50, doc.y).lineTo(545, doc.y).strokeColor("#dde2ef").stroke();
      doc.moveDown(0.5);
      doc.fontSize(9).fillColor("#888").text("Tutors India | www.tutorsindia.com | support@guires.com", { align: "center" });

      doc.end();
    });

    // ── 2. Send email via SMTP ───────────────────────────────────────────────
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const timestamp = new Date().toLocaleString("en-GB", { timeZone: "Asia/Kolkata" });

    await transporter.sendMail({
      from: `"${process.env.SMTP_FROM_NAME}" <${process.env.SMTP_USER}>`,
      to: process.env.LEAD_RECIPIENT,
      subject: `New Lead: ${name} — ${service || "General Enquiry"}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;">
          <div style="background:#1a2a6c;padding:24px 30px;border-radius:6px 6px 0 0;">
            <h2 style="color:#fff;margin:0;font-size:20px;">Tutors India — New Lead</h2>
            <p style="color:#a0b8e0;margin:4px 0 0;font-size:13px;">${timestamp} IST</p>
          </div>
          <div style="background:#f5f7fb;padding:24px 30px;border:1px solid #dde2ef;border-top:none;border-radius:0 0 6px 6px;">
            <table style="width:100%;border-collapse:collapse;font-size:14px;">
              ${[
                ["Full Name", name],
                ["Email", email],
                ["Phone", phone],
                ["Country", country],
                ["Service Required", service],
                ["Subject / Topic", subject],
                ["Word Count", wordCount],
                ["Deadline", deadline],
              ].map(([l, v]) => `
                <tr>
                  <td style="padding:8px 12px;font-weight:600;color:#1a2a6c;width:170px;vertical-align:top;">${l}</td>
                  <td style="padding:8px 12px;color:#222;vertical-align:top;">${v || "—"}</td>
                </tr>
              `).join("")}
            </table>
            <div style="margin-top:16px;padding:14px 16px;background:#fff;border:1px solid #dde2ef;border-radius:4px;">
              <p style="font-weight:600;color:#1a2a6c;margin:0 0 8px;">Message / Requirements</p>
              <p style="color:#333;margin:0;line-height:1.6;">${(message || "—").replace(/\n/g, "<br>")}</p>
            </div>
          </div>
          <p style="text-align:center;font-size:11px;color:#aaa;margin-top:12px;">Full lead data is attached as a PDF.</p>
        </div>
      `,
      attachments: [
        {
          filename: `lead-${name.replace(/\s+/g, "-")}-${Date.now()}.pdf`,
          content: pdfBuffer,
          contentType: "application/pdf",
        },
      ],
    });

    return NextResponse.json({ ok: true });
  } catch (err: unknown) {
    console.error("Contact form error:", err);
    return NextResponse.json({ ok: false, error: "Failed to send" }, { status: 500 });
  }
}
