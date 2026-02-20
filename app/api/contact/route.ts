import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { name, email, company, budget, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Ad, e-posta ve mesaj zorunludur." },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"RYZ Tech İletişim" <${process.env.SMTP_USER}>`,
      to: "info@ryztechdigital.com",
      replyTo: email,
      subject: `RYZ Tech Brief - ${name}${company ? ` (${company})` : ""}`,
      text: [
        `Ad Soyad: ${name}`,
        `E-posta: ${email}`,
        `Şirket: ${company || "-"}`,
        `Bütçe: ${budget || "-"}`,
        "",
        `Mesaj:`,
        message,
      ].join("\n"),
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; background: #f9f9f9; padding: 32px; border-radius: 8px;">
          <h2 style="color: #4f46e5; margin-bottom: 24px;">Yeni Brief Talebi</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; color: #666; width: 120px; font-weight: 600;">Ad Soyad:</td>
              <td style="padding: 8px 0; color: #111;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666; font-weight: 600;">E-posta:</td>
              <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #4f46e5;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666; font-weight: 600;">Şirket:</td>
              <td style="padding: 8px 0; color: #111;">${company || "-"}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666; font-weight: 600;">Bütçe:</td>
              <td style="padding: 8px 0; color: #111;">${budget || "-"}</td>
            </tr>
          </table>
          <hr style="margin: 24px 0; border: none; border-top: 1px solid #e5e7eb;" />
          <h3 style="color: #374151; margin-bottom: 12px;">Mesaj:</h3>
          <p style="color: #374151; white-space: pre-wrap; line-height: 1.6;">${message.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</p>
          <hr style="margin: 24px 0; border: none; border-top: 1px solid #e5e7eb;" />
          <p style="color: #9ca3af; font-size: 12px;">Bu e-posta ryztechdigital.com iletişim formu üzerinden gönderilmiştir.</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[contact] Mail gönderme hatası:", err);
    return NextResponse.json(
      { error: "Mail gönderilemedi. Lütfen tekrar deneyin." },
      { status: 500 }
    );
  }
}
