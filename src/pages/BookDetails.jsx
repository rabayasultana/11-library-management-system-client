import { Link, useLoaderData } from "react-router-dom";

const BookDetails = () => {

  const openModal1 = () => {
    document.getElementById('my_modal_1').showModal();
  }

    const book = useLoaderData();
    const { name, category, author, rating, image, description, quantity, contents, price } = book || {}
    console.log(book)
    return (
        <div>
            <div className="max-w-2xl mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800 md:flex items-center">
    <img className="w-[350px] h-[400px] mx-auto p-2" src={image} alt="Article"/>

    <div className="p-6 ">
        <div>
            <span className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">{category}</span>
            <a href="#" className="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline" tabIndex="0" role="link">{name}</a>
            <p className="my-2 font-semibold text-gray-700 dark:text-gray-200" tabIndex="0" role="link">Author: {author}</p>
            <p className="mt-2 text-gray-600 dark:text-gray-400">{description}</p>
            <p className="mt-2 text-gray-600 dark:text-gray-400">Price: ${price}</p>
            <p className="mt-2 text-gray-600 dark:text-gray-400">Contents: {contents}</p>
        </div>

        <div className="my-4">
            <div className="flex items-center my-4 gap-8">
                <p className="text-gray-600 dark:text-gray-400">Quantity: {quantity}</p>
                <p className=" text-gray-600 dark:text-gray-300">Ratings: {rating}</p>
            </div>
            <Link  className='w-full px-5 py-4 mt-4 text-sm font-medium text-white capitalize transition-colors duration-300 transform bg-green rounded-md lg:w-auto hover:bg-pink-400 focus:outline-none focus:bg-gray-500'>
          Borrow
          </Link>

{/* hgytdtrdr */}


<div>
  {/* Open the modal using JavaScript function */}
  <button className="btn" onClick={openModal1}>Open Modal</button>

  <dialog id="my_modal_1" className="modal">
    <div className="modal-box">
    <div className="hero bg-base-200">
  <div className="hero-content">
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="name" className="input input-bordered" />
        </div>
        {/* return date */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Return date</span>
          </label>
          <input type="date" placeholder="date" className="input input-bordered" />
        </div>
        <div className="form-control mt-6">
          <button className="btn" onClick="document.getElementById('my_modal_1').close()">Submit and Close</button>
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