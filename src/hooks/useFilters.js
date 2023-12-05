// En tu hook de filtros (useFilters.js)
import { useContext } from "react";
import { FiltersContext } from "../context/filters";

export function useFilters() {
  const { filters, setFilters } = useContext(FiltersContext);

  const filterProducts = (products) => {
    return products.filter((product) => {
      return (
        product.price >= filters.minPrice &&
        (filters.category === "all" || product.category === filters.category) &&
        (filters.color === "all" || product.color === filters.color) &&
        (filters.size === "all" || product.size === filters.size) &&
        (filters.type === "all" || product.type === filters.type)
      );
    });
  };

  return { filters, filterProducts, setFilters };
}
