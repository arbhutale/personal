import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required form fields.' },
        { status: 400 }
      );
    }

    const host = process.env.SMTP_HOST;
    const port = parseInt(process.env.SMTP_PORT || '587', 10);
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const receiver = process.env.CONTACT_RECEIVER_EMAIL || 'anil-kumar.bhutale@outlook.com';

    // If SMTP credentials are configured in environment variables
    if (host && user && pass) {
      const transporter = nodemailer.createTransport({
        host,
        port,
        secure: port === 465,
        auth: {
          user,
          pass,
        },
      });

      const mailOptions = {
        from: `"${name} via Portfolio" <${user}>`,
        replyTo: email,
        to: receiver,
        subject: `[Portfolio Inquiry] ${subject}`,
        text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
        html: `
          <div style="font-family: Arial, sans-serif; padding: 24px; color: #1e293b; max-width: 600px; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #ffffff;">
            <h2 style="color: #0284c7; margin-top: 0; border-bottom: 2px solid #0284c7; padding-bottom: 10px; font-size: 20px;">
              ⚡ New Portfolio Inquiry Transmitted
            </h2>
            <p style="margin: 8px 0; font-size: 14px;"><strong>From:</strong> ${name}</p>
            <p style="margin: 8px 0; font-size: 14px;"><strong>Reply Email:</strong> <a href="mailto:${email}" style="color: #0284c7; text-decoration: none;">${email}</a></p>
            <p style="margin: 8px 0; font-size: 14px;"><strong>Subject:</strong> ${subject}</p>
            <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 16px 0;" />
            <p style="margin: 8px 0; font-size: 14px; font-weight: bold; color: #475569;">Message Details:</p>
            <div style="background-color: #f8fafc; padding: 14px 18px; border-left: 4px solid #0284c7; border-radius: 6px; font-size: 14px; line-height: 1.6; color: #334155; white-space: pre-wrap;">${message}</div>
            <p style="font-size: 11px; color: #94a3b8; margin-top: 24px; text-align: center;">Transmitted automatically from your Next.js Portfolio Contact Hub (ar.bhutale.in)</p>
          </div>
        `,
      };

      await transporter.sendMail(mailOptions);
      return NextResponse.json({ success: true, message: 'Inquiry dispatched via SMTP successfully.' });
    } else {
      console.log(`[SMTP Notice] Inquiry from ${name} (${email}): "${subject}". (SMTP env variables not populated; set SMTP_HOST, SMTP_USER, SMTP_PASS in deployment environment).`);
      return NextResponse.json({
        success: true,
        notice: 'Inquiry received. Note: Populate SMTP_HOST, SMTP_USER, SMTP_PASS env variables for direct email routing.',
      });
    }
  } catch (error: any) {
    console.error('SMTP API Transmission Error:', error);
    return NextResponse.json(
      { error: error?.message || 'Failed to dispatch message via SMTP server.' },
      { status: 500 }
    );
  }
}
