import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const DEFAULT_GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyvC_oP2WeAVXwj1Nw9RkkwfF14Z2h1IW8koDRVX3FW-O68ZIyyrpYS41y5_k00bgkhUQ/exec";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // 1. Safe parsing & normalization (trim strings)
    const fullName = typeof body.fullName === "string" ? body.fullName.trim() : "";
    const phoneNumber = typeof body.phoneNumber === "string" ? body.phoneNumber.trim() : "";
    const whatsappNumber = typeof body.whatsappNumber === "string" ? body.whatsappNumber.trim() : "";
    const emailAddress = typeof body.emailAddress === "string" ? body.emailAddress.trim() : "";
    const age = typeof body.age === "string" ? body.age.trim() : "";
    const gender = typeof body.gender === "string" ? body.gender.trim() : "";
    const city = typeof body.city === "string" ? body.city.trim() : "";
    const dateOfBirth = typeof body.dateOfBirth === "string" ? body.dateOfBirth.trim() : "";
    const birthTime = typeof body.birthTime === "string" ? body.birthTime.trim() : "";
    const birthPlace = typeof body.birthPlace === "string" ? body.birthPlace.trim() : "";
    const counsellingType = typeof body.counsellingType === "string" ? body.counsellingType.trim() : "";
    const mode = typeof body.mode === "string" ? body.mode.trim() : "Online";
    const preferredDate = typeof body.preferredDate === "string" ? body.preferredDate.trim() : "";
    const preferredTime = typeof body.preferredTime === "string" ? body.preferredTime.trim() : "";
    const message = typeof body.message === "string" ? body.message.trim() : "";

    // 2. Server-side validations for mandatory fields (Only message is optional)
    if (!fullName) return NextResponse.json({ success: false, message: "Full Name is required." }, { status: 400 });
    if (!phoneNumber) return NextResponse.json({ success: false, message: "Phone Number is required." }, { status: 400 });
    if (!whatsappNumber) return NextResponse.json({ success: false, message: "WhatsApp Number is required." }, { status: 400 });
    if (!emailAddress) return NextResponse.json({ success: false, message: "Email Address is required." }, { status: 400 });
    if (!age) return NextResponse.json({ success: false, message: "Age is required." }, { status: 400 });
    if (!gender) return NextResponse.json({ success: false, message: "Gender is required." }, { status: 400 });
    if (!city) return NextResponse.json({ success: false, message: "City is required." }, { status: 400 });
    if (!counsellingType) return NextResponse.json({ success: false, message: "Counselling Type is required." }, { status: 400 });
    if (!preferredDate) return NextResponse.json({ success: false, message: "Preferred Date is required." }, { status: 400 });
    if (!preferredTime) return NextResponse.json({ success: false, message: "Preferred Time is required." }, { status: 400 });
    if (!dateOfBirth) return NextResponse.json({ success: false, message: "Date of Birth is required." }, { status: 400 });
    if (!birthTime) return NextResponse.json({ success: false, message: "Birth Time is required." }, { status: 400 });
    if (!birthPlace) return NextResponse.json({ success: false, message: "Birth Place is required." }, { status: 400 });

    // Phone validation (at least 10 digits after removing non-digit symbols)
    const cleanPhone = phoneNumber.replace(/\D/g, "");
    if (cleanPhone.length < 10) {
      return NextResponse.json({ success: false, message: "Please enter a valid 10-digit phone number." }, { status: 400 });
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailAddress)) {
      return NextResponse.json({ success: false, message: "Please enter a valid email address." }, { status: 400 });
    }

    // 3. Env Var Check with default production fallback
    const googleScriptUrl = process.env.GOOGLE_SCRIPT_URL || DEFAULT_GOOGLE_SCRIPT_URL;

    // 4. Construct payload
    const payload = {
      fullName,
      phoneNumber,
      whatsappNumber,
      emailAddress,
      age,
      gender,
      city,
      dateOfBirth,
      birthTime,
      birthPlace,
      counsellingType,
      mode,
      preferredDate,
      preferredTime,
      message,
      submittedAt: new Date().toISOString(),
      senderEmail: "info@pariichay.com"
    };

    // 5. Send POST to Google Apps Script Web App
    const response = await fetch(googleScriptUrl, {
      method: "POST",
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    // 6. Attempt direct SMTP email confirmation dispatch if SMTP configured in environment
    if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
      try {
        const transporter = nodemailer.createTransport({
          host: process.env.SMTP_HOST,
          port: Number(process.env.SMTP_PORT) || 587,
          secure: Number(process.env.SMTP_PORT) === 465,
          auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
          },
        });

        const htmlBody = `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 16px; overflow: hidden; background-color: #ffffff;">
            <div style="background-color: #123E25; padding: 28px 24px; text-align: center; color: #ffffff;">
              <h1 style="margin: 0; font-size: 24px; font-weight: bold;">Pariichay 360° Counselling</h1>
              <p style="margin: 6px 0 0 0; font-size: 14px; color: #D89A3C; font-weight: 600;">Clarity Today, Success Tomorrow</p>
            </div>
            <div style="padding: 28px 24px; color: #333333; line-height: 1.6;">
              <h2 style="color: #123E25; font-size: 20px; margin-top: 0;">Registration Successful! 🎉</h2>
              <p>Dear <strong>${fullName}</strong>,</p>
              <p>Thank you for booking your consultation with <strong>Pariichay</strong>. Your registration has been successfully logged.</p>
              
              <div style="background-color: #F9F8F5; border-left: 4px solid #D89A3C; padding: 18px; margin: 24px 0; border-radius: 8px;">
                <h3 style="margin: 0 0 12px 0; color: #123E25; font-size: 16px;">Session Details</h3>
                <p style="margin: 4px 0; font-size: 14px;"><strong>Counselling Service:</strong> ${counsellingType}</p>
                <p style="margin: 4px 0; font-size: 14px;"><strong>Session Mode:</strong> ${mode}</p>
                <p style="margin: 4px 0; font-size: 14px;"><strong>Preferred Date:</strong> ${preferredDate}</p>
                <p style="margin: 4px 0; font-size: 14px;"><strong>Preferred Time Slot:</strong> ${preferredTime}</p>
                <p style="margin: 4px 0; font-size: 14px;"><strong>Contact Phone:</strong> ${phoneNumber}</p>
              </div>

              <p style="font-size: 14px; color: #555555;">Our senior advisor coordinator will connect with you shortly to confirm your consultation schedule.</p>
              <hr style="border: none; border-top: 1px solid #eeeeee; margin: 24px 0;" />
              <p style="margin: 0; color: #123E25; font-weight: bold;">Warm regards,</p>
              <p style="margin: 2px 0 0 0; font-weight: bold; color: #333333;">Pariichay Care Team</p>
              <p style="margin: 4px 0 0 0; font-size: 12px; color: #888888;">Official Email: <a href="mailto:info@pariichay.com" style="color: #123E25;">info@pariichay.com</a> | Helpline: +91 93138 12657</p>
            </div>
          </div>
        `;

        await transporter.sendMail({
          from: `"Pariichay 360° Counselling" <info@pariichay.com>`,
          to: emailAddress,
          subject: `Registration Successful - ${counsellingType} | Pariichay`,
          html: htmlBody,
        });
      } catch (mailErr) {
        console.error("Direct SMTP mail send log:", mailErr);
      }
    }

    if (!response.ok) {
      console.error(`Upstream Google Apps Script HTTP failure: ${response.status} ${response.statusText}`);
      return NextResponse.json({ 
        success: false, 
        message: "We're unable to process your booking right now. Please try again in a few minutes or contact us directly at +91 93138 12657." 
      }, { status: 502 });
    }

    return NextResponse.json({ success: true, message: "Consultation request submitted successfully and confirmation sent." });

  } catch (error: any) {
    console.error("Server API handler exception:", error);
    return NextResponse.json({ 
      success: false, 
      message: "We're unable to process your booking right now. Please try again in a few minutes or contact us directly at +91 93138 12657." 
    }, { status: 500 });
  }
}
