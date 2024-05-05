import { IconButton } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useEffect, useState } from "react";
import { CardType } from "../../../@types/types";
import auth from "../../../services/auth";
import { useAuth } from "../../../hooks/useAuth";
import { likeCard } from "../../../services/cards";

type Props = {
  card: CardType;
}

const LikeBtn = (props: Props) => {

  const [like, setLike] = useState(false);
  const userId = localStorage.getItem("user_id") ?? "";

  useEffect(() => {
    setLike(props.card.likes.includes(userId) ? true : false);
  }, [])

  const addToFavs = () => {
    likeCard(props.card._id).then(() => {
      setLike(!like);
    }).catch((e) => {
      console.log(e);
    })
  }

  return (<IconButton aria-label="add to favorites" sx={{ ml: 'auto', color: like ? 'red' : 'inherit' }}
    onClick={() => {
      addToFavs();
    }} >
    <FavoriteIcon />
  </IconButton>)
}

export default LikeBtn;