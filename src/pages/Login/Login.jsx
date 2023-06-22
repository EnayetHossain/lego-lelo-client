import React, { useContext, useState } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import DynamicTitle from "../../Routes/DynamicTitle";
import "./Login.css";

const Login = () => {
  DynamicTitle("Login");
  // set the error in state
  const [error, setError] = useState("");
  // get the the login function
  const { LogIn, logInGoogle, logInGithub } = useContext(AuthContext);
  // get the location user try to go
  const location = useLocation();
  // get the path name
  const from = location.state?.from?.pathname || "/";
  // navigate user to the correct route
  const navigate = useNavigate();

  // login in with email and password
  const handleLogin = (event) => {
    event.preventDefault();

    // get all the info from the form
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    // login the user
    LogIn(email, password)
      .then((result) => {
        setError("");
        form.reset();
        navigate(from);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  // login with google
  const handleGoogleLogin = (event) => {
    event.preventDefault();
    logInGoogle()
      .then((result) => {
        setError("");
        navigate(from);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  // login with github
  const handleGithubLogin = (event) => {
    event.preventDefault();
    logInGithub()
      .then((result) => {
        setError("");
        navigate(from);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div className="login-page">
      <div className="desktop-max login-wid">
        <h1 className="log-title">Login</h1>

        <form onSubmit={handleLogin} className="login-form">
          <div className="login-input">
            <label htmlFor="email">Email</label>
            <br />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="example@gmail.com"
              required
            />
          </div>

          <div className="login-input">
            <label htmlFor="password">Password</label>
            <br />
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              required
            />
          </div>

          <div className="login-input">
            <input type="submit" value={"Login"} name="register" />
          </div>

          <div className="login-input">
            <button onClick={handleGoogleLogin} className="login-btn">
              <FaGoogle></FaGoogle> Login with google
            </button>
          </div>

          <div className="login-input">
            <button onClick={handleGithubLogin} className="login-btn">
              <FaGithub></FaGithub> Login with github
            </button>
          </div>

          <div>
            <p>
              Do not have an account?{" "}
              <Link className="redirect" to={"/sign-up"}>
                Sign up
              </Link>
            </p>
          </div>

          <div>
            <p className="error">{error}</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
