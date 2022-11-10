import React from "react";
import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../UserContext/UserContext";
import { FaGoogle } from "react-icons/fa";
import { GoogleAuthProvider } from "firebase/auth";
import useTitle from "../../hooks/useTitle";

const googleProvider = new GoogleAuthProvider();

const Login = () => {
  useTitle("Login");
  const location = useLocation();
  const navigate = useNavigate();
  const from2 = location.state?.from?.pathname || "/";
  const { logInUser, googleUserRegister } = useContext(AuthContext);
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
  const UserGoogle = () => {
    googleUserRegister(googleProvider)
      .then((resul) => {
        const user = resul.user;
        navigate(from2, { replace: true });
        console.log(user);
      })
      .catch((e) => console.error(e));
  };
  return (
    <div className="hero py-20">
      <div className="card  shadow-2xl bg-base-100 w-96 pt-10">
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
                New to Sports{" "}
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
        <div>
          <button
            onClick={UserGoogle}
            className="btn btn-sm w-full btn-outline btn-info"
            title="Sing in With google"
          >
            <FaGoogle />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
