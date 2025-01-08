import { Resend } from "resend"

const apiKey = process.env.RESEND_API_KEY
const resend = new Resend(apiKey)

export function GET() {

  resend.emails.send({
    from: "contact@mypage.no",
    to: "Larsien973spam@gmail.com",
    subject: "Contact wanted message",
    html: `
      <h1>Message from somebody</h1>
      <p>They said nice things about me</p>
    `,
  })

  return new Response("Hello World!")
}