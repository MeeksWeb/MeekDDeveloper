import { motion } from "motion/react";
import { reveal } from "~/motion";
import type { AboutProps } from "~/type";

const Tools = ({ tools }: { tools: AboutProps[] }) => {
  return (
    <motion.div {...reveal} className="rounded-2xl bg-charcoal-900/40 p-6">
      <h3 className="text-base font-bold text-white">Daily Toolchain</h3>
      <ul className="mt-4 space-y-3 text-sm">
        {tools.map((tool) => (
          <li key={tool.id} className="flex flex-col">
            <span className="font-medium text-white">{tool.name}</span>
            <span className="text-xs text-charcoal-500">{tool.role}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default Tools;
