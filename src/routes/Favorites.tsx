import { useEffect, useState, useContext } from 'react';
import { CardType } from "../@types/types";
import { Grid } from "@mui/material";
import { CardsContext } from '../contexts/CardsContext';
import { useCards } from '../hooks/useCards';
import MediaCard from '../components/ThumbnailCard/MediaCard';
import { RefreshContext } from '../contexts/RefreshContext';
import { AuthContext } from '../contexts/AuthContext';




const Favorites = () => {
  const authContext = useContext(AuthContext);
  const cardsContext = useContext(CardsContext);
  const refreshContext = useContext(RefreshContext);
  const [refreshFlag, setRefreshFlag] = useState(false);
  const { cards, loading, error } = useCards();
  const [allCards, setAllCards] = useState<CardType[]>([]);
  const [filteredCards, setFilteredCards] = useState<CardType[]>(cards);


  useEffect(() => {
    const f = cards.filter((c) => c.title.includes(cardsContext.input)).filter((c) => c.likes.includes(authContext.userPrevileges._id));
    setFilteredCards(f);
  }, [cardsContext.input]);

  useEffect(() => {
    setFilteredCards(cards.filter((c) => c.likes.includes(authContext.userPrevileges._id)));
  }, [loading]);


  useEffect(() => {

    setFilteredCards(cards.filter((c) => c.likes.includes(authContext.userPrevileges._id)));
  }
    , [refreshFlag]);

  const refresh = () => {
    setRefreshFlag(!refreshFlag);
  }

  return (<>
    {loading && <div>loading</div>}
    {error && <div>error</div>}

    {<Grid container className="flex flex-row  items-center" columnGap={1} rowGap={6} sx={{ justifyContent: "space-between", alignItems: "flex-start" }} >
      {filteredCards.map((c) => (
        <Grid item key={c._id} xs={5} sm={5} md={3} lg={2.4} sx={{ display: "flex" }}>
          <MediaCard card={c} func={refresh} />
        </Grid>
      ))}
      <Grid item xs={7} md={3} lg={2.4}></Grid>
      <Grid item xs={7} md={3} lg={2.4}></Grid>
      <Grid item xs={7} md={3} lg={2.4}></Grid>
    </Grid>}
  </>
  );
};


export default Favorites;