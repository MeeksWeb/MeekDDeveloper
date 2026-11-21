import aboutDb from "../../data/aboutdb.json";
import projectsDb from "../../data/db.json";
import type { Route } from "./+types/api";

// JSON files are bundled with the server; no separate database process is needed.
const collections = {
  projects: projectsDb.projects,
  designSkills: aboutDb.designSkills,
  engineeringSkills: aboutDb.engineeringSkills,
  toolchain: aboutDb.toolchain,
  experience: aboutDb.experience,
};

export function loader({ params }: Route.LoaderArgs) {
  const items = collections[params.collection as keyof typeof collections];

  if (!items) {
    return Response.json({ error: "Collection not found" }, { status: 404 });
  }

  const result = params.id
    ? items.find((item) => String(item.id) === params.id)
    : items;

  if (!result) {
    return Response.json({ error: "Item not found" }, { status: 404 });
  }

  return Response.json(result, {
    headers: {
      "Cache-Control": "public, max-age=60, s-maxage=300",
    },
  });
}
