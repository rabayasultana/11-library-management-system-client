import { useLoaderData } from "react-router-dom";
import BookCard from "../components/BookCard";

const Books = () => {

    const book = useLoaderData()
    console.log(book)
    return (
        <div>
            <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3">
      {book.filter(j => j.category  === 'Computers and Tech').map(book => (
        <BookCard key={book._id} book={book}></BookCard>
      ))}
      </div>
        </div>
    );
};

export default Books;