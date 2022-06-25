import React from "react";
import Navbars from "./Navbars";

const Layout = ({ children }) => {
  return (
    <>
      <Navbars />
      {children}
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
