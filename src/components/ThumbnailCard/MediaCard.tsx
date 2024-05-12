import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardType } from '../../@types/types';
import { Divider, IconButton, Stack } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import react from '@vitejs/plugin-react';
import LikeBtn from './LikeBtn/LikeBtn';
import { useAuth } from '../../hooks/useAuth';
import { Link, useLocation } from 'react-router-dom';
import "./MediaCard.scss"

type Props = {
  card: CardType;
  func?: () => void;
  likeErr?: () => void;
}

const MediaCard = (props: Props) => {
  let c = props.card;

  return (

    <Card sx={{ flexGrow: 1, maxWidth: 345 }} >
      <Link to={`/cards/${c._id}`}>
        <CardMedia
          sx={{ height: 140 }}
          image={c.image.url}
          title={c.title}
        />
      </Link>
      <CardContent sx={{ height: 85 }} >
        <Typography gutterBottom variant="h6" component="div">
          {c.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {c.subtitle}
        </Typography>
      </CardContent>
      <Divider sx={{ m: 1 }} />
      <CardContent sx={{ height: 115 }} >
        <Stack gap={1}>
          <Typography variant="body2" color="text.secondary" sx={{}}>
            {c.address.city}, {c.address.street} {c.address.houseNumber}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{}}>
            {c.phone}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{}}>
            <a href={`mailto:${c.email}`}>{c.email}</a>
          </Typography>
        </Stack>
      </CardContent>

      <CardActions disableSpacing>
        {useAuth().isLoggedIn && <LikeBtn card={c} func={props.func} likeErr={props.likeErr} />}
      </CardActions>
    </Card>

  );
}

export default MediaCard;