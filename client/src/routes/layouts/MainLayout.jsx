// import { Outlet } from "react-router";
import Leftbar from "../../components/leftbar/Leftbar";
import Topbar from "../../components/topbar/Topbar";
import "./mainLayout.css";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div className='app'>
      <Leftbar />
      <div className='content'>
        <Topbar />
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;