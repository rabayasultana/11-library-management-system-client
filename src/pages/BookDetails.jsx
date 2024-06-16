import { useContext, useState } from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../components/AuthProvider";
import axios from "axios";

const BookDetails = () => {

    const {user} = useContext(AuthContext);

    const book = useLoaderData();
    console.log(book)

    // modal
    const openModal1 = () => {
        document.getElementById('my_modal_1').showModal();
      }

// Form
// const handleFormSubmit = (e) => {
//     e.preventDefault();
//     const form = new FormData(e.currentTarget);
  
//       const date = form.get('date');
//       const quantity1 = quantity;
//     console.log(quantity1)
// }


// For confirming borrow and reducing quantity
const [quantity, setQuantity] = useState(book.quantity || 0); // Initialize with book quantity or 0
// const navigate = useNavigate();

// const handleBorrow = () => {
//   if (quantity > 0) {
//     setQuantity(quantity - 1); // Reduce quantity if available
//     // Add logic to update borrowed books in your database (not shown here)
//     alert("Borrowed successfully! You can now check out the book."); // Or show success message

//     // Potentially navigate to a borrowed books page or display confirmation
//     // navigate('/borrowed-books');
//   } else {
//     alert("Sorry, this book is currently unavailable.");
//   }
// };



const handleBorrow = async () => {
    if (quantity > 0) {
      try {
        const response = await axios((`http://localhost:5000/books/${books._id}`), { quantity: quantity - 1 }); // Update quantity in database

        if (response.data.success) {
          setQuantity(quantity - 1); // Update local state
          alert("Borrowed successfully! You can now check out the book."); // Or show success message

          // Potentially navigate to a borrowed books page or display confirmation
          // navigate('/borrowed-books');
        } else {
          alert("An error occurred. Please try again later.");
        }
      } catch (error) {
        console.error("Error updating book quantity:", error);
        alert("An error occurred. Please try again later.");
      }
    } else {
      alert("Sorry, this book is currently unavailable.");
    }
  };


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
                <p className="text-gray-600 dark:text-gray-400">Quantity: {book.quantity}</p>
                <p className=" text-gray-600 dark:text-gray-300">Ratings: {book.rating}</p>
            </div>

{/* Borrow button for modal */}
<div>
  {/* Open the modal using JavaScript function */}
  <button className="btn bg-green text-white capitalize w-full px-5 py-4 mt-4 transition-colors duration-300 transform rounded-md hover:bg-gray-500 focus:outline-none focus:bg-gray-500" onClick={openModal1}>Borrow</button>

  <dialog id="my_modal_1" className="modal">
    <div className="modal-box">
    <div className="hero bg-base-200">
  <div className="hero-content">
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form method="dialog" className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" defaultValue={user.email} disabled className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="name" defaultValue={user.displayName} disabled className="input input-bordered" />
        </div>
        {/* return date */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Return date</span>
          </label>
          <input type="date" name="date" placeholder="date" className="input input-bordered" />
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-green text-white capitalize w-full px-5 py-4 mt-4 transition-colors duration-300 transform rounded-md hover:bg-gray-500 focus:outline-none focus:bg-gray-500" onClick={handleBorrow}
              disabled={quantity === 0}>Confirm</button>

          <button onClick="document.getElementById('my_modal_1').close()" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
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