import { useEffect, useState, useContext } from 'react';
import { CardType } from "../@types/types";
import { getCards } from "../services/cards";
import ThumbnailCard from "../components/ThumbnailCard/ThumbnailCard";
import { Grid } from "@mui/material";
import { CardsContext } from '../contexts/CardsContext';
import { useCards } from '../hooks/useCards';
import MediaCard from '../components/ThumbnailCard/MediaCard';
import LikeBtn from '../components/ThumbnailCard/LikeBtn/LikeBtn';
import Alert from '@mui/material/Alert';
import Fade from '@mui/material/Fade';



const Cards = () => {
  const cardsContext = useContext(CardsContext);
  const { cards, loading, error } = useCards();
  const [filteredCards, setFilteredCards] = useState<CardType[]>(cards);
  const [likeError, setLikeError] = useState(false);

  useEffect(() => {
    const f = cards.filter((c) => c.title.includes(cardsContext.input));
    setFilteredCards(f);
  }, [cardsContext.input, loading]);

  const likeErrMsg = () => {
    console.log("here")
    setLikeError(true);
    setTimeout(() => {
      setLikeError(false);
    }, 3000);
  }

  const alert = () => {
    return (<Alert severity="error" sx={{ position: 'fixed', bottom: '0', right: '0', transform: 'translate(-50%, -50%)' }}>Couldn't add to favorites. Please try again later.</Alert>)
  }

  return (<>
    {loading && <div>{loading}</div>}
    {error && <div>{error}</div>}
    {<Grid container className="flex flex-row flex-wrap justify-center items-center" spacing={8} columns={4} sx={{ mt: 5 }}>
      {filteredCards.map((c) => (
        <Grid item key={c._id}>
          <MediaCard card={c} likeErr={likeErrMsg} />
        </Grid>
      ))}
    </Grid>}
    <Fade in={likeError} timeout={{ enter: 500, appear: 2000, exit: 500 }} children={alert()}></Fade>
  </>
  );
};


export default Cards;