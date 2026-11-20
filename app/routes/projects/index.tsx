import ProjectsCard from "~/components/ProjectsCard";
import type { Projects } from "~/type";
import type { Route } from "./+types/index";

export async function loader({
  request,
}: Route.LoaderArgs): Promise<{ projects: Projects[] }> {
  const apiUrl = import.meta.env.VITE_API_URL;
  const res = await fetch(`${apiUrl}/projects`);
  if (!res.ok) throw new Response("Failed to fetch data");
  const data = await res.json();
  return {
    projects: data,
  };
}

const ProjectPage = ({ loaderData }: Route.ComponentProps) => {
  const { projects } = loaderData;

  const sortProjects = [...projects].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
  return (
    <main className="min-h-screen bg-warm-950 text-warm-100 selection:bg-accent-500 selection:text-warm-50">
      <div className="mx-auto max-w-8xl px-6 pt-4 pb-24 md:pt-24">
        <header className="mb-12 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-warm-50 md:text-5xl">
            <span className="font-semibold text-warm-100 leading-normal ">
              Explore My Projects
            </span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-warm-400 md:text-base">
            A curated showcase of end-to-end product ecosystems, mobile
            applications, and high-converting digital storefronts.
          </p>
        </header>

        <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sortProjects.map((project) => (
            <ProjectsCard key={project.id} project={project} />
          ))}
        </section>

        {/* Empty State Fallback */}
        {projects.length === 0 && (
          <div className="rounded-2xl border border-warm-800 bg-warm-900/30 py-16 text-center">
            <p className="text-warm-400">No projects found.</p>
          </div>
        )}
      </div>
    </main>
  );
};

export default ProjectPage;
