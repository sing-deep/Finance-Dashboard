import { createContext, useContext, useState } from "react";
import { transactionsData } from "../data/transactionsData";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [allTransactions, setAllTransactions] = useState(transactionsData);
  const [role, setRole] = useState("Viewer");

  return (
    <AppContext.Provider
      value={{
        allTransactions,
        setAllTransactions,
        role,
        setRole,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);