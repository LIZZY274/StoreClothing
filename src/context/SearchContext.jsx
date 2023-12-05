import React, { createContext, useContext, useState, useCallback } from 'react';

const SearchContext = createContext();

export function useSearch() {
  return useContext(SearchContext);
}

export function SearchProvider({ children }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const performSearch = useCallback(
    (query, products) => {
      const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(query.toLowerCase())
      );
      setSearchQuery(query);
      setSearchResults(filteredProducts);
    },
    []
  );

  return (
    <SearchContext.Provider value={{ searchQuery, searchResults, performSearch }}>
      {children}
    </SearchContext.Provider>
  );
}
