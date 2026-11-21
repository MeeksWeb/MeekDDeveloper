import { motion } from "motion/react";
import { reveal } from "~/motion";
import type { AboutProps } from "~/type";
const Design = ({ designs }: { designs: AboutProps[] }) => {
  return (
    <motion.div {...reveal} className="rounded-2xl bg-charcoal-900/40 p-6">
      <h3 className="text-base font-bold text-white">Product & UI/UX Design</h3>
      <ul className="mt-4 space-y-2.5 text-sm text-charcoal-400">
        {designs.map((skill) => (
          <li key={skill.id} className="flex items-center gap-2.5">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
            <span>{skill.name}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default Design;
