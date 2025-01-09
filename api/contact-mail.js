import { Resend } from "resend";

const apiKey = process.env.RESEND_API_KEY;
const resend = new Resend(apiKey);

export async function POST(request) {
  const contactFormData = await request.json();

  const result = await resend.emails.send({
    from: "Lars <contact@resend.dev>",
    to: "lars.gunnar@jobloop.no",
    replyTo: contactFormData.email,
    subject: "Contact wanted message",
    html: `
      <h1>Message from somebody</h1>
      <h2>${contactFormData.email}</h2>
      <p>${contactFormData.message}</p>
    `,
  });

  if (result.error !== null) {
    console.log(result.error.name);
    console.log(result.error.message);
    return new Response("Something went wrong", {
      status: 500,
    });
  }

  return new Response("Message sent", {
    status: 200,
  });
}
