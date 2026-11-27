import Approach from "~/components/Approach";
import FeaturedProjects from "~/components/FeaturedProjects";
import HeroSection from "~/components/HeroSection";
import Services from "~/components/Services";
import type { Projects, StrapiProjects, StrapiResponse } from "~/type";
import type { Route } from "./+types/index";

export async function loader({
  request,
}: Route.LoaderArgs): Promise<{ projects: Projects[] }> {
  const apiUrl = import.meta.env.VITE_API_URL;
  const imageUrl = import.meta.env.VITE_IMAGE_URL;

  const res = await fetch(
    `${apiUrl}/projects?filters[featured][$eq]=true&sort=date:desc&populate=*`,
  );
  if (!res.ok)
    throw new Response("Failed to fetch data", {
      status: res.status,
    });
  const json: StrapiResponse<StrapiProjects> = await res.json();
  const projects = json.data.map((item) => ({
    // ...item,
    id: item.id,
    documentId: item.documentId,
    title: item.title,
    description: item.description,
    url: item.url,
    date: item.date,
    category: item.category,
    featured: item.featured,
    role: item.role,
    problem: item.problem,
    solution: item.solution,
    overview: item.overview,
    image: item.image?.url
      ? `${imageUrl}${item.image.formats?.medium?.url ?? item.image.url}`
      : "/no-image.png",
  }));

  return {
    projects,
  };
}

export default function Home({ loaderData }: Route.ComponentProps) {
  const { projects } = loaderData;
  return (
    <div className="min-h-screen text-charcoal-100">
      <HeroSection />
      <FeaturedProjects projects={projects} />
      <Services />
      <Approach />
    </div>
  );
}
