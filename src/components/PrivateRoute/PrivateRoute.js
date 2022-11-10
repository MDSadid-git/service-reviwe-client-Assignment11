import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../UserContext/UserContext";

const PrivateRoute = ({ children }) => {
  const { user, loadin } = useContext(AuthContext);
  const location = useLocation();

  if (loadin) {
    return (
      <div className="flex justify-center my-10">
        <progress className="progress w-56"></progress>;
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  }
  return children;
};

export default PrivateRoute;
