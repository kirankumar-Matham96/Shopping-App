import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import ErrorComponent from "./ErrorComponent";

const Loading = () => {
  return (
    <ErrorBoundary FallbackComponent={ErrorComponent}>
      <div className="fixed h-[100vh] w-[100%] flex justify-center items-center bg-white opacity-25">
        <img
          className=""
          src="/Animation - 1739881882213.gif"
          alt="Loading..."
        />
      </div>
    </ErrorBoundary>
  );
};

export default Loading;
