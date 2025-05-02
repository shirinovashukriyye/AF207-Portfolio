import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
     
    </div>
  );
};

export default Layout;
