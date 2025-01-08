import { Resend } from "resend"

const apiKey = process.env.RESEND_API_KEY
const resend = new Resend(apiKey)

export function GET() {

  resend.emails.send({
    from: "Lars <contact@resend.dev>",
    to: "lars.gunnar@jobloop.no",
    subject: "Contact wanted message",
    html: `
      <h1>Message from somebody</h1>
      <p>They said nice things about me</p>
    `,
  })

  return new Response("Hello World!")
}