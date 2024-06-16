import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/home/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import NotFound from "../pages/NotFound";
import PrivateRoute from "./PrivateRoute";
import Books from "../pages/Books";
import BookDetails from "../pages/BookDetails";
import AddBook from "../pages/AddBook";
import AllBooks from "../pages/AllBooks";
import UpdateBook from "../pages/UpdateBook";
const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <NotFound></NotFound>,
      children: [
        {
          path: '/', 
          element: <Home></Home>,
          // loader: () => fetch('http://localhost:5000/categories')
          // loader: () => fetch(`${import.meta.env.VITE_API_URL}/books`)
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
            element: <AddBook></AddBook>
        },
        {
            path: "/allBooks",
            element: <AllBooks></AllBooks>
        },
        {
            path: "/borrowedBooks",
            element: <PrivateRoute> </PrivateRoute>
        },
        {
          path: "/books",
          element: <Books></Books>,
          // loader: () => fetch('http://localhost:5000/books')
      },
      {
        path: "/books/:id",
        element: <BookDetails></BookDetails>,
         loader: ({params}) => fetch(`http://localhost:5000/books/${params.id}`)
    },
    {
      path: "/books/:id/update",
      element: <UpdateBook></UpdateBook>,
       loader: ({params}) => fetch(`http://localhost:5000/books/${params.id}/update`)
  }
      ]
    },
  ]);
  export default router;