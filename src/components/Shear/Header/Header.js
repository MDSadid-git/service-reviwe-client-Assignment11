import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../UserContext/UserContext";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((e) => console.error(e));
  };
  return (
    <div className="bg-slate-200">
      <div className="navbar bg-slate-200 w-4/5 mx-auto py-4">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to={"/home"}>Home</Link>
              </li>
              <li tabIndex={0}>
                <Link to={"/blog"}>Blog</Link>
              </li>
              <li>
                <Link>Item 3</Link>
              </li>
            </ul>
          </div>
          <Link to="/" className="text-light font-bold text-decoration-none">
            Sports PG
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0 font-bold">
            <li>
              <Link to={`/home`}>Home</Link>
            </li>
            <li tabIndex={0}>
              <Link to={"/blog"}>Blog</Link>
            </li>
            <li>
              <Link>Item 3</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <nav className="loginArea ">
            {user?.uid ? (
              <button
                onClick={handleLogOut}
                className="mx-2 btn btn-outline btn-sm font-bold"
              >
                Log Out
              </button>
            ) : (
              <>
                <Link to="/login">
                  <button className="mr-2 btn btn-outline btn-sm font-bold">
                    Log in
                  </button>
                </Link>
                <Link to="/register">
                  <button className="btn btn-outline btn-sm font-bold mt-2">
                    Register
                  </button>
                </Link>
              </>
            )}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
