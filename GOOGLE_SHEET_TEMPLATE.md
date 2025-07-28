# FreightBunny Quote Tracker - Google Sheet Template

## Quick Setup Instructions

### 1. Create Your Google Sheet
1. Go to [Google Sheets](https://sheets.google.com)
2. Click "Blank" to create a new spreadsheet
3. Name it "FreightBunny Quote Tracker"

### 2. Set Up Headers
Copy and paste these headers into Row 1 (A1 to O1):

```
Timestamp	Customer Name	Email	Phone	Route	Weight (kg)	Package Type	Custom Type	Destination	Delivery Required	Shipping Cost	Handling Fee	Delivery Fee	Total Cost (GBP)	Status
```

### 3. Format Your Sheet
1. **Bold the headers**: Select row 1, then Format → Bold
2. **Freeze the header row**: Select row 2, then View → Freeze → 1 row
3. **Auto-resize columns**: Select all columns (Ctrl+A), then right-click → Resize columns A-Z → Fit to data

### 4. Add Data Validation (Optional)
For the "Status" column (Column O):
1. Select column O (click the column header)
2. Data → Data validation
3. Criteria: List of items
4. Add these options:
   - Quote Requested
   - Quote Sent
   - Booking Confirmed
   - Shipped
   - Delivered
   - Cancelled

### 5. Share with Your Service Account
1. Click the "Share" button (top right)
2. Add this email: `your-service-account-email@project.iam.gserviceaccount.com`
3. Set permission to "Editor"
4. Uncheck "Notify people" 
5. Click "Share"

### 6. Get Your Sheet ID
From your Google Sheet URL:
`https://docs.google.com/spreadsheets/d/1AbC123XyZ456.../edit`

Copy the ID: `1AbC123XyZ456...`

## Sample Data Structure

Here's what your data will look like:

| Timestamp | Customer Name | Email | Phone | Route | Weight (kg) | Package Type | Custom Type | Destination | Delivery Required | Shipping Cost | Handling Fee | Delivery Fee | Total Cost (GBP) | Status |
|-----------|---------------|-------|-------|--------|-------------|--------------|-------------|-------------|------------------|---------------|--------------|--------------|------------------|--------|
| 2024-01-15T10:30:00Z | John Smith | john@email.com | +44 7XXX XXX | UK → Nigeria | 5 | Electronics | | Lagos | Yes | £45.00 | £30.00 | ₦10,000 | £75.00 | Quote Requested |
| 2024-01-15T11:45:00Z | Jane Doe | jane@email.com | +44 7YYY YYY | UK → Nigeria | 3 | Other | Fridge | Abuja | No | £27.00 | £30.00 | £0.00 | £57.00 | Quote Requested |

## Environment Variables Needed

Create a `.env.local` file in your project root:

```env
GOOGLE_SHEETS_CLIENT_EMAIL=your-service-account-email@project.iam.gserviceaccount.com
GOOGLE_SHEETS_PRIVATE_KEY=-----BEGIN PRIVATE KEY-----\nYour private key here\n-----END PRIVATE KEY-----
GOOGLE_SHEETS_ID=your-google-sheet-id-here
```

## Test Your Setup

1. Fill out a quote on your website
2. Click "Submit My Quote"
3. Check your Google Sheet - a new row should appear!

## Useful Google Sheets Features

### 1. Filter Views
- Create filtered views to see quotes by status, date, or destination
- Data → Create a filter

### 2. Conditional Formatting
- Highlight overdue quotes or high-value shipments
- Format → Conditional formatting

### 3. Charts and Analytics
- Insert → Chart to create visual reports
- Track quote volume, popular destinations, average weights

### 4. Automated Responses
- Use Google Apps Script to send automatic emails
- Extensions → Apps Script

## Next Steps

1. **Set up Google Service Account** (see main setup guide)
2. **Configure environment variables**
3. **Test the integration**
4. **Customize your sheet** with additional columns if needed

## Support

If you encounter issues:
1. Check that the service account email has edit access
2. Verify the Google Sheets ID is correct
3. Ensure environment variables are properly formatted
4. Check the browser console for error messages

Your quote system will now automatically populate this Google Sheet every time a customer submits a quote! 