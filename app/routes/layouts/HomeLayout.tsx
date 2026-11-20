import { Outlet } from "react-router";
import type { Route } from "../home/+types";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "MeekDDeveloper | Welcome" },
    { name: "description", content: "Welcome to My Portfolio" },
  ];
}

const HomeLayout = () => {
  return (
    <>
      <section className="max-w-8xl mx-auto px md:px-14 mt-8">
        <Outlet />
      </section>
    </>
  );
};

export default HomeLayout;
