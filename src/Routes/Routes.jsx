import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import AddToy from "../pages/AddToy/AddToy";
import AllToys from "../pages/AllToys/AllToys";
import Blog from "../pages/Blog/Blog";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import MyToys from "../pages/MyToys/MyToys";
import Notfound from "../pages/NotFound/Notfound";
import SignUp from "../pages/SignUp/SignUp";
import ToyDetails from "../pages/ToyDetails/ToyDetails";
import UpdateToy from "../pages/UpdateToy/UpdateToy";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Notfound></Notfound>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },

      {
        path: "/login",
        element: <Login></Login>,
      },

      {
        path: "/sign-up",
        element: <SignUp></SignUp>,
      },

      {
        path: "/all-toys",
        element: <AllToys></AllToys>,
      },

      {
        path: "/my-toys",
        element: (
          <PrivateRoute>
            <MyToys></MyToys>
          </PrivateRoute>
        ),
      },

      {
        path: "/add-toy",
        element: (
          <PrivateRoute>
            <AddToy></AddToy>
          </PrivateRoute>
        ),
      },

      {
        path: "/toy-details/:id",
        element: (
          <PrivateRoute>
            <ToyDetails></ToyDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://lego-lelo-server.vercel.app/toy-details/${params.id}`),
      },

      {
        path: "/toy-update/:id",
        element: (
          <PrivateRoute>
            <UpdateToy></UpdateToy>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://lego-lelo-server.vercel.app/toy-details/${params.id}`),
      },

      {
        path: "/blog",
        element: <Blog></Blog>,
      },
    ],
  },
]);

export default router;
