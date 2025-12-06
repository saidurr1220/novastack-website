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

    const { data, error } = await resend.emails.send({
      from: "NovaStack Contact <onboarding@resend.dev>",
      to: [toAddress],
      subject: `New contact from ${name}`,
      reply_to: email,
      text: `From: ${name} <${email}>\n\n${message}`,
    });

    if (error) {
      console.error("Resend error:", error);
      return res
        .status(500)
        .json({ error: "Failed to send email. Please try again later." });
    }

    return res.status(200).json({ success: true, id: data.id });
  } catch (err) {
    console.error("Server error:", err);
    return res
      .status(500)
      .json({ error: "Unexpected server error. Please try again later." });
  }
};
