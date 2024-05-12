import { useEffect, useState } from "react";
import { CardType } from "../@types/types";
import { getCards, getCardsByUser } from "../services/cards";

// cards/myCards/favoriteCards

export const useCards = () => {
  const [cards, setCards] = useState<CardType[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>();

  //SRP:
  useEffect(() => {
    setError(null);
    setLoading(true);
    getCards()
      .then((res) => {
        setCards(res.data);
        setError(null);
      })
      .catch((e) => {
        setError("Network error");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { cards, loading, error };
};

export const useUserCards = () => {
  const [cards, setCards] = useState<CardType[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>();

  //SRP:
  useEffect(() => {
    setError(null);
    setLoading(true);
    getCardsByUser()
      .then((res) => {
        setCards(res.data);
        setError(null);
      })
      .catch((e) => {
        setError("Network error");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { cards, loading, error };
};
