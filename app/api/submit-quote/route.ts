import { NextRequest, NextResponse } from 'next/server';
import { google } from 'googleapis';

export async function POST(request: NextRequest) {
  try {
    const quoteData = await request.json();
    
    // Google Sheets configuration
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });
    
    // Prepare data for Google Sheets
    const timestamp = new Date().toISOString();
    const rowData = [
      timestamp,
      quoteData.customerInfo.name,
      quoteData.customerInfo.email,
      quoteData.customerInfo.phone,
      `${quoteData.shippingDetails.from} → ${quoteData.shippingDetails.to}`,
      quoteData.shippingDetails.weight,
      quoteData.shippingDetails.packageType,
      quoteData.shippingDetails.customPackageType || '',
      quoteData.shippingDetails.needsDelivery ? quoteData.shippingDetails.deliveryAddress || quoteData.shippingDetails.deliveryLocation : quoteData.shippingDetails.deliveryLocation,
      quoteData.shippingDetails.needsDelivery ? 'Yes' : 'No',
      `£${quoteData.quote.shippingCost.toFixed(2)}`,
      `£${quoteData.quote.handlingFee.toFixed(2)}`,
      quoteData.quote.deliveryFeeCurrency === 'GBP' ? `£${quoteData.quote.deliveryFee.toFixed(2)}` :
        quoteData.quote.deliveryFeeCurrency === 'ARRANGE' ? 'Customer arranges' : '£0.00',
      `£${quoteData.quote.totalGBP.toFixed(2)}`,
      'Quote Requested'
    ];

    // Append to Google Sheets
    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEETS_ID,
      range: 'Quotes!A:O', // Adjust range as needed
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [rowData],
      },
    });

    return NextResponse.json({ 
      success: true, 
      message: 'Quote saved successfully',
      quoteData 
    });
    
  } catch (error) {
    console.error('Error saving quote:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to save quote' },
      { status: 500 }
    );
  }
} 