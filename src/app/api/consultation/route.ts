import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // 1. Safe parsing & normalization (trim strings)
    const fullName = typeof body.fullName === "string" ? body.fullName.trim() : "";
    const phoneNumber = typeof body.phoneNumber === "string" ? body.phoneNumber.trim() : "";
    const emailAddress = typeof body.emailAddress === "string" ? body.emailAddress.trim() : "";
    const age = typeof body.age === "string" ? body.age.trim() : "";
    const dateOfBirth = typeof body.dateOfBirth === "string" ? body.dateOfBirth.trim() : "";
    const birthTime = typeof body.birthTime === "string" ? body.birthTime.trim() : "";
    const birthPlace = typeof body.birthPlace === "string" ? body.birthPlace.trim() : "";
    const counsellingType = typeof body.counsellingType === "string" ? body.counsellingType.trim() : "";
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

    // Reasonable phone validation (at least 10 digits after removing symbols)
    const cleanPhone = phoneNumber.replace(/[\s-]/g, "");
    if (cleanPhone.length < 10) {
      return NextResponse.json({ success: false, message: "Please enter a valid phone number (at least 10 digits)." }, { status: 400 });
    }

    // Email validation when provided
    if (emailAddress) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(emailAddress)) {
        return NextResponse.json({ success: false, message: "Please enter a valid email address." }, { status: 400 });
      }
    }

    // 3. Env Var Check
    const googleScriptUrl = process.env.GOOGLE_SCRIPT_URL;
    if (!googleScriptUrl) {
      console.error("GOOGLE_SCRIPT_URL environment variable is missing on the server.");
      return NextResponse.json({ success: false, message: "Server configuration error. Please contact administrator." }, { status: 500 });
    }

    // 4. Construct EXACT payload
    const payload = {
      fullName,
      phoneNumber,
      emailAddress,
      age,
      dateOfBirth,
      birthTime,
      birthPlace,
      counsellingType,
      preferredDate,
      preferredTime,
      message
    };

    // 5. Send POST to Apps Script Web App
    const response = await fetch(googleScriptUrl, {
      method: "POST",
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      console.error(`Upstream Google Apps Script failed with status: ${response.status}`);
      return NextResponse.json({ success: false, message: "We couldn't submit your consultation request right now. Please try again." }, { status: 502 });
    }

    const text = await response.text();
    let result;
    try {
      result = JSON.parse(text);
    } catch (parseError) {
      console.error("Failed to parse JSON response from Google Apps Script:", text);
      return NextResponse.json({ success: false, message: "We couldn't submit your consultation request right now. Please try again." }, { status: 502 });
    }

    if (result.status === "success" || result.success === true) {
      return NextResponse.json({ success: true, message: "Lead submitted successfully" });
    } else {
      console.error("Google Apps Script returned an error status:", result);
      return NextResponse.json({ success: false, message: result.message || "We couldn't submit your consultation request right now. Please try again." }, { status: 502 });
    }

  } catch (error: any) {
    console.error("Server API handler error:", error);
    return NextResponse.json({ success: false, message: "We couldn't submit your consultation request right now. Please try again." }, { status: 500 });
  }
}
