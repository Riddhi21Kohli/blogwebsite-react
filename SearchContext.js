
import React, { createContext, useState, useContext } from 'react';

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchParam, setSearchParam] = useState('');

  return (
    <SearchContext.Provider value={{ searchParam, setSearchParam }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearchParam = () => useContext(SearchContext);
