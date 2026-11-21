import { motion } from "motion/react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router";
import { reveal } from "~/motion";
import type { Projects } from "~/type";
import FeaturedCard from "./FeaturedCard";

const FeaturedProjects = ({ projects }: { projects: Projects[] }) => {
  const featuredProjects = projects
    .filter((project) => project.featured === true)
    .slice(0, 2);

  return (
    <motion.section {...reveal} className="px-4 py-16 ">
      <div className="flex justify-between items-end mb-10">
        <div>
          <h2 className="text-xs uppercase tracking-widest text-blue-400 font-semibold mb-2">
            Selected Work
          </h2>
          <h3 className="text-2xl md:text-3xl font-bold">
            Featured Case Studies
          </h3>
        </div>
        <Link
          to="/project"
          className=" flex items-center gap-2 text-sm text-gray-400 hover:text-blue-400 transition-colors"
        >
          View all projects
          <span aria-hidden="true">{<FaArrowRight />}</span>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {featuredProjects.map((project) => (
          <FeaturedCard key={project.id} project={project} />
        ))}
      </div>
    </motion.section>
  );
};

export default FeaturedProjects;
