import { Resend } from "resend";

const apiKey = process.env.RESEND_API_KEY;
const resend = new Resend(apiKey);

export async function POST(request) {
  console.log(request);

  // console.log("Starting sending mail via resend");

  // const result = await resend.emails.send({
  //   from: "Lars <contact@resend.dev>",
  //   to: "lars.gunnar@jobloop.no",
  //   subject: "Contact wanted message",
  //   html: `
  //     <h1>Message from somebody</h1>
  //     <p>They said nice things about me</p>
  //   `,
  // });

  // console.log(result.error.message);

  return new Response("Hello World!");
}
