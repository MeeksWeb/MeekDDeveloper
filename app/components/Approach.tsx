import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router";

const Approach = () => {
  return (
    <section
      id="approach"
      className="bg-warm-950 px-6 py-24 text-warm-100 md:py-32"
    >
      <div className="mx-auto max-w-8xl">
        <div className="mb-14 md:mb-20">

          <h2 className="font-display text-4xl leading-normal tracking-tight text-warm-50 md:text-6xl">
            FROM IDEA
            <br />
            TO EXECUTION
          </h2>

          <p className="mt-6 max-w-xl font-sans text-base leading-relaxed text-warm-400">
            A thoughtful process that combines strategy, user-centered design,
            and modern frontend development to create meaningful digital
            experiences.
          </p>
        </div>

        {/* STEPS */}
        <div className="grid gap-6 border-t border-warm-800 py-12 md:grid-cols-[80px_1fr_1fr] md:gap-10">
          <span className="font-display text-xl text-accent-500">01</span>

          <h3 className="text-2xl font-semibold leading-[1.3] text-warm-50 md:text-3xl">
            Discovery, Research & Strategy
          </h3>

          <p className="max-w-md text-sm leading-[1.9] text-warm-400 md:text-base">
            Every great digital experience begins with understanding the
            problem. I explore user needs, business objectives, and market
            opportunities through research and competitive analysis. These
            insights help me define a clear direction and build solutions that
            solve real problems.
          </p>
        </div>

        <div className="grid gap-6 border-t border-warm-800 py-12 md:grid-cols-[80px_1fr_1fr] md:gap-10">
          <span className="font-display text-xl text-accent-500">02</span>

          <h3 className="text-2xl font-semibold leading-[1.3] text-warm-50 md:text-3xl">
            UX Strategy & Interface Design
          </h3>

          <p className="max-w-md text-sm leading-[1.9] text-warm-400 md:text-base">
            I transform research and ideas into intuitive, visually compelling
            interfaces. From wireframes and user flows to interactive prototypes
            and scalable design systems, I focus on creating seamless
            experiences that balance usability, accessibility, and visual
            excellence.
          </p>
        </div>

        <div className="grid gap-6 border-y border-warm-800 py-12 md:grid-cols-[80px_1fr_1fr] md:gap-10">
          <span className="font-display text-xl text-accent-500">03</span>

          <h3 className="text-2xl font-semibold leading-[1.3] text-warm-50 md:text-3xl">
            Frontend Development & Launch
          </h3>

          <p className="max-w-md text-sm leading-[1.9] text-warm-400 md:text-base">
            I bring designs to life through clean, responsive, and maintainable
            code using React, TypeScript, and Tailwind CSS. I focus on
            performance, accessibility, smooth interactions, and cross-device
            compatibility to deliver polished digital products ready for real
            users.
          </p>
        </div>

        <div className="mt-16 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <p className="max-w-sm text-base leading-relaxed text-warm-400">
            Have an idea worth building? Let's turn it into something
            exceptional.
          </p>

          <Link
            to="/contact"
            className="inline-flex w-fit items-center gap-4 bg-accent-500 px-6 py-3 font-sans text-sm font-medium text-warm-50 transition-colors duration-300 hover:bg-accent-600"
          >
            Let's Work Together
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Approach;
