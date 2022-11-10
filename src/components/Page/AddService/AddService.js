import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
import ServicesCart from "../Services/ServicesCart";

const AddService = () => {
  useTitle("Add Service");
  const [Services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/servicespage")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="w-4/5 mx-auto">
      <div className="flex justify-center m-10">
        <Link to={`/newservices`}>
          {" "}
          <button className="btn btn-secondary mx-2">Add Servce</button>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
        {Services.map((ser) => (
          <ServicesCart key={ser._id} ser={ser}></ServicesCart>
        ))}
      </div>
    </div>
  );
};

export default AddService;
