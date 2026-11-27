import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  route("api/:collection/:id?", "./routes/api.ts"),
  layout("./routes/layouts/HomeLayout.tsx", [index("routes/home/index.tsx")]),
  layout("./routes/layouts/MainLayout.tsx", [
    route("about", "./routes/about/index.tsx"),
    route("project", "./routes/projects/index.tsx"),
    route("project/:documentId", "./routes/projects/details.tsx"),
    route("blog", "./routes/blogs/index.tsx"),
    route("blog/:slug", "./routes/blogs/details.tsx"),
    route("contact", "./routes/contact/index.tsx"),
  ]),
] satisfies RouteConfig;
