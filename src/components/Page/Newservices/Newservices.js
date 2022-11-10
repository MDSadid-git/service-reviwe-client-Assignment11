import React from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Newservices = () => {
  const navigate = useNavigate();
  const handlePlaceOrder = (event) => {
    event.preventDefault();
    const form = event.target;
    const title = form.Title.value;
    const img = form.ImageURL.value;
    const price = form.price.value;
    const description = form.Details.value;
    const servicespage = {
      title,
      img,
      price,
      description,
    };
    fetch("https://service-review-server-weld.vercel.app/servicespage", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(servicespage),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast.success("Services placed successfully");
          navigate("/servicespage");
          form.reset();
        }
      })
      .catch((er) => console.error(er));
  };
  return (
    <div className="w-4/5 mx-auto my-20">
      <form onSubmit={handlePlaceOrder}>
        <h2 className="text-4xl py-10">Add your New Service: {}</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <input
            name="Title"
            type="text"
            placeholder="Title"
            className="input input-ghost w-full  input-bordered"
          />
          <input
            name="ImageURL"
            type="text"
            placeholder="Image URL"
            className="input input-ghost w-full  input-bordered"
          />
          <input
            name="price"
            type="text"
            placeholder="Price"
            className="input input-ghost w-full  input-bordered"
            required
          />
        </div>
        <textarea
          name="Details"
          className="textarea textarea-bordered h-24 w-full my-5"
          placeholder="Details"
          required
        ></textarea>

        <input
          className="btn btn-outline btn-secondary"
          type="submit"
          value="Place Your Service"
        />
      </form>
    </div>
  );
};

export default Newservices;
