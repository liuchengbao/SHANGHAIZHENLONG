export type Product = {
  slug: string;
  name: string;
  category: string;
  shortDescription: string;
  description: string;
  features: string[];
  specifications: { label: string; value: string }[];
  applications: string[];
  faqs: { question: string; answer: string }[];
  image: string;
  price: string;
  moq: string;
};

export type Project = {
  slug: string;
  title: string;
  location: string;
  category: string;
  categorySlug: string;
  description: string;
  image: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  publishedAt: string;
  readTime: string;
  cover: string;
};

export type InquiryPayload = {
  name: string;
  company?: string;
  email: string;
  whatsapp?: string;
  country: string;
  productInterest: string;
  quantity?: string;
  message: string;
};
