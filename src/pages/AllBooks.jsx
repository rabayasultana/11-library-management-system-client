import axios from "axios";
import { useEffect, useState } from "react";
import BookCard from "../components/BookCard";


const AllBooks = () => {


    const [books, setBooks] = useState([])
useEffect(() => {
  const getData = async () => {
    const { data } = await axios('http://localhost:5000/books')
    setBooks(data)
  }
  getData()
}, []);

    // const book = useLoaderData()
    
    // console.log(books)
    return (
        <div>
            <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3">
      {books.map(book => (
        <BookCard key={book._id} book={book}></BookCard>
      ))}
      </div>
        </div>
    );
};

export default AllBooks;