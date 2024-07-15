import "./ReviewBorrowedCard.css";

const ReviewBorrowedCard = ({ book, handleReturn }) => {
  const { _id, image, name, category, returnDate, borrowedDate } = book;

  return (
    <div className="review-item">
      <img className="w-[91px] h-[91px] border rounded-xl" src={image} alt="" />
      <div className="review-details">
        <p className="product-title">{name}</p>
        <p>
          Category: <span className="text-[#FF9900]">{category}</span>
        </p>
        <p>
          Borrowed date: <span className="text-[#FF9900]">{borrowedDate}</span>
        </p>
        <p>
          Return Date: <span className="text-[#FF9900]">{returnDate}</span>
        </p>
      </div>
      <button onClick={() => handleReturn(_id, name)} className="px-5 py-4 mt-4  capitalize  rounded-md lg:w-auto btn btn-outline bg-green text-white">Return</button>
    </div>
  );
};

export default ReviewBorrowedCard;
