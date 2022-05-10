import React from "react";

import { Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
};

export default Layout;
