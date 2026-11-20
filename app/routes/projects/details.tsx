import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router";
import type { Projects } from "~/type";
import type { Route } from "./+types/details";

export async function loader({
  request,
  params,
}: Route.LoaderArgs): Promise<Projects> {
  const { id } = params;
  // Previous: separate JSON Server, configured through .env.
  // const apiUrl = import.meta.env.VITE_API_URL;
  // Current: API hosted alongside this website.
  const apiUrl = new URL("/api", request.url).href;
  const res = await fetch(`${apiUrl}/projects/${id}`);
  if (!res.ok) {
    throw new Response("Failed to load project", {
      status: res.status,
    });
  }

  const data: Projects = await res.json();
  return data;
}

const details = ({ loaderData }: Route.ComponentProps) => {
  const project = loaderData;

  return (
    <main className="min-h-screen bg-warm-950 text-warm-100 selection:bg-accent-500 selection:text-warm-50">
      <div className="mx-auto max-w-5xl px-6 pt-2 pb-24 md:pt-16">
        {/* Back Navigation */}
        <div className="mb-8">
          <Link
            to="/project"
            className="inline-flex items-center gap-2 text-sm font-medium text-warm-400 transition-colors hover:text-accent-400"
          >
            <span aria-hidden="true">
              <FaArrowLeft />
            </span>
            <span>Back to Projects</span>
          </Link>
        </div>

        <header className="mb-10">
          <h1 className="text-3xl font-bold tracking-tight text-warm-50 md:text-5xl">
            <span className="uppercase tracking-wider">{project.title}</span>
            <span className="mx-3 font-light text-accent-500">|</span>
            <span className="font-semibold text-warm-400 ">Case Study</span>
          </h1>
        </header>

        <section className="grid grid-cols-1 items-start gap-10 lg:grid-cols-1">
          <div className="overflow-hidden rounded-2xl border border-warm-800/80 bg-warm-900/50 p-3 lg:col-span-1">
            <img
              src={project.image}
              alt={`${project.title} interface showcase`}
              className="aspect-4/3 w-full rounded-xl object-cover"
            />
          </div>

          <div className="space-y-6 lg:col-span-6">
            <div>
              <h2 className="text-base font-bold tracking-wide text-warm-50">
                Overview
              </h2>
              <p className="mt-1.5 text-sm leading-relaxed text-warm-400 md:text-base">
                {project.overview}
              </p>
            </div>

            <div>
              <h2 className="text-base font-bold tracking-wide text-warm-50">
                Role
              </h2>
              <p className="mt-1.5 text-sm text-warm-400 md:text-base">
                {project.role}
              </p>
              <time
                dateTime={project.date}
                className="mt-1 block font-mono text-xs text-warm-500"
              >
                {project.date}
              </time>
            </div>

            <div>
              <h2 className="text-base font-bold tracking-wide text-warm-50">
                Problem
              </h2>
              <p className="mt-1.5 text-sm leading-relaxed text-warm-400 md:text-base">
                {project.problem}
              </p>
            </div>

            <div>
              <h2 className="text-base font-bold tracking-wide text-warm-50">
                Solution
              </h2>
              <p className="mt-1.5 text-sm leading-relaxed text-warm-400 md:text-base">
                {project.solution}
              </p>
            </div>

            {/* External Live Preview Link */}
            <div className="pt-2">
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-accent-500 px-5 py-2.5 text-sm font-medium text-warm-50 transition-colors hover:bg-accent-600"
              >
                <span>View Full Case Study In Framer</span>
                <span aria-hidden="true">
                  <FaArrowRight />
                </span>
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default details;
