import React from "react";
import Facet from "./Facet";
import { useSelector, useDispatch } from "react-redux";
import {
  productsSelector,
  filterProducts,
  setFilters,
} from "../redux/slices/productsSlice";

const SideBar = () => {
  const { categories } = useSelector(productsSelector);
  const dispatch = useDispatch();

  const handleFilterChange = (filterType, values) => {
    dispatch(setFilters({ filterType, values }));
    dispatch(filterProducts());
  };

  return (
    <div>
      <Facet title="Price" type="range" onFilterChange={handleFilterChange} />
      <Facet
        title="Categories"
        type="checkbox"
        items={categories}
        onFilterChange={handleFilterChange}
      />
      <Facet
        title="Rating"
        items={[`4 & above`, `3 & above`, `2 & above`]}
        type="checkbox"
        onFilterChange={handleFilterChange}
      />
    </div>
  );
};

export default SideBar;
