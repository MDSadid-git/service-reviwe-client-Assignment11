import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../UserContext/UserContext";

const Login = () => {
  const { logInUser } = useContext(AuthContext);
  const handleFrom = (event) => {
    event.preventDefault();
    const from = event.target;
    const email = from.email.value;
    const password = from.password.value;
    logInUser(email, password)
      .then((res) => {
        const user = res.user;
        console.log(user);
      })
      .then((err) => console.error(err));
  };
  return (
    <div className="hero py-20">
      <div className="hero-content gap-20 flex-col lg:flex-row">
        <div className="text-center lg:text-left w-1/2 ">
          <img src="" alt="" />
        </div>
        <div className="card flex-shrink-0  max-w-sm shadow-2xl bg-base-100 w-1/2">
          <h1 className="text-5xl font-bold text-center">Login now!</h1>
          <form onSubmit={handleFrom} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                className="input input-bordered"
                name="email"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="password"
                className="input input-bordered"
                name="password"
                required
              />
              <label className="label">
                <p className="text-center">
                  New to Genius Car{" "}
                  <Link
                    to={`/register`}
                    className="label-text-alt link link-hover text-orange-600 font-bold"
                  >
                    Sing up
                  </Link>
                </p>
              </label>
            </div>
            <div className="form-control mt-6">
              <input className="btn btn-primary" type="submit" value="Login" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
