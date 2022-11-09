import React from "react";
import { useLoaderData } from "react-router-dom";
import "react-photo-view/dist/react-photo-view.css";
import { PhotoProvider, PhotoView } from "react-photo-view";

const Details = () => {
  const { title, img, description, price } = useLoaderData();
  return (
    <div className="w-4/5 mx-auto py-16">
      <h1 className="text-5xl text-center py-5 font-bold">{title}</h1>
      <PhotoProvider>
        <PhotoView src={img}>
          <img src={img} alt="" className="rounded-lg w-2/5 mx-auto py-5" />
        </PhotoView>
      </PhotoProvider>
      <p className="text-xl font-extrabold py-5">$ {price}</p>
      <p>{description}</p>
    </div>
  );
};

export default Details;
