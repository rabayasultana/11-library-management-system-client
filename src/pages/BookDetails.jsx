import { useContext, useState } from "react";
import {  useLoaderData } from "react-router-dom";
import { AuthContext } from "../components/AuthProvider";
// import axios from "axios";
import Swal from "sweetalert2";

const BookDetails = () => {

    const {user} = useContext(AuthContext);

    const [products, setProducts] = useState([]);

    const book = useLoaderData();

    const [borrowedBooks, setBorrowedBooks] = useState(book);
  const { _id, quantity } = book;
    console.log(book)

    // modal
    const openModal1 = () => {
        document.getElementById('my_modal_1').showModal();
      }
    const closeModal1 = () => {
        document.getElementById('my_modal_1').close();
      }


// For confirming borrow and reducing quantity
// const [quantity, setQuantity] = useState(book.quantity || 0); // Initialize with book quantity or 0
// const navigate = useNavigate();



const handleUpdateBorrow = (event) => {

    // EFHUIHF
    
    event.preventDefault();
    const form = event.target;

    const date = form.date.value;
    const quantity = parseFloat(quantity);
    console.log(date, quantity)

    // if (quantity > 0) {
    // //    const quantity = previousQuantity -1;
    // const borrowedBook = { date, quantity: quantity - 1 };
    //    console.log(borrowedBook);


    //        // send data to the server
    // fetch(`http://localhost:5000/book/${_id}`, {
    //   method: "PUT",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify(borrowedBook),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     // console.log(data);
    //     if (data.modifiedCount > 0) {
    //       Swal.fire({
    //         title: "Success!",
    //         text: "Book details updated Successfully",
    //         icon: "success",
    //         confirmButtonText: "Ok",
    //       });
    //     }
    //   });
    // }




    }




    return (
        <div>
            <div className="max-w-2xl mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800 md:flex items-center">
    <img className="w-[350px] h-[400px] mx-auto p-2" src={book.image} alt="Article"/>

    <div className="p-6 ">
        <div>
            <span className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">{book.category}</span>
            <a href="#" className="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline" tabIndex="0" role="link">{book.name}</a>
            <p className="my-2 font-semibold text-gray-700 dark:text-gray-200" tabIndex="0" role="link">Author: {book.author}</p>
            <p className="mt-2 text-gray-600 dark:text-gray-400">{book.description}</p>
            <p className="mt-2 text-gray-600 dark:text-gray-400">Price: ${book.price}</p>
            <p className="mt-2 text-gray-600 dark:text-gray-400">Contents: {book.contents}</p>
        </div>

        <div className="my-4">
            <div className="flex items-center my-4 gap-8">
                <p className="text-gray-600 dark:text-gray-400">Quantity: {quantity}</p>
                <p className=" text-gray-600 dark:text-gray-300">Ratings: {book.rating}</p>
            </div>

{/* Borrow button for modal */}
<div>
  {/* Open the modal using JavaScript function */}
  <button className="px-5 py-4 mt-4  capitalize  rounded-md w-full btn btn-outline bg-green text-white" onClick={openModal1} >Borrow</button>
               {/* disabled={quantity === 0}>Borrow</button> */}

  <dialog id="my_modal_1" className="modal">
    <div className="modal-box">
    <div className="hero bg-base-200">
  <div className="hero-content">
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form method="dialog" className="card-body" onSubmit={handleUpdateBorrow}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" defaultValue={user?.email} disabled className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="name" defaultValue={user?.displayName} disabled className="input input-bordered" />
        </div>
        {/* return date */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Return date</span>
          </label>
          <input type="date" name="date" placeholder="date" className="input input-bordered" />
        </div>
        <div className="form-control mt-6">
          <input type="submit" value="confirm" placeholder="Confirm" className="px-5 py-4 mt-4  capitalize  rounded-md w-full btn btn-outline bg-green text-white" />

          <button onClick={closeModal1} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
        </div>
      </form>
    </div>
  </div>
</div>
    </div>
  </dialog>
</div>

        </div>
    </div>
</div>
        </div>
    );
};

export default BookDetails;