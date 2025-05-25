import type { RequestHandler } from "@builder.io/qwik-city";
import { Resend } from "resend";

export const onPost: RequestHandler = async ({ request, json, env }) => {
  const data = await request.formData();
  const email = data.get("email");
  const message = data.get("message");

  console.log("POST recibido:", email, message);

  const apiKey = env.get("RESEND_API_KEY");
  if (!apiKey) {
    json(500, { success: false, message: "Missing API key" });
    return;
  }

  const resend = new Resend(apiKey);

  try {
    const emailResponse = await resend.emails.send({
      from: "Portfolio <noreply@tomassorgetti.com.ar>",
      to: "tomassorgetti456@gmail.com",
      subject: "Mensaje de contacto - Portfolio",
      text: `Email: ${email}\nMensaje: ${message}`,
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
