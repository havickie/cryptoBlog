import React from "react";
import Navbar from "./Nav";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar/>
      {children}
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
