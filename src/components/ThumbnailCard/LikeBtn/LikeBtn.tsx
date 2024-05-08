import { IconButton } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useEffect, useState } from "react";
import { CardType } from "../../../@types/types";
import { likeCard } from "../../../services/cards";
import Alert from '@mui/material/Alert';


type Props = {
  card: CardType;
  func?: () => void;
  likeErr?: () => void;
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
      like ? props.card.likes.push(userId) : props.card.likes.splice(props.card.likes.indexOf(userId), 1);
      props.func && props.func();
    }).catch((e) => {
      console.log(e);
      props.likeErr && props.likeErr();
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