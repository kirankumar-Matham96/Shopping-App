import { FaStar, FaRegStarHalfStroke, FaRegStar } from "react-icons/fa6";

const Rating = ({ rating }) => {
  return (
    <span className="flex text-yellow-500">
      {[...Array(5)].map((_, i) => {
        return rating >= i + 1 ? (
          <FaStar key={i} />
        ) : rating >= i + 0.5 ? (
          <FaRegStarHalfStroke key={i} />
        ) : (
          <FaRegStar key={i} />
        );
      })}
    </span>
  );
};
export default Rating;
