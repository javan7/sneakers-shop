import React from "react";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <div className="content p-40">
        <div className="d-flex justify-between align-center mb-40 ">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Layout;
