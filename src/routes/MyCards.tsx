import { useEffect, useState, useContext } from 'react';
import { CardType } from "../@types/types";
import { Grid } from "@mui/material";
import { CardsContext } from '../contexts/CardsContext';
import { useUserCards } from '../hooks/useCards';
import MediaCard from '../components/ThumbnailCard/MediaCard';
import Alert from '@mui/material/Alert';
import Fade from '@mui/material/Fade';
import { getCardsByUser } from '../services/cards';



const MyCards = () => {
  const cardsContext = useContext(CardsContext);
  const { cards, loading, error } = useUserCards();
  const [filteredCards, setFilteredCards] = useState<CardType[]>(cards);
  const [likeError, setLikeError] = useState(false);

  useEffect(() => {
    const f = cards.filter((c) => c.title.includes(cardsContext.input));
    setFilteredCards(f);
  }, [cardsContext.input, loading]);

  const likeErrMsg = () => {
    setLikeError(true);
    setTimeout(() => {
      setLikeError(false);
    }, 3000);
  }
  const alert = () => {
    return (<Alert severity="error" sx={{ position: 'fixed', bottom: '0', right: '0', transform: 'translate(-50%, -50%)' }}>Couldn't add to favorites. Please try again later.</Alert>)
  }

  return (<>
    {filteredCards.length === 0 && <div>You haven't created any cards</div>}
    {loading && <div>{loading}</div>}
    {error && <div>{error}</div>}
    {
      <Grid container className="flex flex-row  items-center" columnGap={1} rowGap={6} sx={{ justifyContent: "space-between", alignItems: "flex-start" }} >
        {filteredCards.map((c) => (
          <Grid item key={c._id} xs={5} sm={5} md={3} lg={2} sx={{ display: "flex" }}>
            <MediaCard card={c} likeErr={likeErrMsg} />
          </Grid>
        ))}
        <Grid item xs={7} md={3} lg={2}></Grid>
        <Grid item xs={7} md={3} lg={2}></Grid>
        <Grid item xs={7} md={3} lg={2}></Grid>
      </Grid>
    }

    <Fade in={likeError} timeout={{ enter: 500, appear: 2000, exit: 500 }} children={alert()}></Fade>
  </>
  );
};


export default MyCards;