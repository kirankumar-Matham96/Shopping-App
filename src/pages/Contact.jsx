import React, { useState } from "react";
import { useTranslate } from "../hooks/useTranslate";

const Contact = () => {
  const { t } = useTranslate();

  const [countryCode, setCountryCode] = useState("+91");
  return (
    <div>
      <h2 className="text-3xl font-semibold my-5">{t("contact")}</h2>
      <div className="flex items-center">
        <img
          className="w-[40%] rounded-4xl"
          src="/contact.webp"
          alt="contact us"
        />
        <div className="text-base ml-10">
          <ul>
            <li className="mb-5">
              <span className="font-semibold">{t("phone")}: </span>
              {countryCode} 0000000000
            </li>
            <li>
              <span className="font-semibold">{t("address")}: </span>
              <p className="ms-5 mt-3 mb-2">
                <span className="font-medium">{t("support_center")}: </span>
                {t("support_center_address")}
              </p>
              <p className="ms-5">
                <span className="font-medium">{t("asia_headquarters")}: </span>
                {t("asia_headquarters_address")}
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
