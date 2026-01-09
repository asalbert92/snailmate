# Snail Mate Setup Guide

## Step 1: Set Up Google Sheets

### Create the Spreadsheet
1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it "Snail Mate Applications"
4. Create 3 tabs at the bottom:
   - `Round1`
   - `Round2`
   - `Round3`

### Add the Apps Script
1. In your Google Sheet, click **Extensions** > **Apps Script**
2. Delete any code in the editor
3. Paste this code:

```javascript
function doPost(e) {
  const data = JSON.parse(e.postData.contents);
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(data.sheet || 'Round1');

  // Add timestamp
  data.values.timestamp = new Date().toISOString();

  // Get headers or create them
  let headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
  if (headers[0] === '') {
    headers = Object.keys(data.values);
    sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  }

  // Create row in correct order
  const row = headers.map(header => data.values[header] || '');
  sheet.appendRow(row);

  return ContentService.createTextOutput(JSON.stringify({success: true}))
    .setMimeType(ContentService.MimeType.JSON);
}
```

4. Click **Deploy** > **New deployment**
5. Click the gear icon and select **Web app**
6. Set:
   - Description: "Snail Mate Form Handler"
   - Execute as: **Me**
   - Who has access: **Anyone**
7. Click **Deploy**
8. Click **Authorize access** and sign in with your Google account
9. **Copy the Web app URL** - it looks like: `https://script.google.com/macros/s/ABC123.../exec`

### Connect to the Website
1. In the `snailmate` folder, create a file called `.env.local`
2. Add this line (replace with YOUR URL):
```
NEXT_PUBLIC_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
```

---

## Step 2: Deploy to Vercel

### Push to GitHub
1. Go to [GitHub](https://github.com) and sign in
2. Click the **+** in the top right > **New repository**
3. Name it `snailmate`
4. Keep it **Private** (or Public if you prefer)
5. Click **Create repository**
6. Open Terminal and run these commands:

```bash
cd "/Users/aaronalbert/Development/Snail Mate/snailmate"
git init
git add .
git commit -m "Initial commit - Snail Mate website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/snailmate.git
git push -u origin main
```

### Deploy on Vercel
1. Go to [Vercel](https://vercel.com) and sign in with GitHub
2. Click **Add New** > **Project**
3. Find and select your `snailmate` repository
4. Click **Import**
5. In **Environment Variables**, add:
   - Name: `NEXT_PUBLIC_GOOGLE_SCRIPT_URL`
   - Value: Your Google Apps Script URL
6. Click **Deploy**
7. Wait ~1 minute for it to build
8. Your site is live at `snailmate-xxx.vercel.app`

### Custom Domain (Optional)
1. In Vercel, go to your project **Settings** > **Domains**
2. Add your domain (e.g., `snailmate.escargot.app`)
3. Follow the DNS instructions they provide

---

## Testing

### Test the Forms
1. Visit your deployed site
2. Fill out the application form
3. Check your Google Sheet - a new row should appear!

### Test Each Round
- `/` - Main landing page with Round 1 form
- `/round2` - Hidden Round 2 questionnaire
- `/round3` - Hidden final round with video upload

---

## Running Locally

```bash
cd snailmate
npm run dev
```

Then open http://localhost:3000

---

## Need Help?

- Form submissions not working? Check your Google Apps Script URL
- Deployment failing? Make sure all files are committed to GitHub
- Styling issues? Try `npm run build` to catch any errors
