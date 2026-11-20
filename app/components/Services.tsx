const Services = () => {
  return (
    <section
      id="services"
      className="bg-gray-950 px-6 py-24 text-gray-100 md:py-32"
    >
      <div className="mx-auto max-w-8xl">

        <div className="mb-14 md:mb-20">

          <h2 className="font-display text-4xl leading-[1.2] tracking-tight text-white md:text-6xl">
            MY SERVICES
          </h2>
        </div>

        
        <div className="group grid gap-6 border-t border-gray-800 py-12 md:grid-cols-[70px_1fr_1fr] md:gap-10">
          <span className="font-sans text-sm font-medium text-blue-500">
            /01
          </span>

          <h3 className="font-display text-2xl leading-[1.3] text-white md:text-3xl">
            PRODUCT DESIGNER
          </h3>

          <p className="max-w-md font-sans text-sm leading-[1.9] text-gray-400 md:text-base">
            I solve complex business problems by creating intuitive,
            user-centered interfaces. My approach combines deep user research
            with high-fidelity visual design and prototyping to ensure every
            interaction is meaningful, accessible, and aligned with your brand
            goals.
          </p>
        </div>

        
        <div className="group grid gap-6 border-y border-gray-800 py-12 md:grid-cols-[70px_1fr_1fr] md:gap-10">
          <span className="font-sans text-sm font-medium text-blue-500">
            /02
          </span>

          <h3 className="font-display text-2xl leading-[1.3] text-white md:text-3xl">
            FRONTEND DEVELOPER
          </h3>

          <p className="max-w-md font-sans text-sm leading-[1.9] text-gray-400 md:text-base">
            I transform creative designs into responsive, interactive, and
            high-performance web experiences. Using modern technologies like
            React, TypeScript, and Tailwind CSS, I build clean, scalable
            interfaces that combine functionality with exceptional visual
            design. My focus is on delivering seamless user experiences across
            all devices.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
