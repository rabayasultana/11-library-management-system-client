import axios from "axios";
import { useEffect, useState } from "react";
import BookCard from "../components/BookCard";
import { Link } from "react-router-dom";


const AllBooks = () => {


    const [books, setBooks] = useState([])
useEffect(() => {
  const getData = async () => {
    const { data } = await axios('http://localhost:5000/books')
    setBooks(data)
  }
  getData()
}, []);


    return (
        <div>
      <div>
      <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3">
      {books.map(book => (
        <BookCard key={book._id} book={book}></BookCard>
      ))}
      </div>
      </div>



      {/* Table */}
      <div>
         <div className="w-3/4 mt-10 mb-16 mx-auto bg-red-50">
         <div className="overflow-x-auto">
  <table className="table table-zebra border border-green">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th className="border border-green">Book Name</th>
        <th className="border border-green">Author Name</th>
        <th className="border border-green">Category</th>
        <th className="border border-green">Rating</th>
        <th className="border border-green">Photo</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
               books.map(book => <>
                      <tr key={book._id} className="border border-green">
        <th ></th>
        <td className="border border-green">{book.name}</td>
        <td className="border border-green">{book.author}</td>
        <td className="border border-green">{book.category}</td>
        <td className="border border-green">{book.rating}</td>
        <td className="border border-green"><img className="w-10 h-10 object-cover mx-auto"  src={book.image} alt="" /></td>
        <td className="border border-green"><Link to={`/books/${book._id}`}><button className="btn btn-ghost btn-xs">details</button></Link></td>
      </tr>
     
                </>)
            }
    </tbody>
  </table>
</div>
         </div>
        </div>
        </div>
    );
};

export default AllBooks;