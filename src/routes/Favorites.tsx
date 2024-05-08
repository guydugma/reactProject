import { useEffect, useState, useContext } from 'react';
import { CardType } from "../@types/types";
import { getCards } from "../services/cards";
import ThumbnailCard from "../components/ThumbnailCard/ThumbnailCard";
import { Grid } from "@mui/material";
import { CardsContext } from '../contexts/CardsContext';
import { useCards } from '../hooks/useCards';
import MediaCard from '../components/ThumbnailCard/MediaCard';
import { RefreshContext } from '../contexts/RefreshContext';




const Favorites = () => {
  const cardsContext = useContext(CardsContext);
  const refreshContext = useContext(RefreshContext);
  const [refreshFlag, setRefreshFlag] = useState(false);
  const { cards, loading, error } = useCards();
  const [allCards, setAllCards] = useState<CardType[]>([]);
  const [filteredCards, setFilteredCards] = useState<CardType[]>(cards);
  const userId = localStorage.getItem("user_id") ?? "no user id";


  useEffect(() => {
    const f = cards.filter((c) => c.title.includes(cardsContext.input)).filter((c) => c.likes.includes(userId));
    setFilteredCards(f);
  }, [cardsContext.input]);

  useEffect(() => {
    setFilteredCards(cards.filter((c) => c.likes.includes(userId)));
  }, [loading]);

  useEffect(() => {
    console.log("here2")
    getCards().then((res) => {
      setFilteredCards(res.data.filter((c) => c.likes.includes(userId)));
    }).catch((e) => {
      console.log(e)
    })
  }, [refreshFlag]);

  const refresh = () => {
    setRefreshFlag(!refreshFlag);
  }

  return (<>
    {loading && <div>{loading}</div>}
    {error && <div>{error}</div>}
    {<Grid container className="flex flex-row flex-wrap justify-center items-center" spacing={8} columns={4} sx={{ mt: 5 }}>
      {filteredCards.length === 0 && <div>No cards found</div>}
      {filteredCards.map((c) => (
        (<Grid item key={c._id}>
          <MediaCard card={c} func={refresh} />
        </Grid>)
      ))}

    </Grid>}
  </>
  );
};


export default Favorites;