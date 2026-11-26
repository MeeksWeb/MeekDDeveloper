export type Projects = {
  id: string;
  title: string;
  description: string;
  image: string;
  url: string;
  date: string;
  category: string;
  featured: boolean;
  role: string;
  problem: string;
  solution: string;
  overview: string;
};

export interface BlogPostMeta {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
}

export type AboutProps = {
  id: string;
  period?: string;
  role?: string;
  name?: string;
  company?: string;
  summary?: string;
};

export type StrapiResponse<T> = {
  data: T[];
};

export type StrapiProjects = {
  id: string;
  documentId: string;
  title: string;
  description: string;
  url: string;
  date: string;
  category: string;
  featured: boolean;
  role: string;
  problem: string;
  solution: string;
  overview: string;
  image?: {
    url: string;
    formats?: {
      large?: { url: string };
      small?: { url: string };
      medium?: { url: string };
      thumbnail?: { url: string };
    };
  };
};
