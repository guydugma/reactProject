import { createContext, useState, useEffect } from "react";
import { useCards } from "../hooks/useCards";
import { CardType, ErrorType } from "../@types/types";
import { filledInputClasses } from "@mui/material";

export const CardsContext = createContext({
  input: "",
  filteredCards: [] as CardType[],
  loading: false,
  error: null as string | null | undefined,
  updateInput: (input: string) => { },
});



export const CardsProvider = ({ children }) => {
  const [input, setInput] = useState("");
  const { cards, loading, error } = useCards();
  const [filteredCards, setFilteredCards] = useState<CardType[]>(cards);

  useEffect(() => {
    setFilteredCards(cards);
  })

  const updateInput = (input = "") => {
    setInput(input);
    setFilteredCards(cards.filter((c) => c.title.includes(input)));
  }

  return (
    <CardsContext.Provider value={{ input, filteredCards, loading, error, updateInput }}>
      {children}
    </CardsContext.Provider>
  )
}