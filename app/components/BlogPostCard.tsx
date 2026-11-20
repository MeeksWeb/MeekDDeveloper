import { Link } from "react-router";
import type { BlogPostMeta } from "~/type";
const BlogPostCard = ({ post }: { post: BlogPostMeta }) => {
  return (
    <Link to={`/blog/${post.slug}`}>
      <article className="group flex flex-col justify-between rounded-2xl border border-gray-800/80 bg-gray-950/50 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-400 hover:bg-gray-900/60 md:p-8">
        <div>
          <div className="mb-3 flex items-center justify-between gap-4">
            <span className="font-mono text-xs font-semibold text-blue-600">
              Article #{post.id}
            </span>
            <time
              dateTime={post.date}
              className="font-mono text-xs text-gray-500"
            >
              {new Date(post.date).toDateString()}
            </time>
          </div>

          <h2 className="text-xl font-bold text-white transition-colors md:text-2xl">
            <span className="absolute inset-0" aria-hidden="true" />
            {post.title}
          </h2>

          <p className="mt-3 text-sm leading-normal text-gray-400 md:text-base">
            {post.excerpt}
          </p>
        </div>
      </article>
    </Link>
  );
};

export default BlogPostCard;
