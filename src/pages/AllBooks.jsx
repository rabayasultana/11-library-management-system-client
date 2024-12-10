import axios from "axios";
import { useEffect, useState } from "react";
import BookCard from "../components/BookCard";
import { Link } from "react-router-dom";

const AllBooks = () => {
  const [books, setBooks] = useState([]);
  const [view, setView] = useState("card");
  const [filteredBooks, setFilteredBooks] = useState(books);

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get("https://assignment-11-library-server.vercel.app/books");
      setBooks(data);
      setFilteredBooks(data);
    };
    getData();
  }, []);

  const handleViewChange = (event) => {
    setView(event.target.value);
  };

  const handleFilterBooks = () => {
    const availableBooks = books.filter((book) => book.quantity > 0);
    setFilteredBooks(availableBooks);
  };

  const renderBooks = () => {
    switch (view) {
      case "card":
        return (
          <div>
            <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredBooks.map((book) => (
                <BookCard key={book._id} book={book}></BookCard>
              ))}
            </div>
          </div>
        );
      case "table":
        return (
          <div className="w-3/4 mt-10 mb-16 mx-auto bg-red-50">
            <div className="overflow-x-auto">
              <table className="table table-zebra border border-green">
                {/* Head */}
                <thead>
                  <tr>
                    <th></th>
                    <th className="border border-green">Book Name</th>
                    <th className="border border-green">Author Name</th>
                    <th className="border border-green">Category</th>
                    <th className="border border-green">Rating</th>
                    <th className="border border-green">Photo</th>
                    <th className="border border-green">Details</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Row 1 */}
                  {filteredBooks.map((book) => (
                    <tr key={book._id} className="border border-green">
                      <th></th>
                      <td className="border border-green">{book.name}</td>
                      <td className="border border-green">{book.author}</td>
                      <td className="border border-green">{book.category}</td>
                      <td className="border border-green">{book.rating}</td>
                      <td className="border border-green">
                        <img
                          className="w-10 h-10 object-cover mx-auto"
                          src={book.image}
                          alt=""
                        />
                      </td>
                      <td className="border border-green">
                        <Link to={`/books/${book._id}/updateBook`}>
                          <button className=" rounded-md btn text-green mx-auto">
                            Update
                          </button>
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="m-16">
      <div className="text-center justify-center">
        <button
          onClick={handleFilterBooks}
          className="px-5 py-4 my-4  capitalize  rounded-md lg:w-auto btn btn-outline bg-green text-white"
        >
          Available books
        </button>
        <div className="mb-2">
          <span className="label-text text-xl">
            Select based On Card view or Table view
          </span>
        </div>
        {/* Dropdown menu */}
        <div className="dropdown mb-10 border p-2 text-green font-bold text-xl">
          <select value={view} onChange={handleViewChange}>
            <option value="card">Card View</option>
            <option value="table">Table View</option>
          </select>
        </div>

        {/* Render books based on selected view */}
        {renderBooks()}
      </div>
    </div>
  );
};

export default AllBooks;
