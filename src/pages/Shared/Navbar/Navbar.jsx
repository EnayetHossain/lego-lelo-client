import React, { useContext, useState } from "react";
import { FaBars, FaMixer } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import "./Navbar.css";

const Navbar = () => {
  // check if the user click on the ham bar or not
  const [open, setOpen] = useState(false);
  // get the user info from context
  const { user, LogOutUser } = useContext(AuthContext);
  // get the location where user is trying to go
  const location = useLocation();
  // get the pathname where user was trying to go
  const { pathname } = location;
  // split the path name to show the active route the user currently in
  const splitLocation = pathname.split("/");

  const handleLogout = (event) => {
    event.preventDefault();
    LogOutUser()
      .then()
      .catch((error) => console.log(error.message));
  };

  return (
    <div className="desktop-max">
      <nav className="navigation">
        <h1 className="logo">LEGOLELO</h1>

        <ul className="main-menu">
          <li className="menu-item">
            <Link className={splitLocation[1] === "" ? "active" : ""} to="/">
              Home
            </Link>
          </li>
          <li className="menu-item">
            <Link
              className={splitLocation[1] === "all-toys" ? "active" : ""}
              to={"/all-toys"}
            >
              All Toys
            </Link>
          </li>
          {user && (
            <>
              <li className="menu-item">
                <Link
                  className={splitLocation[1] === "my-toys" ? "active" : ""}
                  to={"/my-toys"}
                >
                  My Toys
                </Link>
              </li>
              <li className="menu-item">
                <Link
                  className={splitLocation[1] === "add-toy" ? "active" : ""}
                  to={"/add-toy"}
                >
                  Add a Toy
                </Link>
              </li>
            </>
          )}
          <li className="menu-item">
            <Link
              className={splitLocation[1] === "blog" ? "active" : ""}
              to={"/blog"}
            >
              Blog
            </Link>
          </li>
        </ul>

        <div className="log-menu">
          {user && (
            <div className="profile-pic">
              <img
                src={user.photoURL ? user.photoURL : ""}
                title={user.displayName ? user.displayName : ""}
                alt={user.displayName ? user.displayName : "profile pic"}
              />
            </div>
          )}

          {user ? (
            <div className="login">
              <button onClick={LogOutUser} className="btn">
                Log out
              </button>
            </div>
          ) : (
            <div className="login">
              <Link
                className={splitLocation[1] === "login" ? "active" : ""}
                to="/login"
              >
                Login
              </Link>
              <Link
                className={splitLocation[1] === "sign-up" ? "active" : ""}
                to="/sign-up"
              >
                Sign-up
              </Link>
            </div>
          )}
        </div>

        <div className={`mobile-menu ${open ? "height-100" : "height-0"}`}>
          <ul className="mobile-main-menu">
            <li className="mobile-menu-item">
              <Link className={splitLocation[1] === "" ? "active" : ""} to="/">
                Home
              </Link>
            </li>
            <li className="mobile-menu-item">
              <Link
                className={splitLocation[1] === "all-toys" ? "active" : ""}
                to={"/all-toys"}
              >
                All Toys
              </Link>
            </li>
            {user && (
              <>
                <li className="mobile-menu-item">
                  <Link
                    className={splitLocation[1] === "my-toys" ? "active" : ""}
                    to={"my-toys"}
                  >
                    My Toys
                  </Link>
                </li>
                <li className="mobile-menu-item">
                  <Link
                    className={splitLocation[1] === "add-toy" ? "active" : ""}
                    to={"/add-toy"}
                  >
                    Add a Toy
                  </Link>
                </li>
              </>
            )}
            <li className="mobile-menu-item">
              <Link
                className={splitLocation[1] === "blog" ? "active" : ""}
                to={"/blog"}
              >
                Blog
              </Link>
            </li>
          </ul>

          <div className="mobile-log-menu">
            {user && (
              <div className="profile-pic">
                <img
                  src={user.photoURL ? user.photoURL : ""}
                  title={user.displayName ? user.displayName : ""}
                  alt={user.displayName ? user.displayName : "profile pic"}
                />
              </div>
            )}

            {user ? (
              <button onClick={LogOutUser} className="btn">
                Log out
              </button>
            ) : (
              <div className="mobile-login">
                <Link
                  className={splitLocation[1] === "login" ? "active" : ""}
                  to="/login"
                >
                  Login
                </Link>
                <Link
                  className={splitLocation[1] === "sign-up" ? "active" : ""}
                  to="/sign-up"
                >
                  Sign-up
                </Link>
              </div>
            )}
          </div>
        </div>

        <div onClick={() => setOpen(!open)} className="ham-bar">
          {open ? <FaMixer></FaMixer> : <FaBars></FaBars>}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
