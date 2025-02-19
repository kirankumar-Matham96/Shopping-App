import { FaStar, FaRegStarHalfStroke, FaRegStar } from "react-icons/fa6";
import { ErrorBoundary } from "react-error-boundary";
import ErrorComponent from "./ErrorComponent";

const Rating = ({ rating }) => {
  return (
    <ErrorBoundary FallbackComponent={ErrorComponent}>
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
    </ErrorBoundary>
  );
};
export default Rating;
