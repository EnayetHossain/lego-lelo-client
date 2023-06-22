import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import DynamicTitle from "../../Routes/DynamicTitle";
import "./SignUp.css";

const SignUp = () => {
  DynamicTitle("Sign up");
  // set error to a state
  const [error, setError] = useState("");
  // get the create user function
  const { createUser, updateUser } = useContext(AuthContext);
  // navigate user to the route
  const navigate = useNavigate();
  // get the location user try to go
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleSignUp = (event) => {
    event.preventDefault();

    // get all the info from the form
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    // create the user
    createUser(email, password)
      .then((result) => {
        // update users profile
        console.log(result.user);
        updateUser(name, photo)
          .then(() => {
            setError("");
            form.reset();
            navigate(from);
          })
          .catch((error) => {
            console.log(error.message);
            setError(error.message);
          });
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
      });
  };

  return (
    <div className="login-page">
      <div className="desktop-max login-wid">
        <h1 className="log-title">Sign Up</h1>

        <form onSubmit={handleSignUp} className="login-form">
          <div className="login-input">
            <label htmlFor="name">Name</label>
            <br />
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              required
            />
          </div>

          <div className="login-input">
            <label htmlFor="photo">Photo</label>
            <br />
            <input
              type="text"
              id="photo"
              name="photo"
              placeholder="Photo URL"
              required
            />
          </div>

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
            <input type="submit" value={"Sign Up"} name="register" />
          </div>

          <div>
            <p>
              Already have an account?{" "}
              <Link className="redirect" to={"/login"}>
                Login
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

export default SignUp;
