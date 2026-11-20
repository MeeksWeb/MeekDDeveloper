import type { AboutProps } from "~/type";

const Experience = ({ experience }: { experience: AboutProps[] }) => {
  return (
    <section className="mb-20">
      <h2 className="mb-8 text-2xl font-bold text-warm-50">Experience</h2>
      <div className="space-y-6">
        {experience.map((item) => (
          <div key={item.id} className="rounded-2xl bg-warm-900/30 p-6 md:p-8">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3 className="text-lg font-bold text-warm-50">{item.role}</h3>
              <span className="font-mono text-xs text-accent-400">
                {item.period}
              </span>
            </div>
            <p className="mt-1 text-sm font-medium text-warm-400">
              {item.company}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-warm-400 md:text-base">
              {item.summary}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
