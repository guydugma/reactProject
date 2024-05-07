import { createContext, useState, useEffect } from "react";
import { useCards } from "../hooks/useCards";
import { CardType, ErrorType } from "../@types/types";
import { filledInputClasses } from "@mui/material";

export const RefreshContext = createContext({
  flag: false,
  refresh: () => { },
});



export const RefreshProvider = ({ children }) => {
  const [flag, setFlag] = useState(false);


  const refresh = () => {
    setFlag(!flag);
  }

  return (
    <RefreshContext.Provider value={{ flag, refresh }}>
      {children}
    </RefreshContext.Provider>
  )
}