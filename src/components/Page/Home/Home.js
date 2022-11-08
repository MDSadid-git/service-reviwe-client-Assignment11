import React from "react";
import useTitle from "../../hooks/useTitle";
import Carousel from "../Banner/Carousel";

const Home = () => {
  useTitle("Home");
  return (
    <div className="w-4/5 mx-auto py-20">
      <div className="">
        <Carousel></Carousel>
      </div>
    </div>
  );
};

export default Home;
