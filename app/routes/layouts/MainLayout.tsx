import { Outlet } from "react-router";



const MainLayout = () => {
  return (
    <>
      <section className="max-w-8xl mx-auto md:px-14 mt-8">
        <Outlet />
      </section>
    </>
  );
};

export default MainLayout;
