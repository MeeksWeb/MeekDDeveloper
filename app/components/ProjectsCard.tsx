import { Link } from "react-router";
import type { Projects } from "~/type";

const ProjectsCard = ({ project }: { project: Projects }) => {
  return (
    <Link to={`/project/${project.id}`}>
      <article className="group flex flex-col justify-between overflow-hidden rounded-2xl bg-gray-900/40 transition-all duration-300 hover:-translate-y-1 border-gray-900/40  hover:border-blue-400 ">
        <div>
          <div className="relative aspect-16/10 w-full overflow-hidden bg-gray-800/60">
            <img
              src={project.image}
              alt={`${project.title} preview`}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          {/* Card Body */}
          <div className="p-6">
            <span className="text-xs font-mono inline-block px-3 py-1 mb-2 tracking-wide text-blue-400 bg-blue-950/50 border border-blue-800/50 rounded-full">
              {project.category}
            </span>
            <div className="mb-1 flex items-center justify-between gap-2">
              <h2 className="text-lg font-bold text-white transition-colors group-hover:text-blue-600">
                {project.title}
              </h2>
              <time
                dateTime={project.date}
                className="font-mono text-xs text-gray-500"
              >
                {project.date}
              </time>
            </div>

            <p className="line-clamp-3 text-sm leading-relaxed text-gray-400">
              {project.description}
            </p>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default ProjectsCard;
