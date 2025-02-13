import Swal from "sweetalert2";
import ReviewBorrowedCard from "../components/ReviewBorrowedCard";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../components/AuthProvider";

const BorrowedBooks = () => {
  const { user } = useContext(AuthContext) || {};

  const email = user.email;

  const [borrowedBook, setBorrowedBook] = useState([]);
  const [control, setControl] = useState([false]);

  useEffect(() => {
    fetch(`https://assignment-11-library-server.vercel.app/borrowedBooks/${email}`)
      .then((res) => res.json())
      .then((data) => setBorrowedBook(data))
      .catch((error) => {
        console.error(error);
      });
  }, [control, email]);

  // Remove
  const handleReturn = (id, name) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, return it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://assignment-11-library-server.vercel.app/borrowedBooks/delete/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              console.log(id, name);

              // update data to the server
              fetch(`https://assignment-11-library-server.vercel.app/books?search=${name}`, {
                method: "PUT",
                headers: {
                  "content-type": "application/json",
                },
                body: JSON.stringify(),
              })
                .then((res) => res.json())
                .then((data) => {
                  console.log(data);
                });
              // }
              // sweet alert
              Swal.fire(
                "Returned!",
                "Your borrowed book has been returned.",
                "success"
              );
              setControl(!control);
            }
          });
      }
    });
  };

  return (
    <div className="margin: 50px auto">
      {borrowedBook.map((book) => (
        <ReviewBorrowedCard
          key={book._id}
          book={book}
          handleReturn={handleReturn}
        ></ReviewBorrowedCard>
      ))}
    </div>
  );
};

export default BorrowedBooks;
