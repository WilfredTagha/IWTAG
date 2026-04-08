const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY);

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

    const data = await resend.emails.send({
      from: "Portfolio Contact <wilfred@mrdayter.com>",
      to: ["taghawilfred@gmail.com"], 
      subject: `New Portfolio Inquiry from ${name}`,
      reply_to: email,
      html: `
        <h2>New Client Inquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Service:</strong> ${service || "Not specified"}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return res.status(200).json({ success: true, data });
  } catch (error) {
    console.error("RESEND FULL ERROR:", error);

    return res.status(500).json({
      error: "Failed to send email",
      details: error?.message || "Unknown error",
    });
  }
};