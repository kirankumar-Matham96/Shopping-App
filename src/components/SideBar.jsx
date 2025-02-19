import React from "react";
import Facet from "./Facet";
import { useSelector, useDispatch } from "react-redux";
import {
  productsSelector,
  filterProducts,
  setFilters,
} from "../redux/slices/productsSlice";
import { useTranslate } from "../hooks/useTranslate";
import { ErrorBoundary } from "react-error-boundary";
import ErrorComponent from "./ErrorComponent";

const SideBar = () => {
  const { t } = useTranslate();
  const { categories } = useSelector(productsSelector);
  const dispatch = useDispatch();

  const handleFilterChange = (filterType, values) => {
    dispatch(setFilters({ filterType, values }));
    dispatch(filterProducts());
  };

  return (
    <ErrorBoundary FallbackComponent={ErrorComponent}>
      {/* <Facet title="Price" type="range" onFilterChange={handleFilterChange} /> */}
      <Facet
        title="Categories"
        type="checkbox"
        items={categories}
        onFilterChange={handleFilterChange}
      />
      <Facet
        title="Rating"
        items={[t("4_&_above"), t("3_&_above"), t("2_&_above")]}
        type="checkbox"
        onFilterChange={handleFilterChange}
      />
    </ErrorBoundary>
  );
};

export default SideBar;
