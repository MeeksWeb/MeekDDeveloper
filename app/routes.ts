import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  layout("./routes/layouts/HomeLayout.tsx", [index("routes/home/index.tsx")]),
  layout("./routes/layouts/MainLayout.tsx", [
    route("about", "./routes/about/index.tsx"),
    route("project", "./routes/projects/index.tsx"),
    route("project/:id", "./routes/projects/details.tsx"),
    route("blog", "./routes/blogs/index.tsx"),
    route("blog/:slug", "./routes/blogs/details.tsx"),
    route("contact", "./routes/contact/index.tsx"),
  ]),
] satisfies RouteConfig;
