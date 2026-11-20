import { FaArrowLeft } from "react-icons/fa";
import ReactMarkdown from "react-markdown";
import { Link } from "react-router";
import type { BlogPostMeta } from "~/type";
import type { Route } from "./+types/details";

export async function loader({ request, params }: Route.LoaderArgs) {
  const { slug } = params;
  const newUrl = new URL("/post-meta.json", request.url);
  const res = await fetch(newUrl.href);

  if (!res.ok)
    throw new Response("Failed to fetch data", {
      status: res.status,
    });

  const data: BlogPostMeta[] = await res.json();
  const postSlug = data.find((post) => post.slug === slug);
  if (!postSlug) throw new Response("Not Found", { status: 404 });

  //Get the markdown file
  const getMarkDown = await import(`../../posts/${slug}.md?raw`);

  return {
    postSlug,
    getMarkDown: getMarkDown.default,
  };
}

const details = ({ loaderData }: Route.ComponentProps) => {
  const { postSlug, getMarkDown } = loaderData;
  console.log(getMarkDown, postSlug);
  return (
    <main className="min-h-screen bg-warm-950 text-warm-100 selection:bg-accent-500 selection:text-warm-50">
      <article className="mx-auto max-w-3xl px-3 pt-8 pb-24 md:pt-20">
        <div className="mb-10">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-warm-400 transition-colors hover:text-accent-400"
          >
            <span aria-hidden="true"> {<FaArrowLeft />} </span>
            <span>Back to Articles</span>
          </Link>
        </div>

        <header className="mb-12 border-b border-warm-800/80 pb-8">
          <div className="mb-4 flex flex-wrap items-center gap-3 font-mono text-xs text-warm-400">
            <span className=" border border-accent-500/30 bg-accent-500/10 px-2.5 py-0.5 font-semibold text-accent-400">
              Article #{postSlug.id}
            </span>
            <span>&bull;</span>
            <time dateTime={postSlug.date}>
              {new Date(postSlug.date).toDateString()}
            </time>
          </div>

          <h1 className="text-3xl leading-normal font-bold tracking-tight text-warm-50 md:text-5xl">
            {postSlug.title}
          </h1>

          <p className="mt-4 text-base leading-relaxed text-warm-400 md:text-lg">
            {postSlug.excerpt}
          </p>
        </header>

        {/* Markdown Body */}
        <div className="prose prose-invert prose-blue max-w-none prose-headings:font-bold prose-headings:tracking-normal prose-headings:text-warm-50 prose-headings:leading-relaxed prose-p:leading-normal prose-p:text-warm-400 prose-a:text-accent-400 prose-a:no-underline hover:prose-a:underline prose-strong:text-warm-50 prose-code:rounded prose-code:bg-warm-900 prose-code:px-1.5 prose-code:py-0.5 prose-code:text-accent-400 prose-pre:bg-warm-900/70">
          <ReactMarkdown>{getMarkDown}</ReactMarkdown>
        </div>

        <footer className="mt-12 flex items-center justify-between pt-8">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-warm-400 transition-colors hover:text-warm-50"
          >
            <span aria-hidden="true">{<FaArrowLeft />}</span>
            <span>All Articles</span>
          </Link>

          <Link
            to="/contact"
            className=" bg-accent-500 px-4 py-2 text-sm font-medium text-warm-50 transition-colors hover:bg-accent-600"
          >
            Discuss This Article
          </Link>
        </footer>
      </article>
    </main>
  );
};

export default details;
