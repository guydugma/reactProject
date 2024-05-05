import { createContext, useState, useEffect } from "react";
import { useCards } from "../hooks/useCards";
import { CardType, ErrorType } from "../@types/types";
import { filledInputClasses } from "@mui/material";

export const CardsContext = createContext({
  input: "",
  updateInput: (input: string) => { },
});



export const CardsProvider = ({ children }) => {
  const [input, setInput] = useState("");


  const updateInput = (input = "") => {
    setInput(input);
  }

  return (
    <CardsContext.Provider value={{ input, updateInput }}>
      {children}
    </CardsContext.Provider>
  )
}