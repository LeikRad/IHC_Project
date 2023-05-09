import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";

const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="mx-auto flex w-full max-w-[90rem] grow flex-col px-1 py-8 sm:px-5 md:py-16">
        <Outlet />
      </div>
    </>
  );
}

const CleanLayout = () => {
  <div className="container mx-auto">
    <Outlet />
  </div>
}

export { Layout as default, CleanLayout };