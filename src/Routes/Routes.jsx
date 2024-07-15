import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/home/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoute from "./PrivateRoute";
import Books from "../pages/Books";
import BookDetails from "../pages/BookDetails";
import AddBook from "../pages/AddBook";
import AllBooks from "../pages/AllBooks";
import UpdateBook from "../pages/UpdateBook";
import ErrorPage from "../pages/ErrorPage";
import BorrowedBooks from "../pages/BorrowedBooks";
import ReviewCard from "../pages/home/ReviewCard";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        // loader: () => fetch('http://localhost:5000/categories')
        // loader: () => fetch(`${import.meta.env.VITE_API_URL}/books`)
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/addBook",
        element: (
          <PrivateRoute>
            <AddBook></AddBook>
          </PrivateRoute>
        ),
      },
      {
        path: "/allBooks",
        element: <AllBooks></AllBooks>,
      },
      {
        path: "/borrowedBooks",
        element: (
          <PrivateRoute>
            <BorrowedBooks></BorrowedBooks>
          </PrivateRoute>
        ),
          loader: () => fetch('http://localhost:5000/books')
        //  loader: ({params}) => fetch(`http://localhost:5000/borrowedBooks/${params.email}`)
      },
      {
        path: "/books",
        element: <Books></Books>,
        // loader: () => fetch('http://localhost:5000/books')
      },
      {
        path: "/books/:id",
        element: 
          <PrivateRoute>
            <BookDetails></BookDetails>
          </PrivateRoute>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/books/${params.id}`),
      },
      {
        path: "/books/:id/updateBook",
        element:
          <PrivateRoute>
            <UpdateBook></UpdateBook>
          </PrivateRoute>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/books/${params.id}`),
      },
      {
        path: "/reviewCard",
        element: <ReviewCard></ReviewCard>
        
      },
    ],
  },
]);
export default router;
