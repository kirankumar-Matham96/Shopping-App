import React, { useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { useTranslate } from "../hooks/useTranslate";

const Facet = ({ title, items, type = "checkbox", onFilterChange }) => {
  const { t } = useTranslate();

  const [selectedFilters, setSelectedFilters] = useState(
    type === "range" ? 1000 : []
  );

  const handleSelectOption = (e) => {
    const { value, checked } = e.target;
    let updatedFilters;

    if (type === "checkbox") {
      updatedFilters = checked
        ? [...selectedFilters, value]
        : selectedFilters.filter((option) => option !== value);
    } else if (type === "range") {
      setSelectedFilters(value);
      onFilterChange(title.toLowerCase(), value);
      return;
    } else if (type === "radio") {
      setSelectedFilters(value);
      onFilterChange(title.toLowerCase(), value);
      return;
    }
    setSelectedFilters(updatedFilters);
    onFilterChange(title.toLowerCase(), updatedFilters);
  };

  const clearFilters = () => {
    let updatedFilters;

    if (type === "checkbox") {
      updatedFilters = [];
    } else if (type === "range") {
      setSelectedFilters(1000);
      onFilterChange(title.toLowerCase(), 1000);
      return;
    } else if (type === "radio") {
      setSelectedFilters("");
      onFilterChange(title.toLowerCase(), "");
      return;
    }

    setSelectedFilters(updatedFilters);
    onFilterChange(title.toLowerCase(), updatedFilters);
  };

  const ErrorComponent = () => <p>Error in the component</p>;

  return (
    <div className="p-2">
      <ErrorBoundary FallbackComponent={ErrorComponent}>
        <div className="flex justify-between items-center px-3">
          <h2 className="mt-3 mb-2 text-xl font-semibold">
            {t(title.toLowerCase().split(" ").join("_")) || title}
          </h2>
          {selectedFilters.length > 0 && type !== "range" && (
            <button onClick={clearFilters}>{t("clear")}</button>
          )}
        </div>
        <ul className="px-3">
          {type === "checkbox" &&
            items.map((item) => (
              <li key={item}>
                <label
                  className="flex items-center gap-2"
                  htmlFor={item.split(" ").join("_")}
                >
                  <input
                    id={item.split(" ").join("_")}
                    type="checkbox"
                    value={
                      title.toLowerCase() === "rating" ? item.slice(0, 1) : item
                    }
                    checked={selectedFilters.includes(
                      title.toLowerCase() === "rating" ? item.slice(0, 1) : item
                    )}
                    onChange={handleSelectOption}
                  />
                  <span>
                    {t(item.toLowerCase().split(" ").join("_")) || item}
                  </span>
                </label>
              </li>
            ))}

          {type === "radio" &&
            items.map(({ label, value }) => (
              <li key={value}>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name={title}
                    value={value}
                    checked={selectedFilters === value}
                    onChange={handleSelectOption}
                  />
                  <span>
                    {t(label.toLowerCase().split(" ").join("_")) || label}
                  </span>
                </label>
              </li>
            ))}

          {type === "range" && (
            <li className="flex flex-col gap-2">
              <input
                type="range"
                min="0"
                max="1000"
                step="10"
                value={selectedFilters}
                onChange={handleSelectOption}
                className="w-full"
              />
              <span>${selectedFilters}</span>
            </li>
          )}
        </ul>
      </ErrorBoundary>
    </div>
  );
};

export default Facet;
