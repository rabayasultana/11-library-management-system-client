import Swal from "sweetalert2";
import ReviewBorrowedCard from "../components/ReviewBorrowedCard";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../components/AuthProvider";

const BorrowedBooks = () => {

  const { user } = useContext(AuthContext) || {};

  const email = user.email;

  const [borrowedBook, setBorrowedBook] = useState([]);
  // const [returnedBook, setReturnedBook] = useState([]);
  // const { _id } = returnedBook;
  const [control, setControl] = useState([false]);

  useEffect(() => {
    fetch(`http://localhost:5000/borrowedBooks/${email}`)
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
        fetch(`http://localhost:5000/borrowedBooks/delete/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              console.log(id, name);

          
              // }

              
    //             fetch(`http://localhost:5000/books/${name}/:${id}`)
    //               .then((res) => res.json())
    //               .then((data) => {
    //                 console.log(data)
    //               })
    //               .catch((error) => {
    //                 console.error(error);
    //               });

      
    //               // console.log(returnedBook)
              
    //               returnedBook.updateType = 'quantityIncrease';
    //               console.log(returnedBook);


    //                 // send data to the server
    // fetch(`http://localhost:5000/books/${_id}`, {
    //   method: "PUT",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify(returnedBook),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //   }) 
    //   // }
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
