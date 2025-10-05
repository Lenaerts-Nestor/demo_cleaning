export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface QuoteFormData {
  name: string;
  email: string;
  phone: string;
  serviceType: string;
  address: string;
  message: string;
}

export interface GalleryImage {
  id: number;
  url: string;
  alt: string;
}

export type PageSection = "home" | "about" | "services" | "quote" | "gallery";
