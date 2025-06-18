import { EmailTemplateTwo } from "@/components/email/templateTwo";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  //   const body = await req.json();
  const { name, email, phone, message } = await req.json();

  try {
    const { data, error } = await resend.emails.send({
      from: "deluxecatering<onboarding@resend.dev>",
      to: ["johncheval1@gmail.com"],
      subject: "New Event Request from Website",
      react: EmailTemplateTwo({
        name,
        email,
        phone,
        message,
      }),
    });

    if (error) {
      console.log(error);
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
