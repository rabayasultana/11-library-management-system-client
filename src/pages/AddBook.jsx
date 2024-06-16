import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../components/AuthProvider";

const AddBook = () => {
  const { user } = useContext(AuthContext) || {};

  // handle submit
  const handleAddBooks = (event) => {
    event.preventDefault();

    const form = event.target;

    const email = user.email;
    const bookName = form.bookName.value;
    const authorName = form.authorName.value;
    const price = parseFloat(form.price.value);
    const category = form.category.value;
    const description = form.description.value;
    const quantity = parseFloat(form.quantity.value);
    const contents = form.contents.value;
    const rating = parseFloat(form.rating.value);
    const photo = form.photo.value;

    const newBook = {
      email,   
      bookName,
      authorName,
      price,
      category,
      description,
      quantity,
      contents,
      rating,
      photo,
    };
    console.table(newBook);


    // send data to the server
    fetch("http://localhost:5000/books", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newBook),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Craft Item Added Successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
        }
      });
  };
  return (
    <div>
      <h2 className="text-5xl text-center font-bold mb-8">Add Books</h2>
      <div className="bg-red-50 p-16 mb-10 w-3/4 mx-auto">
        <form onSubmit={handleAddBooks} className="space-y-2">
          {/* Form email and name row */}
          <div className="md:flex md:gap-4">
            <label className="form-control md:w-1/2">
              <div className="label">
                <span className="label-text">Book Name</span>
              </div>
              <input
                type="text"
                name="bookName"
                placeholder="Book Name"
                className="input input-bordered w-full"
              />
              <div className="label"></div>
            </label>

            <label className="form-control md:w-1/2">
              <div className="label">
                <span className="label-text">Author Name</span>
              </div>
              <input
                type="text"
                name="authorName"
                placeholder="Author Name"
                className="input input-bordered w-full"
              />
              <div className="label"></div>
            </label>
          </div>
          {/* Form Quantity and price row */}
          <div className="md:flex md:gap-4">
            <label className="form-control md:w-1/2">
              <div className="label">
                <span className="label-text">Quantity</span>
              </div>
              <input
                type="text"
                name="quantity"
                placeholder="Quantity"
                className="input input-bordered w-full"
              />
              <div className="label"></div>
            </label>

            <label className="form-control md:w-1/2">
              <div className="label">
                <span className="label-text">Price</span>
              </div>
              <input
                type="text"
                name="price"
                placeholder="price"
                className="input input-bordered w-full"
              />
              <div className="label"></div>
            </label>
          </div>

          {/* category and description*/}
          <div className="md:flex md:gap-4">
            <label className="form-control md:w-1/2">
              <div className="label">
                <span className="label-text">Category</span>
              </div>
              <select
                className="input input-bordered w-full"
                id=""
                name="category"
                placeholder="Select a category"
              >
                <option value="">Select</option>
                <option value="Computers and Tech">Computers and Tech</option>
                <option value="Sci-Fi and Fantasy">Sci-Fi and Fantasy</option>
                <option value="Travel and Adventure">
                  Travel and Adventure
                </option>
                <option value="Horror and Mystery">Horror and Mystery</option>
              </select>
              <div className="label"></div>
            </label>

            <label className="form-control md:w-1/2">
              <div className="label">
                <span className="label-text">Description</span>
              </div>
              <input
                type="text"
                name="description"
                placeholder="write short description"
                className="input input-bordered w-full"
              />
              <div className="label"></div>
            </label>
          </div>
          {/* Rating and contents/text */}

          <div className="md:flex md:gap-4">
            <label className="form-control md:w-1/2">
              <div className="label">
                <span className="label-text">Rating</span>
              </div>
              <select
                className="input input-bordered w-full"
                id=""
                name="rating"
                placeholder="Give a rating"
              >
                <option value="">Select</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
              <div className="label"></div>
            </label>

            <label className="form-control md:w-1/2">
              <div className="label">
                <span className="label-text">Contents</span>
              </div>
              <input
                type="text"
                name="contents"
                placeholder="write something about the book"
                className="input input-bordered w-full"
              />
              <div className="label"></div>
            </label>
          </div>

          {/* Photo row */}
          <label className="form-control ">
            <div className="label">
              <span className="label-text">Photo URL</span>
            </div>
            <input
              type="text"
              name="photo"
              placeholder="Type here"
              className="input input-bordered w-full"
            />
            <div className="label"></div>
          </label>
          <div className="w-1/2 mx-auto">
            <input
              type="submit"
              value="Add Book"
              className="btn w-full bg-green text-white"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBook;
