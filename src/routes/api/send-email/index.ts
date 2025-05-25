import type { RequestHandler } from "@builder.io/qwik-city";
import { Resend } from "resend";

export const onPost: RequestHandler = async ({ request, json, env }) => {
  const data = await request.formData();
  const email = data.get("email");
  const message = data.get("message");

  const apiKey = env.get("RESEND_API_KEY");
  if (!apiKey) {
    json(500, { success: false, message: "Missing API key" });
    return;
  }

  const resend = new Resend(apiKey);

  try {
    const emailResponse = await resend.emails.send({
      from: "Tomas Sorgetti <contacto@tomassorgetti.com.ar>",
      to: "tomassorgetti456@gmail.com",
      replyTo: String(email),
      subject: "Mensaje de contacto - Portfolio",
      html: `
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Mensaje:</strong></p>
          <p>${message}</p>
          <hr />
          <p>Este mensaje fue enviado desde tu portfolio.</p>
        `,
    });

    json(200, {
      success: true,
      message: "Email sent",
      data: emailResponse,
    });
  } catch (error: any) {
    json(500, {
      success: false,
      message: "Error sending email",
      error: error.message,
    });
  }
};
