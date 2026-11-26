import { motion } from "motion/react";
import { Link } from "react-router";

const HeroSection = () => {
  return (
    <section className="grid items-center gap-12 px-4 pt-10 pb-16 md:pt-20 md:pb-24 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] lg:gap-16">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
        className="flex flex-col items-center lg:items-start"
      >
        <div className="w-fit py-1 mb-6 text-xs font-medium tracking-wide p-3 text-brand-400 bg-brand-950/50 border border-brand-800/50 ">
          Product Designer & Frontend Developer
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="text-4xl text-center lg:text-start md:text-5xl xl:text-6xl font-bold tracking-wide mb-6 leading-[1.53]"
        >
          Crafting high performance{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-brand-400 to-brand-500">
            digital experiences
          </span>
          .
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.9,
            ease: "easeOut",
          }}
          className="text-lg text-center lg:text-start md:text-xl text-charcoal-400 max-w-2xl mb-10 font-light"
        >
          Specializing in end-to-end interface architecture, design systems, and
          robust React applications built for scale.
        </motion.p>

        <div className="flex flex-wrap items-center gap-4">
          <Link
            to="/project"
            className="px-6 py-3 bg-brand-600 hover:bg-brand-500 text-white font-medium transition-colors shadow-lg shadow-brand-600/20"
          >
            Explore Projects
          </Link>
          <Link
            to="/contact"
            className="px-6 py-3 bg-charcoal-900 hover:bg-charcoal-800 text-white transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </motion.div>

      <div className="relative mx-auto w-full max-w-sm lg:max-w-md">
        <div
          aria-hidden="true"
          className="absolute -inset-4 rounded-3xl bg-brand-600/10 blur-2xl"
        />
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="relative overflow-hidden rounded-2xl bg-charcoal-900 p-2"
        >
          <img
            src="/meekddeveloper.jpeg"
            alt="Michael Victor, product designer and frontend developer"
            className="aspect-4/5 w-full rounded-xl object-cover object-top"
            fetchPriority="high"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
