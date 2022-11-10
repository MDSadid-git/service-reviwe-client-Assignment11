import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../../UserContext/UserContext";
import useTitle from "../../hooks/useTitle";

const Edit = () => {
  useTitle("Edit");
  const [edits, setEdit] = useState({});
  const navigate = useNavigate();
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  useEffect(() => {
    fetch(`http://localhost:5000/addreviews/${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setEdit(data);
        } else {
          console.error(data.message);
        }
      })
      .catch((err) => console.error(err.message));
  }, [id]);
  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.firstName.value;
    const email = user?.email || "unregistered";
    const message = form.message.value;

    const Reviews = {
      service: id,
      customer: name,
      email,
      message,
    };
    console.log(Reviews);
    fetch(`http://localhost:5000/addreviews/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(Reviews),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          toast.success("Edite success");
          navigate("/");
        } else {
          console.log(data.error);
        }
      })
      .catch((err) => console.error(err.message));
  };
  console.log(edits);
  return (
    <div className="w-4/5 mx-auto py-24 my-20">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <input
            name="firstName"
            type="text"
            placeholder="Name"
            defaultValue={edits?.customer}
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
          defaultValue={edits?.message}
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

export default Edit;
