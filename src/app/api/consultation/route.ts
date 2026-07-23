import { NextResponse } from "next/server";

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

    // 2. Server-side validations
    if (!fullName) {
      return NextResponse.json({ success: false, message: "Full Name is required." }, { status: 400 });
    }
    if (!phoneNumber) {
      return NextResponse.json({ success: false, message: "Phone Number is required." }, { status: 400 });
    }
    if (!counsellingType) {
      return NextResponse.json({ success: false, message: "Counselling Type is required." }, { status: 400 });
    }
    if (!preferredDate) {
      return NextResponse.json({ success: false, message: "Preferred Date is required." }, { status: 400 });
    }
    if (!preferredTime) {
      return NextResponse.json({ success: false, message: "Preferred Time is required." }, { status: 400 });
    }

    // Phone validation (at least 10 digits after removing non-digit symbols)
    const cleanPhone = phoneNumber.replace(/\D/g, "");
    if (cleanPhone.length < 10) {
      return NextResponse.json({ success: false, message: "Please enter a valid 10-digit phone number." }, { status: 400 });
    }

    // Email validation when provided
    if (emailAddress) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(emailAddress)) {
        return NextResponse.json({ success: false, message: "Please enter a valid email address." }, { status: 400 });
      }
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
      submittedAt: new Date().toISOString()
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

    if (!response.ok) {
      console.error(`Upstream Google Apps Script HTTP failure: ${response.status} ${response.statusText}`);
      return NextResponse.json({ 
        success: false, 
        message: "We're unable to process your booking right now. Please try again in a few minutes or contact us directly at +91 93138 12657." 
      }, { status: 502 });
    }

    const text = await response.text();
    let result;
    try {
      result = JSON.parse(text);
    } catch (parseError) {
      console.error("Failed to parse JSON response from Google Apps Script:", text);
      return NextResponse.json({ 
        success: false, 
        message: "We're unable to process your booking right now. Please try again in a few minutes or contact us directly at +91 93138 12657." 
      }, { status: 502 });
    }

    if (result.status === "success" || result.success === true) {
      return NextResponse.json({ success: true, message: "Consultation request submitted successfully" });
    } else {
      console.error("Google Apps Script returned an error response:", result);
      return NextResponse.json({ 
        success: false, 
        message: result.message || "We're unable to process your booking right now. Please try again in a few minutes or contact us directly at +91 93138 12657." 
      }, { status: 502 });
    }

  } catch (error: any) {
    console.error("Server API handler exception:", error);
    return NextResponse.json({ 
      success: false, 
      message: "We're unable to process your booking right now. Please try again in a few minutes or contact us directly at +91 93138 12657." 
    }, { status: 500 });
  }
}
