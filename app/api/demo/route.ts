import { NextResponse } from "next/server";
import { Resend } from "resend";

export const dynamic = "force-dynamic";

const RECIPIENTS = ["sss74@axplain.ai", "yjchoi@axplain.ai"];

export async function POST(request: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const data = await request.json();

    const html = `
<!DOCTYPE html>
<html lang="ko">
<head><meta charset="UTF-8" /><meta name="viewport" content="width=device-width" /></head>
<body style="margin:0;padding:0;background:#f4f6f9;font-family:'Apple SD Gothic Neo',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f6f9;padding:32px 16px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 2px 12px rgba(0,0,0,0.08);">
        <!-- Header -->
        <tr>
          <td style="background:linear-gradient(135deg,#003A8C,#004AAD,#1E6FE0);padding:28px 32px;">
            <p style="margin:0;color:#ffffff;font-size:22px;font-weight:700;">AXPlain 데모 신청</p>
            <p style="margin:4px 0 0;color:rgba(255,255,255,0.75);font-size:13px;">새로운 데모 신청이 접수되었습니다</p>
          </td>
        </tr>
        <!-- Body -->
        <tr>
          <td style="padding:32px;">
            <table width="100%" cellpadding="0" cellspacing="0">
              ${row("이름", data.name)}
              ${row("회사/기관명", data.company)}
              ${data.title ? row("직책/부서", data.title) : ""}
              ${row("이메일", `<a href="mailto:${data.email}" style="color:#004AAD;">${data.email}</a>`)}
              ${data.phone ? row("연락처", data.phone) : ""}
              ${data.customerType ? row("고객 유형", data.customerType) : ""}
              ${data.interest ? row("관심 기능", data.interest) : ""}
              ${data.message ? row("문의 내용", data.message.replace(/\n/g, "<br/>")) : ""}
            </table>
          </td>
        </tr>
        <!-- Footer -->
        <tr>
          <td style="background:#f8f9fc;padding:20px 32px;border-top:1px solid #eef0f4;">
            <p style="margin:0;color:#8a929e;font-size:12px;">
              이 메일은 axplain.ai 데모 신청 폼에서 자동 발송되었습니다.
            </p>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;

    await resend.emails.send({
      from: "AXPlain 데모 신청 <noreply@axplain.ai>",
      to: RECIPIENTS,
      replyTo: data.email,
      subject: `[데모 신청] ${data.company} · ${data.name}`,
      html,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Demo email error:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}

function row(label: string, value: string) {
  return `
    <tr>
      <td style="padding:8px 0;border-bottom:1px solid #f0f2f5;width:120px;vertical-align:top;">
        <span style="color:#7c879b;font-size:13px;">${label}</span>
      </td>
      <td style="padding:8px 0 8px 16px;border-bottom:1px solid #f0f2f5;vertical-align:top;">
        <span style="color:#1a2033;font-size:14px;font-weight:500;">${value || "-"}</span>
      </td>
    </tr>`;
}
