import { useState } from "react";
import BlogPostCard from "~/components/BlogPostCard";
import SearchFilter from "~/components/SearchFilter";
import type { BlogPostMeta } from "~/type";
import type { Route } from "./+types";

export async function loader({
  request,
}: Route.LoaderArgs): Promise<{ blogPost: BlogPostMeta[] }> {
  const newUrl = new URL("/post-meta.json", request.url);
  const res = await fetch(newUrl.href);
  if (!res.ok)
    throw new Response("Failed to fetch data", {
      status: res.status,
    });

  const data = await res.json();

  return {
    blogPost: data,
  };
}

const BlogPage = ({ loaderData }: Route.ComponentProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const { blogPost } = loaderData;

  const sortedPost = [...blogPost].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  const filteredPost = sortedPost.filter((post) => {
    const result = post.title.toLowerCase().includes(searchQuery.toLowerCase());
    return result;
  });

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const postPerPage = 3;

  const totalPages = Math.ceil(filteredPost.length / postPerPage);
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPost = filteredPost.slice(indexOfFirstPost, indexOfLastPost);

  const renderPagination = () => (
    <div className="flex justify-center gap-2 mt-8">
      {Array.from({ length: totalPages }, (_, idx) => (
        <button
          key={idx + 1}
          className={`px-3 py-1 cursor-pointer ${currentPage === idx + 1 ? "bg-accent-600 text-warm-50" : "bg-warm-700 text-gray"}`}
          onClick={() => setCurrentPage(idx + 1)}
        >
          {idx + 1}
        </button>
      ))}
    </div>
  );

  return (
    <main className="min-h-screen bg-warm-950 text-warm-100 selection:bg-accent-500 selection:text-warm-50">
      <div className="mx-auto max-w-5xl px-4 pt-12 pb-24 md:pt-24">
        <header className="mb-12 text-center">
          <h1 className="text-3xl text-center font-bold tracking-tight text-warm-50 md:text-5xl">
            <span className="uppercase tracking-wider">THOUGHTS</span>
            <span className="mx-3 font-light text-accent-400">|</span>
            <span className="font-semibold text-warm-200">
              Writing & Articles
            </span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-warm-400 md:text-base">
            Deep dives into design systems, front-end architecture, user
            experience psychology, and modern product engineering.
          </p>
        </header>

        {/* Search Bar Filter */}
        <SearchFilter
          searchQuery={searchQuery}
          onSearchChange={(query) => {
            setSearchQuery(query);
            setCurrentPage(1);
          }}
        />

        {/* Blog Post Feed */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
          {currentPost.map((post) => (
            <BlogPostCard key={post.id} post={post} />
          ))}
        </div>

        {/* Empty State Fallback */}
        {filteredPost.length === 0 && (
          <div className="rounded-2xl border border-warm-800 bg-warm-900/30 py-16 text-center">
            <p className="text-warm-400">
              {`No articles found matching "${searchQuery}"`}
            </p>
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              className="mt-4 text-sm font-medium text-accent-400 hover:underline"
            >
              Clear search query
            </button>
          </div>
        )}

        {totalPages > 1 && renderPagination()}
      </div>
    </main>
  );
};

export default BlogPage;
