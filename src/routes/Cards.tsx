import { useEffect, useState, useContext } from 'react';
import { CardType } from "../@types/types";
import { Divider, Grid, Stack, Typography } from "@mui/material";
import { CardsContext } from '../contexts/CardsContext';
import { useCards } from '../hooks/useCards';
import MediaCard from '../components/ThumbnailCard/MediaCard';
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

  return (<Stack>
    <Typography variant='h1' color={'primary'} align='center'>GALILEGO</Typography>
    <Typography variant='h4' color={'primary'} align='center'>Our Businesses</Typography>
    <Divider sx={{ my: 1 }} />
    {loading && <div>{loading}</div>}
    {error && <div>{error}</div>}
    {
      <Grid container className="flex flex-row  items-center" columnGap={1} rowGap={6} sx={{ justifyContent: "space-around", alignItems: "flex-start" }} >
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
  </Stack>
  );
};


export default Cards;