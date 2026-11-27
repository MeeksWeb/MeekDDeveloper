import { motion } from "motion/react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router";
import { reveal } from "~/motion";
import type { Projects, StrapiProjects, StrapiResponse } from "~/type";
import type { Route } from "./+types/details";

export async function loader({ params }: Route.LoaderArgs) {
  const { documentId } = params;
  const apiUrl = import.meta.env.VITE_API_URL;
  const imageUrl = import.meta.env.VITE_IMAGE_URL;

  const res = await fetch(
    `${apiUrl}/projects?filters[documentId][$eq]=${documentId}&populate=*`,
  );
  if (!res.ok) {
    throw new Response("Failed to load project", {
      status: res.status,
    });
  }

  const json: StrapiResponse<StrapiProjects> = await res.json();
  const data = json.data[0];
  if (!data) {
    throw new Response("Project not found", { status: 404 });
  }

  const project: Projects = {
    id: data.id,
    documentId: data.documentId,
    title: data.title,
    description: data.description,
    url: data.url,
    date: data.date,
    category: data.category,
    featured: data.featured,
    role: data.role,
    problem: data.problem,
    solution: data.solution,
    overview: data.overview,
    image: data.image?.url ? `${imageUrl}${data.image.url}` : "/no-image.png",
  };

  return { project };
}

const details = ({ loaderData }: Route.ComponentProps) => {
  const { project } = loaderData;

  return (
    <main className="min-h-screen bg-charcoal-950 text-charcoal-100 selection:bg-brand-500 selection:text-white">
      <div className="mx-auto max-w-5xl px-6 pt-2 pb-24 md:pt-16">
        {/* Back Navigation */}
        <div className="mb-8">
          <Link
            to="/project"
            className="inline-flex items-center gap-2 text-sm font-medium text-charcoal-400 transition-colors hover:text-brand-400"
          >
            <span aria-hidden="true">
              <FaArrowLeft />
            </span>
            <span>Back to Projects</span>
          </Link>
        </div>

        <motion.header {...reveal} className="mb-10">
          <h1 className="text-3xl font-bold tracking-tight text-white md:text-5xl">
            <span className="uppercase tracking-wider">{project.title}</span>
            <span className="mx-3 font-light text-brand-500">|</span>
            <span className="font-semibold text-charcoal-400 ">Case Study</span>
          </h1>
        </motion.header>

        <motion.section
          {...reveal}
          className="grid grid-cols-1 items-start gap-10 lg:grid-cols-1"
        >
          <div className="overflow-hidden rounded-2xl bg-charcoal-900 p-3 lg:col-span-1">
            <img
              src={project.image}
              alt={`${project.title} interface showcase`}
              className="aspect-4/3 w-full rounded-xl object-cover"
            />
          </div>

          <div className="space-y-6 lg:col-span-6">
            <div>
              <h2 className="text-base font-bold tracking-wide text-white">
                Overview
              </h2>
              <p className="mt-1.5 text-sm leading-relaxed text-charcoal-400 md:text-base">
                {project.overview}
              </p>
            </div>

            <div>
              <h2 className="text-base font-bold tracking-wide text-white">
                Role
              </h2>
              <p className="mt-1.5 text-sm text-charcoal-400 md:text-base">
                {project.role}
              </p>
              <time
                dateTime={project.date}
                className="mt-1 block font-mono text-xs text-charcoal-500"
              >
                {project.date}
              </time>
            </div>

            <div>
              <h2 className="text-base font-bold tracking-wide text-white">
                Problem
              </h2>
              <p className="mt-1.5 text-sm leading-relaxed text-charcoal-400 md:text-base">
                {project.problem}
              </p>
            </div>

            <div>
              <h2 className="text-base font-bold tracking-wide text-white">
                Solution
              </h2>
              <p className="mt-1.5 text-sm leading-relaxed text-charcoal-400 md:text-base">
                {project.solution}
              </p>
            </div>

            {/* External Live Preview Link */}
            <div className="pt-2">
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-brand-500 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-brand-600"
              >
                <span>View Full Case Study In Framer</span>
                <span aria-hidden="true">
                  <FaArrowRight />
                </span>
              </a>
            </div>
          </div>
        </motion.section>
      </div>
    </main>
  );
};

export default details;
