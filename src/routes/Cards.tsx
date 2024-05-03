import { useEffect, useState } from "react";
import { CardType } from "../@types/types";
import { getCards } from "../services/cards";
import ThumbnailCard from "../components/ThumbnailCard/ThumbnailCard";
import Grid from "@mui/material/Unstable_Grid2/Grid2";


const Cards = () => {
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

  return (
    <Grid container className="flex flex-row flex-wrap justify-center items-center" spacing={8} columns={4}>

      {cards.map((c) => (
        <Grid>
          <ThumbnailCard card={c} />
        </Grid>
      ))}

    </Grid>
  );
};

export default Cards;
