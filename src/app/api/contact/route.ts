import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 });
    }

    const { error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "tashinmahmud.official@gmail.com",
      replyTo: email,
      subject: `[Portfolio] New message from ${name}`,
      html: `
        <div style="font-family: monospace; background: #0a0a0a; color: #e5e5e5; padding: 32px; border-radius: 12px; border: 1px solid #222;">
          <p style="color: #3b82f6; font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase; margin: 0 0 24px;">&gt; INCOMING TRANSMISSION</p>
          <p style="margin: 0 0 8px;"><strong style="color:#3b82f6;">From:</strong> ${name}</p>
          <p style="margin: 0 0 8px;"><strong style="color:#3b82f6;">Email:</strong> ${email}</p>
          <hr style="border: none; border-top: 1px solid #222; margin: 24px 0;" />
          <p style="color: #3b82f6; font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase; margin: 0 0 12px;">&gt; MESSAGE</p>
          <p style="line-height: 1.7; color: #ccc; white-space: pre-wrap;">${message}</p>
        </div>
      `,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json({ error: "Failed to send message." }, { status: 500 });
  }
}
