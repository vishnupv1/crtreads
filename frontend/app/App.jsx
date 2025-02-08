'use client';
import { useState } from 'react';
import SearchContext from './context/Context';

const MyApp = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <SearchContext.Provider value={{ searchQuery, setSearchQuery, searchOpen, setSearchOpen }}>
      {children}
    </SearchContext.Provider>
  );
};

export default MyApp;
