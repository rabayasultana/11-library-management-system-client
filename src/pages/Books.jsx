import BookCard from "../components/BookCard";
import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

const Books = () => {


    const [books, setBooks] = useState([])
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const selectedCategory = searchParams.get("category"); 

useEffect(() => {
  const getData = async () => {
    const { data } = await axios('http://localhost:5000/books')
    setBooks(data)
  }
  getData()
}, []);

const filteredBooks = selectedCategory
? books.filter(book => book.category === selectedCategory)
: books;

    
    return (
        <div>
            <div className="grid grid-cols-1 gap-8 mt-8  md:grid-cols-2 lg:grid-cols-3">
      {filteredBooks.map(book => (
        <BookCard key={book._id} book={book}></BookCard>
      ))}
      </div>
        </div>
    );
};

export default Books;