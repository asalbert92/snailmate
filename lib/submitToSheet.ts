// Google Sheets submission utility
//
// SETUP INSTRUCTIONS:
// 1. Create a Google Sheet with these tabs: "Round1", "Round2", "Round3"
// 2. Go to Extensions > Apps Script
// 3. Paste the Apps Script code (see below)
// 4. Deploy as Web App (Anyone can access)
// 5. Copy the deployment URL and paste it below
//
// APPS SCRIPT CODE TO PASTE:
// ----------------------------------------
// function doPost(e) {
//   const data = JSON.parse(e.postData.contents);
//   const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(data.sheet || 'Round1');
//
//   // Add timestamp
//   data.values.timestamp = new Date().toISOString();
//
//   // Get headers or create them
//   let headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
//   if (headers[0] === '') {
//     headers = Object.keys(data.values);
//     sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
//   }
//
//   // Create row in correct order
//   const row = headers.map(header => data.values[header] || '');
//   sheet.appendRow(row);
//
//   return ContentService.createTextOutput(JSON.stringify({success: true}))
//     .setMimeType(ContentService.MimeType.JSON);
// }
// ----------------------------------------

// REPLACE THIS WITH YOUR GOOGLE APPS SCRIPT WEB APP URL
const GOOGLE_SCRIPT_URL = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL || ''

export async function submitToSheet(
  sheetName: 'Round1' | 'Round2' | 'Round3',
  values: Record<string, string>
): Promise<{ success: boolean; error?: string }> {

  // If no URL configured, just log and return success (for testing)
  if (!GOOGLE_SCRIPT_URL) {
    console.log(`[${sheetName}] Form submission:`, values)
    console.warn('Google Sheets not configured. Set NEXT_PUBLIC_GOOGLE_SCRIPT_URL in .env.local')
    return { success: true }
  }

  try {
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors', // Google Apps Script requires this
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        sheet: sheetName,
        values
      })
    })

    // With no-cors, we can't read the response, so assume success
    return { success: true }
  } catch (error) {
    console.error('Sheet submission error:', error)
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    }
  }
}
