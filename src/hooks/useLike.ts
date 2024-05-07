import { useEffect, useState } from "react";
import { CardType } from "../@types/types";
import { getCards } from "../services/cards";
import Cards from '../routes/Favorites';

// cards/myCards/favoriteCards

export const useLike = (cards: CardType[],card: CardType) => {
  const [newCards, setNewCards] = useState<CardType[]>(cards);
  //SRP:
  useEffect(() => {
    setNewCards(cards.splice(cards.indexOf(card), 1));
  }, []);

  return {newCards};
};
