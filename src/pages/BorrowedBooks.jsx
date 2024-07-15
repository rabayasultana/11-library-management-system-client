
import Swal from "sweetalert2";
import ReviewBorrowedCard from "../components/ReviewBorrowedCard";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../components/AuthProvider";
import { useLoaderData } from "react-router-dom";


const BorrowedBooks = () => {

  const allBook = useLoaderData();

  // const { _id, quantity, name } = allBook;
  console.log(allBook)
  

const { user } = useContext(AuthContext) || {};

const email = user.email;

const [borrowedBook, setBorrowedBook] = useState([]);
const [control, setControl] = useState([false]);

    useEffect(() => {
        fetch(`http://localhost:5000/borrowedBooks/${email}`)
            .then(res => res.json())
            .then(data => setBorrowedBook(data))
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
            confirmButtonText: "Yes, delete it!",
          }).then((result) => {
            if (result.isConfirmed) {
              fetch(`http://localhost:5000/borrowedBooks/delete/${id}`, {
                method: "DELETE",
              })
                .then((res) => res.json())
                .then((data) => {
                  if (data.deletedCount > 0) {

                    console.log(id, name);

                    {allBook.filter(C => C.name  === name).map(book =>  (
                        console.log('matched', book)

                    
                      // <CategoryCard key={category._id} category={category}></CategoryCard>
                    ))}

                    // sweet alert
                    Swal.fire(
                      "Deleted!",
                      "Your borrowed book has been returned.",
                      "success"
                    );
                    setControl(!control);
                  }
                });
            }
          });
    }
    

    return (
        <div className='margin: 50px auto'>
                {
                    borrowedBook.map(book => <ReviewBorrowedCard
                        key={book._id} 
                        book={book} handleReturn={handleReturn}></ReviewBorrowedCard>)
                }
            </div>
    );
};

export default BorrowedBooks;