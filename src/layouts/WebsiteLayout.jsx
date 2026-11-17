import { Outlet } from "react-router-dom";
// import Preloader from "../components/website/Preloader";

function WebsiteLayout() {
  return (
    <div className="website-theme">
      {/* <Preloader /> */}
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default WebsiteLayout;
