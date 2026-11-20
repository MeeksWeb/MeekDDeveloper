import Approach from "~/components/Approach";
import FeaturedProjects from "~/components/FeaturedProjects";
import HeroSection from "~/components/HeroSection";
import Services from "~/components/Services";
import type { Projects } from "~/type";
import type { Route } from "./+types/index";

export async function loader({
  request,
}: Route.LoaderArgs): Promise<{ projects: Projects[] }> {
  // Previous: separate JSON Server, configured through .env.
  // const apiUrl = import.meta.env.VITE_API_URL;
  // Current: API hosted alongside this website.
  const apiUrl = new URL("/api", request.url).href;
  const res = await fetch(`${apiUrl}/projects`);
  if (!res.ok)
    throw new Response("Failed to fetch data", {
      status: res.status,
    });
  const data = await res.json();

  return {
    projects: data,
  };
}

export default function Home({ loaderData }: Route.ComponentProps) {
  const { projects } = loaderData;
  return (
    <div className="min-h-screen text-gray-100">
      <HeroSection />
      <FeaturedProjects projects={projects} />
      <Services />
      <Approach />
    </div>
  );
}
