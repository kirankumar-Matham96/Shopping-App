import React from "react";
import { useTranslate } from "../hooks/useTranslate";
import { ErrorBoundary } from "react-error-boundary";
import ErrorComponent from "../components/ErrorComponent";

const Home = () => {
  const { t } = useTranslate();

  return (
    <ErrorBoundary FallbackComponent={ErrorComponent}>
      <div className="min-h-[75vh] flex flex-col items-center justify-center home-bg-container">
        <h1 className="text-5xl font-semibold text-[#3D005E]">
          {t("welcome_to_shopping_app!")}
        </h1>
        <p className="text-2xl font-semibold  text-[#3D005E]">
          {t(
            "discover_amazing_deals_and_find_everything_you_need,_right_at_your_fingertips."
          )}
        </p>
      </div>
    </ErrorBoundary>
  );
};

export default Home;
