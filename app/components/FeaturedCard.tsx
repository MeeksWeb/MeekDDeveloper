import { Link } from "react-router";
import type { Projects } from "~/type";
const FeaturedCard = ({ project }: { project: Projects }) => {
  return (
    <Link to={`/project/${project.id}`}>
      <div className="group rounded-2xl bg-gray-900/50 overflow-hidden">
        <div>
          <img src={project.image} alt="" />
        </div>
        <div className="p-6">
          <span className="text-xs font-mono inline-block px-3 py-1 mb-2 tracking-wide text-blue-400 bg-blue-950/50 border border-blue-800/50 rounded-full">
            {project.category}
          </span>
          <h4 className="text-xl font-bold mt-1 group-hover:text-blue-400 transition-colors">
            {project.title}
          </h4>
          <p className="text-sm text-gray-400 mt-2">{project.description}</p>
        </div>
      </div>
    </Link>
  );
};

export default FeaturedCard;
