import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../UserContext/UserContext";
import { FaGoogle } from "react-icons/fa";
import useTitle from "../../hooks/useTitle";

const googleProvider = new GoogleAuthProvider();

const Register = () => {
  useTitle("Register");
  const { newUserRegister, googleUserRegister } = useContext(AuthContext);
  const handleFrom = (event) => {
    event.preventDefault();
    const from = event.target;
    const email = from.email.value;
    const password = from.password.value;
    newUserRegister(email, password)
      .then((reslue) => {
        const user = reslue.user;
        console.log(user);
      })
      .catch((er) => console.error(er));
    from.reset();
  };
  const UserGoogle = () => {
    googleUserRegister(googleProvider)
      .then((resul) => {
        const user = resul.user;
        // navigate(from2, { replace: true });
        console.log(user);
      })
      .catch((e) => console.error(e));
  };
  return (
    <div className="hero py-20">
      <div className="card  shadow-2xl bg-base-100 w-96 pt-10">
        <h1 className="text-5xl font-bold text-center">Sine Up</h1>
        <form onSubmit={handleFrom} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              name="Name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              placeholder="email"
              name="email"
              className="input input-bordered"
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
              name="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <p className="text-center">
                Already have an account{" "}
                <Link
                  to={`/login`}
                  className="label-text-alt link link-hover text-orange-600 font-bold"
                >
                  Login
                </Link>
              </p>
            </label>
          </div>
          <div className="form-control mt-6">
            <input className="btn btn-primary" type="submit" value="Register" />
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

export default Register;
