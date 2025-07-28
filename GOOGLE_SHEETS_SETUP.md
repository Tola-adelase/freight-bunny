# Google Sheets Integration Setup

This guide will help you set up Google Sheets integration to automatically store quote submissions.

## Step 1: Create a Google Service Account

1. Go to the [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the Google Sheets API:
   - Go to APIs & Services > Library
   - Search for "Google Sheets API"
   - Click enable

4. Create a Service Account:
   - Go to APIs & Services > Credentials
   - Click "Create Credentials" > "Service Account"
   - Fill in the name and description
   - Click "Create and Continue"

5. Download the JSON key:
   - Click on your service account
   - Go to the "Keys" tab
   - Click "Add Key" > "Create new key"
   - Choose JSON format and download

## Step 2: Create Your Google Sheet

1. Create a new Google Sheet
2. Add headers in the first row:
   ```
   A1: Timestamp
   B1: Customer Name
   C1: Email
   D1: Phone
   E1: Route
   F1: Weight (kg)
   G1: Package Type
   H1: Custom Type
   I1: Destination
   J1: Delivery Required
   K1: Shipping Cost
   L1: Handling Fee
   M1: Delivery Fee
   N1: Total Cost (GBP)
   O1: Status
   ```

3. Share the sheet with your service account email:
   - Click "Share" 
   - Add the service account email (found in your JSON key file)
   - Give it "Editor" permissions

4. Copy the Google Sheet ID from the URL:
   `https://docs.google.com/spreadsheets/d/{SHEET_ID}/edit`

## Step 3: Set Environment Variables

Create a `.env.local` file in your project root with:

```env
GOOGLE_SHEETS_CLIENT_EMAIL=your-service-account-email@project.iam.gserviceaccount.com
GOOGLE_SHEETS_PRIVATE_KEY=-----BEGIN PRIVATE KEY-----\nYour private key from JSON file\n-----END PRIVATE KEY-----
GOOGLE_SHEETS_ID=your-google-sheets-spreadsheet-id
```

**Important Notes:**
- The private key should include the `\n` characters for line breaks
- Make sure to include `-----BEGIN PRIVATE KEY-----` and `-----END PRIVATE KEY-----`
- Never commit your actual `.env.local` file to version control

## Step 4: Test the Integration

1. Start your development server: `npm run dev`
2. Go to your website and fill out a quote
3. Click "Submit My Quote"
4. Check your Google Sheet - a new row should appear with the quote data

## Troubleshooting

- **Permission Error**: Make sure the service account has edit access to the sheet
- **Key Format Error**: Ensure the private key format is correct with proper line breaks
- **Sheet Not Found**: Verify the Google Sheets ID is correct
- **API Not Enabled**: Make sure Google Sheets API is enabled in Google Cloud Console

## Data Structure

Each quote submission will create a new row with:
- Timestamp of submission
- Complete customer information
- Detailed shipping requirements
- Cost breakdown
- Submission status

This allows you to track all quote requests and follow up with customers efficiently. 