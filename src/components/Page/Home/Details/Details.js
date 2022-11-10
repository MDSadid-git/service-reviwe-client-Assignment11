import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import "react-photo-view/dist/react-photo-view.css";
import { PhotoProvider, PhotoView } from "react-photo-view";

const Details = () => {
  const { title, img, description, price } = useLoaderData();
  return (
    <div>
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
      <div className="mx-auto my-10 flex justify-center">
        <Link to={`/myreviews`}>
          <button className="btn btn-secondary mx-2">Add Review</button>
        </Link>
      </div>
    </div>
  );
};

export default Details;
