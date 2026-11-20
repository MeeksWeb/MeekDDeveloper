import { Link } from "react-router";
import Bio from "~/components/about/Bio";
import Design from "~/components/about/Design";
import Experience from "~/components/about/Experience";
import Frontend from "~/components/about/Frontend";
import Tools from "~/components/about/Tools";
import type { AboutProps } from "~/type";
import type { Route } from "./+types";

type AddAllTypesProps = {
  designs: AboutProps[];
  engineers: AboutProps[];
  tools: AboutProps[];
  experience: AboutProps[];
};

export async function loader({
  request,
}: Route.LoaderArgs): Promise<AddAllTypesProps> {
  // Previous: separate JSON Server, configured through .env.
  // const apiUrl = import.meta.env.VITE_ABOUT_API_URL;
  
  // Current: API hosted alongside this website.
  const apiUrl = new URL("/api", request.url).href;
  const [designRes, engRes, toolRes, experienceRes] = await Promise.all([
    fetch(`${apiUrl}/designSkills`),
    fetch(`${apiUrl}/engineeringSkills`),
    fetch(`${apiUrl}/toolchain`),
    fetch(`${apiUrl}/experience`),
  ]);
  if (!designRes.ok || !engRes.ok || !toolRes.ok || !experienceRes.ok)
    throw new Response("data not found", {
      status:
        designRes.status ||
        engRes.status ||
        toolRes.status ||
        experienceRes.status,
    });

  const [designs, engineers, tools, experience] = await Promise.all([
    designRes.json(),
    engRes.json(),
    toolRes.json(),
    experienceRes.json(),
  ]);

  return {
    designs,
    engineers,
    tools,
    experience,
  };
}

export default function AboutPage({ loaderData }: Route.ComponentProps) {
  const { designs, engineers, tools, experience } = loaderData;
  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 selection:bg-blue-500 selection:text-white">
      <div className="mx-auto max-w-5xl px-6 pt-8 pb-24 md:pt-24">
        <header className="mb-16">
          <h1 className="text-3xl leading-tight font-bold tracking-tight text-white md:text-5xl">
            <span className="uppercase tracking-wider">ABOUT ME</span>
            <span className="mx-3 font-light text-blue-500">|</span>
            <span className="text-gray-200">Michael Victor</span>
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-relaxed text-gray-400 md:text-lg">
            I'm a Product Designer, UI/UX Designer, and Front-End Developer. I
            focus on turning complex, high-friction workflows into clean,
            high-contrast digital products that feel effortless to use.
          </p>
        </header>

        {/* Bio & Philosophy */}
        <Bio />

        {/* Skills & Toolchain */}
        <section className="mb-20">
          <h2 className="mb-8 text-2xl font-bold text-white">
            Capabilities & Stack
          </h2>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <Design designs={designs} />
            <Frontend engineers={engineers} />
            <Tools tools={tools} />
          </div>
        </section>
        <Experience experience={experience} />

        {/* Bottom CTA Banner */}
        <section className="flex flex-col items-start justify-between gap-6 rounded-2xl bg-gray-900/60 p-8 md:flex-row md:items-center">
          <div>
            <h2 className="text-xl font-bold text-white md:text-2xl">
              Have a product or idea in mind?
            </h2>
            <p className="mt-2 text-sm text-gray-400 md:text-base">
              Explore my selected case studies or reach out directly to
              collaborate.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              to="/project"
              className=" bg-gray-900 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:border-gray-600 hover:bg-gray-800"
            >
              View Projects
            </Link>
            <Link
              to="/contact"
              className=" bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-500"
            >
              Get in Touch
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
