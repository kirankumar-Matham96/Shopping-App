import React from "react";
import { useTranslate } from "../hooks/useTranslate";
import { FaHandPointRight } from "react-icons/fa";
import { ErrorBoundary } from "react-error-boundary";
import ErrorComponent from "../components/ErrorComponent";

const About = () => {
  const { t } = useTranslate();
  return (
    <ErrorBoundary FallbackComponent={ErrorComponent}>
      <h2 className="text-3xl font-semibold my-5">{t("about")}</h2>
      <div className="">
        <div className="text-base mr-10">
          <p className="mb-16">{t("about_us_1")}</p>
          <div className="flex gap-x-[6rem] mb-16">
            <img
              className="w-[40%] rounded-4xl"
              src="/about.webp"
              alt="about us"
            />
            <div>
              <h2 className="text-2xl mb-3">{t("who_we_are")}</h2>
              <p className="mb-3">{t("about_us_2")}</p>
            </div>
          </div>
          <div className="flex mb-16">
            <div>
              <h2 className="text-2xl mb-3">{t("our_mission")}</h2>
              <p className="mb-3">{t("about_us_3")}</p>
            </div>
            <img
              className="w-[40%] rounded-4xl"
              src="/about.webp"
              alt="about us"
            />
          </div>
          <div className="flex justify-between gap-x-20 mb-16">
            <img
              className="w-[40%] rounded-4xl"
              src="/about.webp"
              alt="about us"
            />
            <div>
              <h2 className="text-2xl mb-3">{t("why_shop_with_us")}</h2>
              <p className="flex justify-between items-start gap-x-3 mb-1">
                <span className="text-2xl">
                  <FaHandPointRight />
                </span>
                {t("about_us_4")}
              </p>
              <p className="flex items-start gap-x-3 mb-1">
                <span className="text-2xl">
                  <FaHandPointRight />
                </span>
                {t("about_us_5")}
              </p>
              <p className="flex items-start gap-x-3 mb-1">
                <span className="text-2xl">
                  <FaHandPointRight />
                </span>
                {t("about_us_6")}
              </p>
              <p className="flex items-start gap-x-3 mb-1">
                <span className="text-2xl">
                  <FaHandPointRight />
                </span>
                {t("about_us_7")}
              </p>
              <p className="flex items-start gap-x-3 mb-3">
                <span className="text-2xl">
                  <FaHandPointRight />
                </span>
                {t("about_us_8")}
              </p>
              <p className="mb-3">
                {t("join_thousands_of_satisfied_customers")}
              </p>
            </div>
          </div>
          <div className="flex justify-between gap-x-20 mb-16">
            <div>
              <h2 className="text-2xl mb-3">{t("stay_connected")}</h2>
              <p className="mb-3">{t("follow_us_on_social_media")}</p>
            </div>
            <img
              className="w-[40%] rounded-4xl"
              src="/about.webp"
              alt="about us"
            />
          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default About;
