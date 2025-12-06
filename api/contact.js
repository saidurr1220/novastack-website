const Resend = require("resend").Resend;

const resend = new Resend(process.env.RESEND_API_KEY);

module.exports = async (req, res) => {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, message } = req.body || {};

  if (!name || !email || !message) {
    return res
      .status(400)
      .json({ error: "Name, email and message are required." });
  }

  try {
    const toAddress = "saidurr1256@gmail.com"; 

    // 1) Owner ke email
    const { error: ownerError } = await resend.emails.send({
      from: "NovaStack Contact <onboarding@resend.dev>",
      to: [toAddress],
      subject: `New contact from ${name}`,
      reply_to: email,
      text: `From: ${name} <${email}>\n\n${message}`,
    });

    if (ownerError) {
      console.error("Resend owner email error:", ownerError);
      return res
        .status(500)
        .json({ error: "Failed to send email. Please try again later." });
    }

    // 2) confirmation email to sender
    const { error: userError } = await resend.emails.send({
      from: "NovaStack Contact <onboarding@resend.dev>",
      to: [email],
      subject: "Thanks for reaching out to NovaStack",
      text:
        `Hi ${name},\n\n` +
        "Thanks for reaching out to NovaStack Technologies. We’ve received your message and will get back to you shortly.\n\n" +
        "If this was a test message, you can confirm the form is working by seeing this email and the email received in the NovaStack inbox.\n\n" +
        "Best,\nNovaStack Technologies",
    });

    if (userError) {
      console.error("Resend user email error:", userError);
    }

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("Server error:", err);
    return res
      .status(500)
      .json({ error: "Unexpected server error. Please try again later." });
  }
};
