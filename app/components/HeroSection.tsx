import { Link } from "react-router";

const HeroSection = () => {
  return (
    <section className="grid items-center gap-12 px-4 pt-10 pb-16 md:pt-20 md:pb-24 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] lg:gap-16">
      <div className="flex flex-col items-center lg:items-start">
      <div className="w-fit py-1 mb-6 text-xs font-medium tracking-wide p-3 text-blue-400 bg-blue-950/50 border border-blue-800/50 ">
        Product Designer & Frontend Developer
      </div>

      <h1 className="text-4xl text-center lg:text-start md:text-5xl xl:text-6xl font-bold tracking-wide mb-6 leading-[1.53]">
        Crafting high performance{" "}
        <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-indigo-500">
          digital experiences
        </span>
        .
      </h1>

      <p className="text-lg text-center lg:text-start md:text-xl text-gray-400 max-w-2xl mb-10 font-light">
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
      </div>

      <div className="relative mx-auto w-full max-w-sm lg:max-w-md">
        <div aria-hidden="true" className="absolute -inset-4 rounded-3xl bg-blue-600/10 blur-2xl" />
        <div className="relative overflow-hidden rounded-2xl border border-gray-800 bg-gray-900 p-2">
          <img
            src="/meekddeveloper.jpeg"
            alt="Michael Victor, product designer and frontend developer"
            className="aspect-4/5 w-full rounded-xl object-cover object-top"
            fetchPriority="high"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
