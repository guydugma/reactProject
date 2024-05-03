import { useEffect, useState, useContext } from 'react';
import { CardType } from "../@types/types";
import { getCards } from "../services/cards";
import ThumbnailCard from "../components/ThumbnailCard/ThumbnailCard";
import { Grid } from "@mui/material";
import { CardsContext } from '../contexts/CardsContext';
import { useCards } from '../hooks/useCards';



const Cards = () => {
  const cardsContext = useContext(CardsContext);
  const [allCards, setAllCards] = useState<CardType[]>([]);
  const [filteredCards, setFilteredCards] = useState<CardType[]>([]);
  const { cards, loading, error } = useCards();

  useEffect(() => {
    setAllCards(cards);
  }, []);
  useEffect(() => {
    const f = allCards.filter((c) => c.title.includes(cardsContext.input));
    setFilteredCards(f);
  }, [cardsContext.input]);




  return (<>
    {cardsContext.loading && <div>{cardsContext.loading}</div>}
    {cardsContext.error && <div>{cardsContext.error}</div>}
    {<Grid container className="flex flex-row flex-wrap justify-center items-center" spacing={8} columns={4}>
      {filteredCards.map((c) => (
        <Grid>
          <ThumbnailCard card={c} />
        </Grid>
      ))}

    </Grid>}
  </>
  );
};


export default Cards;
