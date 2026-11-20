import type { AboutProps } from "~/type";

const frontend = ({ engineers }: { engineers: AboutProps[] }) => {
  return (
    <div className="rounded-2xl bg-warm-900/40 p-6">
      <h3 className="text-base font-bold text-warm-50">Front-End Development</h3>
      <ul className="mt-4 space-y-2.5 text-sm text-warm-400">
        {engineers.map((skill) => (
          <li key={skill.id} className="flex items-center gap-2.5">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-500" />
            <span>{skill.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default frontend;
