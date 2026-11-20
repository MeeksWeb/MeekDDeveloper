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
