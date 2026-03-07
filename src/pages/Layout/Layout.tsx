import { Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <div className="flex min-h-screen w-screen flex-col">
      {/* <div className="text-center items-center px-3 pt-3 pb-3">
        <h1>Layout</h1>
      </div> */}
      <div className="flex flex-1">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
