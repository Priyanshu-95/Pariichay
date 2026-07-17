/**
 * Google Apps Script - Leads Backend for Pariichay Website
 * Receives POST requests, saves data to Google Sheets, and sends notification email.
 * Includes concurrency protection (LockService) and formula injection sanitation.
 */

function doPost(e) {
  // CORS configuration
  var headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Max-Age": "86400"
  };

  try {
    var postData;
    if (e.postData && e.postData.contents) {
      postData = JSON.parse(e.postData.contents);
    } else {
      return ContentService.createTextOutput(JSON.stringify({
        status: "error",
        message: "No data received"
      }))
      .setMimeType(ContentService.MimeType.JSON)
      .setHeaders(headers);
    }

    // Validate required fields (aligned with front-end validations)
    if (!postData.fullName || !postData.phoneNumber || !postData.counsellingType || !postData.preferredDate || !postData.preferredTime) {
      return ContentService.createTextOutput(JSON.stringify({
        status: "error",
        message: "Missing required fields (fullName, phoneNumber, counsellingType, preferredDate, preferredTime)"
      }))
      .setMimeType(ContentService.MimeType.JSON)
      .setHeaders(headers);
    }

    // Get spreadsheet and sheet
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    // Check and set headers if sheet is empty
    var headersRow = [
      "Inquiry ID",
      "Submission Date",
      "Submission Time",
      "Full Name",
      "Phone Number",
      "Email Address",
      "Age",
      "Date of Birth",
      "Birth Time",
      "Birth Place",
      "Counselling Type",
      "Preferred Date",
      "Preferred Time",
      "Message",
      "Source",
      "Status",
      "Follow-up Date",
      "Remarks"
    ];

    // Concurrency Lock: Acquire Script Lock for up to 30 seconds
    var lock = LockService.getScriptLock();
    if (!lock.tryLock(30000)) {
      return ContentService.createTextOutput(JSON.stringify({
        status: "error",
        message: "Could not acquire script lock. Concurrent requests are high. Please try again."
      }))
      .setMimeType(ContentService.MimeType.JSON)
      .setHeaders(headers);
    }

    var inquiryId = "";
    try {
      if (sheet.getLastRow() === 0) {
        sheet.appendRow(headersRow);
        sheet.getRange(1, 1, 1, headersRow.length).setFontWeight("bold").setBackground("#F3F7F5");
      }

      // Generate unique inquiry ID
      var lastRow = sheet.getLastRow();
      inquiryId = "PARI-" + (1000 + lastRow);
      
      // Get current date and time
      var now = new Date();
      var currentDate = now.toLocaleDateString();
      var currentTime = now.toLocaleTimeString();

      // Formula Injection Sanitation Helper
      var clean = function(val) {
        if (val === null || val === undefined) return "";
        var str = String(val).trim();
        // If string starts with =, +, -, or @, prepend a single quote '
        if (/^[=\+\-@]/.test(str)) {
          return "'" + str;
        }
        return str;
      };

      // Prepare row data
      var rowData = [
        inquiryId,
        currentDate,
        currentTime,
        clean(postData.fullName),
        clean(postData.phoneNumber),
        clean(postData.emailAddress),
        clean(postData.age),
        clean(postData.dateOfBirth),
        clean(postData.birthTime),
        clean(postData.birthPlace),
        clean(postData.counsellingType),
        clean(postData.preferredDate),
        clean(postData.preferredTime),
        clean(postData.message),
        "Website",
        "New",
        "", // Follow-up Date (Blank initially)
        ""  // Remarks (Blank initially)
      ];

      // Append row to sheet safely
      sheet.appendRow(rowData);

    } finally {
      // Always release lock
      lock.releaseLock();
    }

    // Send confirmation email to spreadsheet owner
    try {
      var recipient = Session.getActiveUser().getEmail() || "admin@pariichay.com";
      var subject = "New Consultation Booking - " + postData.fullName + " [" + inquiryId + "]";
      
      var htmlBody = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px; background-color: #FDFBF8;">
          <h2 style="color: #123E25; border-bottom: 2px solid #123E25; padding-bottom: 10px;">Pariichay Website - New Inquiry</h2>
          <p style="font-size: 16px; color: #2C2C2C;">A new consultation booking has been made on the website.</p>
          <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
            <tr style="background-color: #F8F6F2;">
              <td style="padding: 10px; font-weight: bold; border: 1px solid #e0e0e0; width: 40%;">Inquiry ID</td>
              <td style="padding: 10px; border: 1px solid #e0e0e0;">${inquiryId}</td>
            </tr>
            <tr>
              <td style="padding: 10px; font-weight: bold; border: 1px solid #e0e0e0;">Full Name</td>
              <td style="padding: 10px; border: 1px solid #e0e0e0;">${postData.fullName}</td>
            </tr>
            <tr style="background-color: #F8F6F2;">
              <td style="padding: 10px; font-weight: bold; border: 1px solid #e0e0e0;">Phone Number</td>
              <td style="padding: 10px; border: 1px solid #e0e0e0;">${postData.phoneNumber}</td>
            </tr>
            <tr>
              <td style="padding: 10px; font-weight: bold; border: 1px solid #e0e0e0;">Email Address</td>
              <td style="padding: 10px; border: 1px solid #e0e0e0;">${postData.emailAddress || 'N/A'}</td>
            </tr>
            <tr style="background-color: #F8F6F2;">
              <td style="padding: 10px; font-weight: bold; border: 1px solid #e0e0e0;">Age</td>
              <td style="padding: 10px; border: 1px solid #e0e0e0;">${postData.age || 'N/A'}</td>
            </tr>
            <tr>
              <td style="padding: 10px; font-weight: bold; border: 1px solid #e0e0e0;">Birth Details</td>
              <td style="padding: 10px; border: 1px solid #e0e0e0;">
                DOB: ${postData.dateOfBirth || 'N/A'}<br/>
                Time: ${postData.birthTime || 'N/A'}<br/>
                Place: ${postData.birthPlace || 'N/A'}
              </td>
            </tr>
            <tr style="background-color: #F8F6F2;">
              <td style="padding: 10px; font-weight: bold; border: 1px solid #e0e0e0;">Service Required</td>
              <td style="padding: 10px; border: 1px solid #e0e0e0; font-weight: bold; color: #123E25;">${postData.counsellingType}</td>
            </tr>
            <tr>
              <td style="padding: 10px; font-weight: bold; border: 1px solid #e0e0e0;">Preferred Date & Time</td>
              <td style="padding: 10px; border: 1px solid #e0e0e0;">${postData.preferredDate} at ${postData.preferredTime}</td>
            </tr>
            <tr style="background-color: #F8F6F2;">
              <td style="padding: 10px; font-weight: bold; border: 1px solid #e0e0e0;">Message</td>
              <td style="padding: 10px; border: 1px solid #e0e0e0;">${postData.message || 'No message provided'}</td>
            </tr>
          </table>
          <p style="margin-top: 20px; font-size: 12px; color: #6B7280; text-align: center;">This lead is automatically saved in your Google Sheet.</p>
        </div>
      `;

      MailApp.sendEmail({
        to: recipient,
        subject: subject,
        htmlBody: htmlBody
      });
    } catch (emailError) {
      Logger.log("Email failed: " + emailError.toString());
    }

    return ContentService.createTextOutput(JSON.stringify({
      status: "success",
      message: "Lead submitted successfully",
      inquiryId: inquiryId
    }))
    .setMimeType(ContentService.MimeType.JSON)
    .setHeaders(headers);

  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      status: "error",
      message: error.toString()
    }))
    .setMimeType(ContentService.MimeType.JSON)
    .setHeaders(headers);
  }
}

function doOptions(e) {
  var headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Max-Age": "86400"
  };
  return ContentService.createTextOutput("")
    .setMimeType(ContentService.MimeType.TEXT)
    .setHeaders(headers);
}
