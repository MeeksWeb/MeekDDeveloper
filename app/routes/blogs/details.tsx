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
    <main className="min-h-screen bg-gray-950 text-gray-100 selection:bg-blue-500 selection:text-white">
      <article className="mx-auto max-w-3xl px-3 pt-8 pb-24 md:pt-20">
        <div className="mb-10">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-400 transition-colors hover:text-blue-400"
          >
            <span aria-hidden="true"> {<FaArrowLeft />} </span>
            <span>Back to Articles</span>
          </Link>
        </div>

        <header className="mb-12 border-b border-gray-800/80 pb-8">
          <div className="mb-4 flex flex-wrap items-center gap-3 font-mono text-xs text-gray-400">
            <span className=" border border-blue-500/30 bg-blue-500/10 px-2.5 py-0.5 font-semibold text-blue-400">
              Article #{postSlug.id}
            </span>
            <span>&bull;</span>
            <time dateTime={postSlug.date}>
              {new Date(postSlug.date).toDateString()}
            </time>
          </div>

          <h1 className="text-3xl leading-normal font-bold tracking-tight text-white md:text-5xl">
            {postSlug.title}
          </h1>

          <p className="mt-4 text-base leading-relaxed text-gray-400 md:text-lg">
            {postSlug.excerpt}
          </p>
        </header>

        {/* Markdown Body */}
        <div className="prose prose-invert prose-blue max-w-none prose-headings:font-bold prose-headings:tracking-normal prose-headings:text-white prose-headings:leading-relaxed prose-p:leading-normal prose-p:text-gray-400 prose-a:text-blue-400 prose-a:no-underline hover:prose-a:underline prose-strong:text-white prose-code:rounded prose-code:bg-gray-900 prose-code:px-1.5 prose-code:py-0.5 prose-code:text-blue-400 prose-pre:bg-gray-900/70">
          <ReactMarkdown>{getMarkDown}</ReactMarkdown>
        </div>

        <footer className="mt-12 flex items-center justify-between pt-8">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-400 transition-colors hover:text-white"
          >
            <span aria-hidden="true">{<FaArrowLeft />}</span>
            <span>All Articles</span>
          </Link>

          <Link
            to="/contact"
            className=" bg-blue-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-600"
          >
            Discuss This Article
          </Link>
        </footer>
      </article>
    </main>
  );
};

export default details;
