import { FaStar, FaRegStarHalfStroke, FaRegStar } from "react-icons/fa6";

const Rating = ({ rating }) => {
  return (
    <div className="flex text-yellow-500">
      {[...Array(5)].map((_, i) => {
        return rating >= i + 1 ? (
          <FaStar />
        ) : rating >= i + 0.5 ? (
          <FaRegStarHalfStroke />
        ) : (
          <FaRegStar />
        );
      })}
    </div>
  );
};
export default Rating;
