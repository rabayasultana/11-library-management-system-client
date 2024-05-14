import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/home/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import NotFound from "../pages/NotFound";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <NotFound></NotFound>,
      children: [
        {
          path: '/', 
          element: <Home></Home> 
        },
        {
            path: "/login",
            element: <Login></Login>
        },
        {
            path: "/register",
            element: <Register></Register>
        },
        {
            path: "/addBook",
            element: <PrivateRoute> </PrivateRoute>
        },
        {
            path: "/allBooks",
            element: <PrivateRoute> </PrivateRoute>
        },
        {
            path: "/borrowedBooks",
            element: <PrivateRoute> </PrivateRoute>
        }
      ]
    },
  ]);
  export default router;