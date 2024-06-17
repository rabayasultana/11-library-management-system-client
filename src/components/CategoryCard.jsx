/* eslint-disable react/prop-types */

import { Link} from "react-router-dom"

const CategoryCard = ({category}) => {
    const { name, description, image, interesting_fact, popular_books } = category || {}
    return (
      <div className='w-2/3 mx-auto px-8 py-8 bg-white rounded-md shadow-md hover:scale-[1.05] transition-all text-center'>
        <div className=''>
          
          <span className='px-3 py-1 font-bold text-blue-800 uppercase bg-blue-200 rounded-full '>
            {name}
          </span>
        </div>

        {/* description */}
        <p className='mt-2 text-sm text-gray-600 text-xl'>
            {description}
          </p>

        {/* image */}
        <img className="w-[300px] h-[320px] mx-auto p-4" src={image} alt="" />
  

          <div>
          <p className='mt-2 font-bold text-gray-600 '>
          Popular Books:
            <span className="font-semibold">{popular_books}</span> 
          </p>

          {/* interesting facts */}
          <p className='mt-2 font-bold text-gray-600 mb-4'>
          Interesting facts:
            <span className="font-semibold">{interesting_fact}</span> 
          </p>

          <Link to={`/books?category=${encodeURIComponent(name)}`} className='px-5 py-4 mt-4  capitalize  rounded-md lg:w-auto btn btn-outline bg-green text-white w-full'>
          Show Books on {name}
          </Link>
        </div>
      </div>
    )
  }
  
  export default CategoryCard