import React, { useContext } from "react";
import toast from "react-hot-toast";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../UserContext/UserContext";
import useTitle from "../../hooks/useTitle";

const MyReview = () => {
  useTitle("My Reviews");
  const { _id } = useLoaderData();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handlePlaceOrder = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.firstName.value;
    const email = user?.email || "unregistered";
    const message = form.message.value;

    const order = {
      service: _id,
      customer: name,
      email,
      message,
    };

    fetch("https://service-review-server-weld.vercel.app/addreviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast.success("Review placed successfully");
          navigate("/");
          form.reset();
        }
      })
      .catch((er) => console.error(er));
  };

  return (
    <div className="w-4/5 mx-auto py-24 my-20">
      <form onSubmit={handlePlaceOrder}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <input
            name="firstName"
            type="text"
            placeholder="Name"
            className="input input-ghost w-full  input-bordered"
          />

          <input
            name="email"
            type="text"
            placeholder="Your email"
            defaultValue={user?.email}
            className="input input-ghost w-full  input-bordered"
            readOnly
          />
        </div>
        <textarea
          name="message"
          className="textarea textarea-bordered h-24 w-full mt-4"
          placeholder="Your Comment"
          required
        ></textarea>
        <input
          className="btn btn-outline btn-secondary my-10"
          type="submit"
          value="Place Add Reviews"
        />
      </form>
    </div>
  );
};

export default MyReview;
