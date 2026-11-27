import { motion } from "motion/react";
import { Link } from "react-router";
import Bio from "~/components/about/Bio";
import Design from "~/components/about/Design";
import Experience from "~/components/about/Experience";
import Frontend from "~/components/about/Frontend";
import Tools from "~/components/about/Tools";
import { reveal } from "~/motion";
import type { AboutProps, StrapiAbout, StrapiResponse } from "~/type";
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
  const apiUrl = import.meta.env.VITE_API_URL;

  const [designRes, engRes, toolRes, experienceRes] = await Promise.all([
    fetch(`${apiUrl}/design-skills`),
    fetch(`${apiUrl}/engineeringskills`),
    fetch(`${apiUrl}/toolchains`),
    fetch(`${apiUrl}/experiences`),
  ]);

  if (!designRes.ok || !engRes.ok || !toolRes.ok || !experienceRes.ok)
    throw new Response("data not found", {
      status:
        designRes.status ||
        engRes.status ||
        toolRes.status ||
        experienceRes.status,
    });

  const designJson: StrapiResponse<StrapiAbout> = await designRes.json();
  const engineersJson: StrapiResponse<StrapiAbout> = await engRes.json();
  const toolsJson: StrapiResponse<StrapiAbout> = await toolRes.json();
  const experienceJson: StrapiResponse<StrapiAbout> =
    await experienceRes.json();

  //create a function instead of repeating format
  const formatData = (item: StrapiAbout) => ({
    id: item.id,
    documentId: item.documentId,
    period: item.period,
    role: item.role,
    name: item.name,
    company: item.company,
    summary: item.summary,
  });

  const designs = designJson.data.map(formatData);
  const engineers = engineersJson.data.map(formatData);
  const tools = toolsJson.data.map(formatData);
  const experience = experienceJson.data.map(formatData);

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
    <main className="min-h-screen bg-charcoal-950 text-charcoal-100 selection:bg-brand-500 selection:text-white">
      <div className="mx-auto max-w-5xl px-6 pt-8 pb-24 md:pt-24">
        <motion.header {...reveal} className="mb-16">
          <h1 className="text-3xl leading-tight font-bold tracking-tight text-white md:text-5xl">
            <span className="uppercase tracking-wider">ABOUT ME</span>
            <span className="mx-3 font-light text-brand-500">|</span>
            <span className="text-charcoal-200">Michael Victor</span>
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-relaxed text-charcoal-400 md:text-lg">
            I'm a Product Designer, UI/UX Designer, and Front-End Developer. I
            focus on turning complex, high-friction workflows into clean,
            high-contrast digital products that feel effortless to use.
          </p>
        </motion.header>

        {/* Bio & Philosophy */}
        <Bio />

        {/* Skills & Toolchain */}
        <motion.section {...reveal} className="mb-20">
          <h2 className="mb-8 text-2xl font-bold text-white">
            Capabilities & Stack
          </h2>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <Design designs={designs} />
            <Frontend engineers={engineers} />
            <Tools tools={tools} />
          </div>
        </motion.section>
        <Experience experience={experience} />

        {/* Bottom CTA Banner */}
        <motion.section
          {...reveal}
          className="flex flex-col items-start justify-between gap-6 rounded-2xl bg-charcoal-900/60 p-8 md:flex-row md:items-center"
        >
          <div>
            <h2 className="text-xl font-bold text-white md:text-2xl">
              Have a product or idea in mind?
            </h2>
            <p className="mt-2 text-sm text-charcoal-400 md:text-base">
              Explore my selected case studies or reach out directly to
              collaborate.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              to="/project"
              className=" bg-charcoal-900 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:border-charcoal-600 hover:bg-charcoal-800"
            >
              View Projects
            </Link>
            <Link
              to="/contact"
              className=" bg-brand-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-brand-500"
            >
              Get in Touch
            </Link>
          </div>
        </motion.section>
      </div>
    </main>
  );
}
