
import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../components/AuthProvider";
import { Link } from "react-router-dom";

const Review = () => {
  const { user } = useContext(AuthContext);
  console.log(user);

  

  const handleSubmitReview = (event) => {
    event.preventDefault();

    const form = event.target;

    const name = form.name.value;
    const review = form.review.value;
    const image = user.photoURL;
    const newReview = {
      name,
      review,
      image
    };
    console.log(newReview);

    // send data to the server
    fetch("https://assignment-11-library-server.vercel.app/review", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newReview),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Review Added Successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
        }
      });
  };
  return (
    <div className="bg-yellow-100 my-10 py-10">
      <h1 className="text-5xl font-bold mb-4 text-center pb-8 text-green">
        Book Reader Review
      </h1>
      <div className="hero-content flex flex-col lg:flex-row-reverse gap-6">
        {/* review div */}
        <div className="w-1/2 justify-center items-center  text-center">
        <div className="w-2/3 mx-auto ">
          <p className="text-2xl font-semibold mb-3">To show the review of others and yours click on the button bellow:</p>
          <Link to="/reviewCard">
        <button className="btn bg-green text-white">See the book reviews</button></Link>
        </div>
        

            
        </div>

        <div className="ml-4 card bg-base-100 w-1/2 shadow-2xl">
          <form onSubmit={handleSubmitReview} className="card-body">
            <div className="form-control">
              <label>Name</label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input input-bordered my-2"
                required
              />

              <label>Leave a review:</label>
              <textarea
                name="review"
                className="border mt-2"
                required
                rows="5"
                placeholder="Write your review here..."
              ></textarea>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-green text-white">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Review;
