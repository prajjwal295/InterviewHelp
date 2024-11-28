import Header from "@/components/dashboard/Header";
import { Toaster } from "@/components/ui/sonner";
import React from "react";
import { Outlet } from "react-router-dom";

function DashBoardLayout() {
  return (
    <div>
      <Header />
      <div className="mx-5 md:mx-20 lg:mx-36"><Outlet/></div>
    </div>
  );
}

export default DashBoardLayout;
