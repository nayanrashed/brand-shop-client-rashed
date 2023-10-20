import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import avatar from "../../../assets/avatar.png";
import logo from "../../../assets/logo.png";

const Navbar = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleMode = () => {
    setTheme(theme==="dark"?"light":"dark")
  };

  const { user, logOut } = useContext(AuthContext);
  // console.log(user);
  const handleSignOut = () => {
    logOut().then().catch();
  };

  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/addproduct">Add Product</NavLink>
      </li>
      <li>
        <NavLink to="/mycart">My cart</NavLink>
      </li>
      <li>
        <NavLink to="/login">Login</NavLink>
      </li>
      <li>
        <NavLink to="/register">Register</NavLink>
      </li>
    </>
  );
  return (
    <div className="shadow-lg shadow-lime-200">
      {/* top nav bar */}
      <div className="bg-gray-300 flex justify-between items-center dark:bg-zinc-800">
        <div className="form-control">
          <label className="label cursor-pointer">
            {
              theme==="dark"?<span className="label-text px-2 dark:text-white">Dark Mode</span>:<span className="label-text px-2">Light Mode</span>
            }
            {/* <span className="label-text px-2">Dark Mode</span> */}
            <input onClick={handleMode} type="checkbox" className="toggle" />
          </label>
        </div>
        <div className="px-2 flex items-center gap-2 dark:text-white">
          <NavLink to="/myaccount">My Account</NavLink>
          {user && (
            <p className="hidden md:inline md:text-lg border-x-2 px-1">
              {user?.email}
            </p>
          )}
          {user?.photoURL ? (
            <img
              className="rounded-full md:w-8 w-6"
              src={user?.photoURL}
              alt=""
            />
          ) : (
            user && (
              <img className="rounded-full w-6 md:w-8" src={avatar} alt="" />
            )
          )}
          {user ? (
            <button onClick={handleSignOut} className="btn btn-sm">
              Sign Out
            </button>
          ) : (
            <Link to="/login">
              <button className="btn btn-sm">Login</button>
            </Link>
          )}
        </div>
      </div>
      {/* bottom nav bar */}
      <div className="navbar bg-base-100">
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <Link>
            <img className="w-16 h-10 md:w-24 md:h-14" src={logo} alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
