const Bio = () => {
  return (
    <section className="mb-20 grid grid-cols-1 gap-10 lg:grid-cols-12">
      <div className="space-y-5 text-sm leading-relaxed text-warm-400 md:text-base lg:col-span-7">
        <h2 className="text-xl font-bold text-warm-50 md:text-2xl">
          Bridging Design Craft & Code
        </h2>
        <p>
          Great product design lives at the intersection of clear visual
          hierarchy and practical user empathy. Whether I'm reducing cognitive
          load in data-dense fintech interfaces or eliminating form fatigue in
          mobile platforms, every layout decision is rooted in solving real user
          friction.
        </p>
        <p>
          Beyond static mockups, I build interactive experiences in{" "}
          <span className="font-medium text-warm-50">Framer</span> and develop
          production web applications with{" "}
          <span className="font-medium text-warm-50">
            React, TypeScript, and Tailwind CSS
          </span>
          . Understanding how components behave in code ensures my design
          systems are scalable, accessible, and developer-ready from day one.
        </p>
      </div>

      {/* Highlights Card */}
      <aside className="rounded-2xl  bg-warm-900/40 p-6 lg:col-span-5">
        <h3 className="text-sm font-bold tracking-wider text-accent-400 uppercase">
          Core Principles
        </h3>
        <ul className="mt-5 space-y-4 text-sm">
          <li className="border-b border-warm-800/70 pb-4">
            <p className="font-semibold text-warm-50">Clarity Over Clutter</p>
            <p className="mt-1 text-warm-400">
              Generous whitespace, crisp typography, and purposeful contrast
              guide attention without visual noise.
            </p>
          </li>
          <li className="border-b border-warm-800/70 pb-4">
            <p className="font-semibold text-warm-50">Systems Thinking</p>
            <p className="mt-1 text-warm-400">
              Reusable tokens, modular grids, and consistent interaction
              patterns built to scale.
            </p>
          </li>
          <li>
            <p className="font-semibold text-warm-50">Design-to-Code Execution</p>
            <p className="mt-1 text-warm-400">
              Translating Figma architectures directly into responsive,
              performant front-end interfaces.
            </p>
          </li>
        </ul>
      </aside>
    </section>
  );
};

export default Bio;
