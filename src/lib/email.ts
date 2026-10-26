export async function sendAdminNotification(params: {
  name: string;
  email: string;
  phone?: string | null;
  interest?: string | null;
  message?: string | null;
  source?: string | null;
}): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  const adminEmail = process.env.ADMIN_EMAIL;
  if (!apiKey || !adminEmail) return;

  try {
    const { Resend } = await import("resend");
    const resend = new Resend(apiKey);
    const from = process.env.RESEND_FROM ?? "Futurotek <noreply@futurotekhealth.com>";

    const lines = [
      `New consultation request received.`,
      ``,
      `Name: ${params.name}`,
      `Email: ${params.email}`,
      params.phone ? `Phone: ${params.phone}` : null,
      params.interest ? `Interest: ${params.interest}` : null,
      params.message ? `Message: ${params.message}` : null,
      params.source ? `Source: ${params.source}` : null,
      ``,
      `Review at: https://futurotekhealth.com/admin`,
    ].filter(Boolean).join("\n");

    await resend.emails.send({
      from,
      to: adminEmail,
      subject: `New consultation request — ${params.name}`,
      text: lines,
    });
  } catch {
    // Non-critical — silently skip
  }
}
