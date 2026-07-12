const nodemailer = require("nodemailer");


const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
});

module.exports = async function handler(req, res) {
  // Only allow POST
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { name, email, service, message } = req.body || {};

    // Basic validation
    if (!name || !email || !message) {
      return res.status(400).json({ error: "Please fill all required fields." });
    }

    // Email that lands in wilfred@mrdayter.com inbox
    const mailOptions = {
      from:     `"Mr. Dayter Portfolio" <${process.env.GMAIL_USER}>`,
      to:       "wilfred@mrdayter.com",
      replyTo:  email,                          // reply goes straight to the sender
      subject:  `New Inquiry from ${name}`,
      html: `
        <div style="font-family:sans-serif;max-width:560px;margin:0 auto;padding:24px;border:1px solid #e5e7eb;border-radius:8px">
          <h2 style="color:#0A0E1A;margin-bottom:24px">New Contact Form Submission</h2>

          <table style="width:100%;border-collapse:collapse;font-size:14px">
            <tr style="border-bottom:1px solid #f3f4f6">
              <td style="padding:10px 0;color:#6B7280;width:120px">Name</td>
              <td style="padding:10px 0;color:#111827;font-weight:500">${name}</td>
            </tr>
            <tr style="border-bottom:1px solid #f3f4f6">
              <td style="padding:10px 0;color:#6B7280">Email</td>
              <td style="padding:10px 0;color:#111827;font-weight:500">
                <a href="mailto:${email}" style="color:#00D4AA">${email}</a>
              </td>
            </tr>
            <tr style="border-bottom:1px solid #f3f4f6">
              <td style="padding:10px 0;color:#6B7280">Service</td>
              <td style="padding:10px 0;color:#111827;font-weight:500">${service || "Not specified"}</td>
            </tr>
            <tr>
              <td style="padding:10px 0;color:#6B7280;vertical-align:top">Message</td>
              <td style="padding:10px 0;color:#111827;line-height:1.6">${message.replace(/\n/g, "<br/>")}</td>
            </tr>
          </table>

          <div style="margin-top:24px;padding:16px;background:#f9fafb;border-radius:6px;font-size:13px;color:#6B7280">
            Hit reply to respond directly to ${name} at ${email}
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return res.status(200).json({ success: true });

  } catch (error) {
    console.error("Nodemailer error:", error);
    return res.status(500).json({
      error: "Failed to send email.",
      details: error?.message || "Unknown error",
    });
  }
};