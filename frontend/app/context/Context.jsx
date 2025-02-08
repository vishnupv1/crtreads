import { createContext, useContext, useState } from 'react';

const SearchContext = createContext({
    searchQuery: '',
    searchOpen:false,
    setSearchQuery: () => {},
});

export const useSearchContext = () => useContext(SearchContext);

export default SearchContext;