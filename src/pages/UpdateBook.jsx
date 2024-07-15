import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateBook = () => {
  const book = useLoaderData();
  const { _id, name, category, author, rating, image } = book;

  const handleUpdateBook = (event) => {
    event.preventDefault();
    const form = event.target;

    const bookName = form.bookName.value;
    const authorName = form.authorName.value;
    const category = form.category.value;
    const rating = form.rating.value;
    const photo = form.photo.value;

    const updatedBook = { bookName, authorName, category, rating, photo };
    updatedBook.updateType = 'update';
    // console.log(UpdatedBook);

    // send data to the server
    fetch(`http://localhost:5000/books/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedBook),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Book details updated Successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
        }
      });
  };
  return (
    <div>
      <h2 className="text-5xl text-center font-bold mb-8">
        Update book details: {name}
      </h2>
      <div className="bg-red-50 p-16 mb-10 w-3/4 mx-auto">
        <form onSubmit={handleUpdateBook} className="space-y-2">
          {/* book name */}
          <label className="form-control md:w-1/2">
            <div className="label">
              <span className="label-text">Book Name</span>
            </div>
            <input
              type="text"
              name="bookName"
              placeholder="Book Name"
              defaultValue={name}
              className="input input-bordered w-full"
            />
            <div className="label"></div>
          </label>

          {/* author name */}
          <label className="form-control md:w-1/2">
            <div className="label">
              <span className="label-text">Author Name</span>
            </div>
            <input
              type="text"
              name="authorName"
              placeholder="Author Name"
              defaultValue={author}
              className="input input-bordered w-full"
            />
            <div className="label"></div>
          </label>

          {/* category*/}
          <label className="form-control md:w-1/2">
            <div className="label">
              <span className="label-text">Category</span>
            </div>
            <select
              className="input input-bordered w-full"
              id=""
              name="category"
              placeholder="Select a category"
              defaultValue={category}
            >
              <option value="">Select a category</option>
              <option value="Computers and Tech">Computers and Tech</option>
              <option value="Sci-Fi and Fantasy">Sci-Fi and Fantasy</option>
              <option value="Travel and Adventure">Travel and Adventure</option>
              <option value="Horror and Mystery">Horror and Mystery</option>
            </select>
            <div className="label"></div>
          </label>

          {/*rating row */}
          <label className="form-control md:w-1/2">
            <div className="label">
              <span className="label-text">Rating</span>
            </div>
            <select
              className="input input-bordered w-full"
              id=""
              name="rating"
              placeholder="Give a rating"
              defaultValue={rating}
            >
              <option value="">Select a rating</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            <div className="label"></div>
          </label>

          {/* Photo row */}
          <div className="">
            <label className="form-control ">
              <div className="label">
                <span className="label-text">Photo URL</span>
              </div>
              <input
                type="text"
                name="photo"
                placeholder="Type here"
                defaultValue={image}
                className="input input-bordered w-full"
              />
              <div className="label"></div>
            </label>
          </div>

          {/* submit button */}
          <div className="w-1/2 mx-auto">
            {" "}
            <input
              type="submit"
              value="Submit"
              className="btn w-full bg-green text-white"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateBook;
