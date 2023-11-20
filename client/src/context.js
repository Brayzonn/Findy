import React, { useContext } from 'react';
import axios from 'axios';
import { useState, useEffect  } from 'react'

const AppContext = React.createContext();

const AppProvider = ({ children }) => {

    return <AppContext.Provider value={{
       
    }}>{children}</AppContext.Provider>;
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { useGlobalContext, AppProvider };