import { useEffect, useState, useContext } from 'react';
import { CardType } from "../@types/types";
import { getCards } from "../services/cards";
import ThumbnailCard from "../components/ThumbnailCard/ThumbnailCard";
import { Grid } from "@mui/material";
import { CardsContext } from '../contexts/CardsContext';
import { useCards } from '../hooks/useCards';
import MediaCard from '../components/ThumbnailCard/MediaCard';
import LikeBtn from '../components/ThumbnailCard/LikeBtn/LikeBtn';



const Cards = () => {
  const cardsContext = useContext(CardsContext);
  const { cards, loading, error } = useCards();
  const [filteredCards, setFilteredCards] = useState<CardType[]>(cards);
  const [likeFlag, setLikeFlag] = useState(false); //rerenders page when a card is liked/unliked

  useEffect(() => {
    const f = cards.filter((c) => c.title.includes(cardsContext.input));
    setFilteredCards(f);
  }, [cardsContext.input, likeFlag]);

  useEffect(() => {
    setFilteredCards(cards);
  }, [loading]);




  return (<>
    {loading && <div>{loading}</div>}
    {error && <div>{error}</div>}
    {<Grid container className="flex flex-row flex-wrap justify-center items-center" spacing={8} columns={4} sx={{ mt: 5 }}>
      {filteredCards.map((c) => (
        <Grid item key={c._id}>
          <MediaCard card={c} />
        </Grid>
      ))}

    </Grid>}
  </>
  );
};


export default Cards;