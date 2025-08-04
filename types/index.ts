// Types for FreightBunny Application

export interface ShipNowFormData {
  // Shipping Direction
  direction: "uk-nigeria" | "nigeria-uk";

  // Sender Information
  senderName: string;
  senderEmail: string;
  senderPhone: string;
  senderAddress: string;
  senderCity: string;
  senderPostcode: string;
  senderState: string;
  senderCountry: string;

  // Recipient Information
  recipientName: string;
  recipientEmail: string;
  recipientPhone: string;
  recipientAddress: string;
  recipientCity: string;
  recipientState: string;
  recipientPostcode: string;
  recipientCountry: string;

  // Package Information
  packageType: string;
  weight: string;
  length: string;
  width: string;
  height: string;
  value: string;
  description: string;
  shippingService: "standard" | "express" | "";

  // Additional Options
  insurance: boolean;
  signature: boolean;
  tracking: boolean;
}

export interface QuoteCalculatorFormData {
  weight: string;
  packageType: string;
  customPackageType: string;
  from: "UK" | "Nigeria";
  to: "UK" | "Nigeria";
  deliveryLocation: string;
  deliveryAddress: string;
  needsDelivery: boolean;
  senderName: string;
  senderEmail: string;
  senderPhone: string;
}

export interface CalculatedQuote {
  weight: number;
  shippingCost: number;
  handlingFee: number;
  deliveryFee: number;
  deliveryFeeCurrency: string;
  totalGBP: number;
  from: string;
  to: string;
  packageType: string;
  deliveryLocation: string;
  needsDelivery: boolean;
}

export interface NigerianZoneRates {
  "0-10kg": number;
  "11-30kg": number;
  "31-50kg": number;
  "above50kg": number;
}

export interface NigerianZone {
  states: string[];
  rates: NigerianZoneRates;
}

export interface NigerianZones {
  [key: string]: NigerianZone;
}

export interface NavLink {
  href: string;
  label: string;
}

export type ShipNowFormField = keyof ShipNowFormData;

export interface QuoteApiData {
  customerInfo: {
    name: string;
    email: string;
    phone: string;
  };
  shippingDetails: {
    weight: string;
    packageType: string;
    customPackageType: string;
    from: string;
    to: string;
    deliveryLocation: string;
    deliveryAddress: string;
    needsDelivery: boolean;
  };
  quote: CalculatedQuote;
}

export interface ApiResponse {
  success: boolean;
  message?: string;
  data?: any;
}