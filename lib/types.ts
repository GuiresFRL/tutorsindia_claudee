// Core types designed to mirror WPGraphQL response shapes for easy Phase 2 migration

export interface Post {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  categories: string[];
  featuredImage?: string;
}

export interface Page {
  id: string;
  slug: string;
  title: string;
  content: string;
  seo?: SEO;
}

export interface Service {
  slug: string;
  title: string;
  description: string;
  href: string;
  items?: ServiceItem[];
}

export interface ServiceItem {
  title: string;
  description: string;
  href: string;
}

export interface ServiceCategory {
  slug: string;
  title: string;
  icon: string;
  services: ServiceItem[];
  note: string;
}

export interface SEO {
  title?: string;
  description?: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
  megaColumns?: MegaColumn[];
}

export interface MegaColumn {
  category: string;
  href: string;
  icon: string;
  items: { label: string; href: string }[];
}

export interface SampleWork {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  href: string;
}

export interface Testimonial {
  text: string;
  author: string;
  role?: string;
}
