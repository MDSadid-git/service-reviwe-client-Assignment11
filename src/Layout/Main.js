import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Shear/Footer/Footer";
import Header from "../components/Shear/Header/Header";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
