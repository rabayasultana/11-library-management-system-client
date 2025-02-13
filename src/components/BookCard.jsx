/* eslint-disable react/prop-types */

import Rating from "react-rating";
import { Link } from "react-router-dom"

const BookCard = ({book}) => {

  const currentPath = window.location.pathname;

    const { _id, name, category, author, rating, image } = book || {}
    return (
      <div className='w-full max-w-sm px-4 py-8 mb-10 bg-white rounded-md shadow-md hover:scale-[1.05] transition-all mx-auto'>
        <div className='flex items-center justify-between'>
          <span className='text-xs font-light text-gray-800 '>
            {author}
          </span>
          <span className='px-3 py-1 text-[8px] text-blue-800 uppercase bg-blue-200 rounded-full '>
            {category}
          </span>
        </div>
  
        <div>
          <h1 className='mt-2 text-lg font-semibold text-gray-800 '>
            {name}
          </h1>
  
         <div>
         <img className="w-[200px] h-[250px] mx-auto my-8" src={image} alt="ert" />
         </div>

          <p className='mt-2 text-sm font-bold text-gray-600 pb-4'>
            <Rating
  initialRating={rating}
  readonly
/>
          </p>


          {/* conditions */}

          <div>
          {(currentPath === "/books") && (
            <Link
              to={`/books/${_id}`}
              className="px-5 py-4 mt-4  capitalize  rounded-md lg:w-auto btn btn-outline bg-green text-white"
            >
              Details
            </Link>
          )}


          {/* Show Update button only on update route (assuming '/books/:id/update') */}
          {(currentPath === "/allBooks") && (
            <Link
              to={`/books/${_id}/updateBook`}
              className="px-5 py-4 mt-4  capitalize  rounded-md lg:w-auto btn btn-outline bg-green text-white w-full"
            >
              Update
            </Link>
            )} 
          </div>


        </div>
      </div>
    )
  }
  
  export default BookCard