import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import LanguageChanger from "./LanguageChanger";
import CurrencyChanger from "./CurrencyChanger";
import { IoCartOutline, IoCart } from "react-icons/io5";
import { useTranslate } from "../hooks/useTranslate";
import { ErrorBoundary } from "react-error-boundary";
import ErrorComponent from "./ErrorComponent";

const Navbar = () => {
  const { t } = useTranslate();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(location.pathname);

  useEffect(() => {
    if (location.pathname === "/cart") {
      setActiveTab("/cart");
    }
  }, [location.pathname]);

  const tabs = [
    { id: "tab-1", navigateTo: "/", tabName: "home", isActive: true },
    { id: "tab-2", navigateTo: "/about", tabName: "about", isActive: false },
    { id: "tab-3", navigateTo: "/shop", tabName: "shop", isActive: false },
    {
      id: "tab-4",
      navigateTo: "/contact",
      tabName: "contact",
      isActive: false,
    },
  ];

  return (
    <ErrorBoundary FallbackComponent={ErrorComponent}>
      <nav className="w-[100%] mb-5 border-b-1 border-violet-300">
        <div className="w-[100%] py-2 flex">
          <div className="mx-auto flex items-center gap-4">
            <img
              className="w-[3rem]"
              src="/shopping-bags.svg"
              alt="logo-image"
            />
            <h1 className="text-4xl font-medium">{t("shopping_app")}</h1>
          </div>
        </div>
        <div className="w-[100%] flex justify-between py-5">
          <div className="flex flex-1 gap-3">
            <LanguageChanger />
            <CurrencyChanger />
          </div>
          <div>
            <ul className="flex gap-3">
              {tabs.map((tab) => (
                <Link
                  to={tab.navigateTo}
                  key={tab.id}
                  className={`font-medium ${
                    activeTab === tab.navigateTo
                      ? "border-b-violet-700 border-b-3"
                      : ""
                  }`}
                  onClick={() => setActiveTab(tab.navigateTo)}
                >
                  <li>{t(tab.tabName)}</li>
                </Link>
              ))}
            </ul>
          </div>
          <div className="flex flex-row-reverse flex-1">
            <Link to="/cart">
              <button
                type="button"
                className={`flex gap-2 ${
                  activeTab === "/cart" ? "border-b-blue-700 border-b-2" : ""
                }`}
              >
                {t("cart")}
                {activeTab === "/cart" ? (
                  <IoCart className="text-2xl" />
                ) : (
                  <IoCartOutline className="text-2xl" />
                )}
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </ErrorBoundary>
  );
};

export default Navbar;
