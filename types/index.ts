// Product Types
export interface Product {
  id: string;
  name: string;
  brand: Brand;
  type: CementType;
  usage: ProductUsage[];
  strength: string;
  description: string;
  features: string[];
  specifications: {
    packingSizes: string[];
    storageGuidelines: string[];
  };
  image: string;
}

export enum Brand {
  FALCON = "Falcon Cement",
  LUCKY = "Lucky Cement",
  THATTA = "Thatta Cement",
  DG = "DG Cement", 
//   WHITE = "White Cement"
}

export enum CementType {
  OPC = "Ordinary Portland Cement (OPC)",
  SRC = "Sulfate Resistant Cement (SRC)",
  BLOCK = "Block Cement",
  WHITE = "White Cement",
  COMPOSITE = "Composite Cement"
}

export enum ProductUsage {
  RESIDENTIAL = "Residential Construction",
  COMMERCIAL = "Commercial Projects",
  INFRASTRUCTURE = "Infrastructure",
  MARINE = "Marine & SRC Usage",
  PRECAST = "Block & Precast Plants"
}

// Form Types
export interface QuoteFormData {
  name: string;
  companyName: string;
  phone: string;
  email: string;
  cementBrand: string;
  cementType: string;
  quantity: string;
  deliveryLocation: string;
  message: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}

// Testimonial Type
export interface Testimonial {
  id: string;
  clientName: string;
  projectType: string;
  feedback: string;
  location?: string;
}

// Brand Info Type
export interface BrandInfo {
  name: Brand;
  logo: string;
  tagline: string;
  description: string;
  products: string[];
  features: string[];
}
