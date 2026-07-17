# Google Sheets Lead Integration Setup

To connect the booking form on your website to a Google Sheet, follow these steps to deploy the Google Apps Script backend:

## Step 1: Create a Google Sheet
1. Open [Google Sheets](https://sheets.google.com) and create a new blank spreadsheet.
2. Rename the spreadsheet to **Pariichay Leads**.
3. Note: You don't need to add columns manually; the script will automatically create the required columns on the first form submission.

## Step 2: Open the Apps Script Editor
1. In the Google Sheets menu bar, click on **Extensions** > **Apps Script**.
2. Delete any boilerplate code inside the editor window (usually `myFunction()`).

## Step 3: Copy and Paste the Script
1. Open the [Code.gs](Code.gs) file from this repository.
2. Copy its entire content.
3. Paste it into the Google Apps Script editor window.
4. Click the **Save** icon (floppy disk) or press `Ctrl + S` to save the project.

## Step 4: Deploy as a Web App
1. Click the **Deploy** button in the top right corner and select **New deployment**.
2. Click the gear icon next to "Select type" and select **Web app**.
3. Fill in the deployment details:
   - **Description**: `Pariichay Lead Capture Form API`
   - **Execute as**: `Me (your-email@gmail.com)`
   - **Who has access**: `Anyone` (This is critical so the website can submit forms to it).
4. Click **Deploy**.
5. Google will prompt you to authorize permissions. Click **Authorize access**, select your Google account, click **Advanced** (at the bottom), and then click **Go to Untitled project (unsafe)**. Click **Allow** to grant permissions.

## Step 5: Copy Web App URL
1. Once deployed, a window will pop up showing the **Web App URL**.
2. Copy this URL (it will look like `https://script.google.com/macros/s/.../exec`).

## Step 6: Configure Environment Variable
1. In the root of your Next.js project, create a file named `.env.local`.
2. Add the copied URL as an environment variable:
   ```env
   NEXT_PUBLIC_APPS_SCRIPT_URL=YOUR_COPIED_WEB_APP_URL
   ```
3. Restart your Next.js local development server (`npm run dev`) for the environment variable to take effect.
