import axios from "axios";
import { useEffect, useState } from "react";


const ReviewCard = () => {
    const [reviews, setReviews] = useState([]);
  useEffect(() => {
    const getReview = async () => {
      const { data } = await axios("https://assignment-11-library-server.vercel.app/review");
      setReviews(data);
    };
    getReview();
  }, []);

    return (
        <div>
            <div className="p-10 grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* review map */}
          {reviews.map((review) => (
            <div key={review._id} className="container mx-auto ">
              {/* card */}
              <div className=" bg-yellow-200 h-[200px] p-6 border border-transparent rounded-lg dark:bg-blue-600">
                <p className="leading-loose text-green">“{review.review} ”</p>

                <div className="flex items-center mt-8 -mx-2">
                    <img className="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-blue-200" src={review.image} alt="" />
                <div className="mx-2">
                  <h1 className="font-semibold">{review.name}</h1>
                </div>
                </div>
              </div>
            </div>
          ))}
          

        </div>
            
        </div>
    );
};

export default ReviewCard;