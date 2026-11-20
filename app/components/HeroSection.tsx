import { Link } from "react-router";

const HeroSection = () => {
  return (
    <section className="flex flex-col items-center md:items-start px-4 pt-10 pb-16 md:pt-20 md:pb-24">
      <div className="w-fit py-1 mb-6 text-xs font-medium tracking-wide p-3 text-blue-400 bg-blue-950/50 border border-blue-800/50 ">
        Product Designer & Frontend Developer
      </div>

      <h1 className="text-4xl text-center md:text-start md:max-w-6xl md:text-6xl lg:text-7xl font-bold tracking-wide mb-6 leading-[1.53]">
        Crafting high performance{" "}
        <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-indigo-500">
          digital experiences
        </span>
        .
      </h1>

      <p className="text-lg text-center md:text-start md:text-xl text-gray-400 max-w-2xl mb-10 font-light">
        Specializing in end-to-end interface architecture, design systems, and
        robust React applications built for scale.
      </p>

      <div className="flex flex-wrap items-center gap-4">
        <Link
          to="/project"
          className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-medium transition-colors shadow-lg shadow-blue-600/20"
        >
          Explore Projects
        </Link>
        <Link
          to="/contact"
          className="px-6 py-3 bg-gray-900 hover:bg-gray-800 text-white transition-colors"
        >
          Get in Touch
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
