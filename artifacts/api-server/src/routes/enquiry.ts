import { Router, type IRouter } from "express";
import nodemailer from "nodemailer";

const router: IRouter = Router();

router.post("/enquiry", async (req, res) => {
  const { firstName, lastName, company, phone, email, enquiryType, message } = req.body;

  if (!firstName || !phone || !message) {
    res.status(400).json({ error: "firstName, phone, and message are required." });
    return;
  }

  const smtpHost = process.env["SMTP_HOST"] || "smtp.gmail.com";
  const smtpPort = parseInt(process.env["SMTP_PORT"] || "587");
  const smtpUser = process.env["SMTP_USER"] || "";
  const smtpPass = process.env["SMTP_PASS"] || "";
  const toEmail = "sales@alphabond.in";

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpPort === 465,
    auth: smtpUser && smtpPass ? { user: smtpUser, pass: smtpPass } : undefined,
  });

  const subject = `[Alphabond Enquiry] ${enquiryType || "General"} — ${firstName} ${lastName || ""}${company ? ` (${company})` : ""}`;

  const html = `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="font-family:Arial,sans-serif;background:#f8fafc;padding:24px;margin:0">
  <div style="max-width:600px;margin:0 auto;background:#fff;border-radius:12px;overflow:hidden;border:1px solid #e2e8f0">
    <div style="background:#010ED0;padding:24px 32px">
      <h1 style="color:#fff;margin:0;font-size:20px;font-weight:700">New Enquiry — Alphabond</h1>
      <p style="color:#93c5fd;margin:4px 0 0;font-size:13px">Received from alphabond.in</p>
    </div>
    <div style="padding:28px 32px">
      <table style="width:100%;border-collapse:collapse">
        <tr><td style="padding:8px 0;font-size:13px;color:#64748b;width:140px;font-weight:600;vertical-align:top">Enquiry Type</td><td style="padding:8px 0;font-size:14px;color:#0f172a;font-weight:700">${enquiryType || "General"}</td></tr>
        <tr style="border-top:1px solid #f1f5f9"><td style="padding:8px 0;font-size:13px;color:#64748b;font-weight:600;vertical-align:top">Name</td><td style="padding:8px 0;font-size:14px;color:#0f172a">${firstName} ${lastName || ""}</td></tr>
        ${company ? `<tr style="border-top:1px solid #f1f5f9"><td style="padding:8px 0;font-size:13px;color:#64748b;font-weight:600;vertical-align:top">Company</td><td style="padding:8px 0;font-size:14px;color:#0f172a">${company}</td></tr>` : ""}
        <tr style="border-top:1px solid #f1f5f9"><td style="padding:8px 0;font-size:13px;color:#64748b;font-weight:600;vertical-align:top">Phone</td><td style="padding:8px 0;font-size:14px;color:#0f172a"><a href="tel:${phone}" style="color:#010ED0">${phone}</a></td></tr>
        ${email ? `<tr style="border-top:1px solid #f1f5f9"><td style="padding:8px 0;font-size:13px;color:#64748b;font-weight:600;vertical-align:top">Email</td><td style="padding:8px 0;font-size:14px;color:#0f172a"><a href="mailto:${email}" style="color:#010ED0">${email}</a></td></tr>` : ""}
        <tr style="border-top:1px solid #f1f5f9"><td style="padding:8px 0;font-size:13px;color:#64748b;font-weight:600;vertical-align:top">Message</td><td style="padding:8px 0;font-size:14px;color:#0f172a;line-height:1.6">${message.replace(/\n/g, "<br>")}</td></tr>
      </table>
    </div>
    <div style="background:#f8fafc;padding:16px 32px;border-top:1px solid #e2e8f0">
      <p style="margin:0;font-size:11px;color:#94a3b8">This enquiry was submitted via the contact form at alphabond.in · Kishan Enterprise</p>
    </div>
  </div>
</body>
</html>`;

  try {
    await transporter.sendMail({
      from: `"Alphabond Website" <${smtpUser || "noreply@alphabond.in"}>`,
      to: toEmail,
      replyTo: email || undefined,
      subject,
      html,
    });
    req.log.info({ enquiryType, phone }, "Enquiry email sent");
    res.json({ success: true, message: "Enquiry received. We will respond within hours." });
  } catch (err) {
    req.log.error({ err }, "Failed to send enquiry email");
    res.status(500).json({ error: "Failed to send enquiry. Please call us directly." });
  }
});

export default router;
