import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardType } from '../../@types/types';
import { IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import react from '@vitejs/plugin-react';
import LikeBtn from './LikeBtn/LikeBtn';

type Props = {
  card: CardType;
}

export default function MediaCard(props: Props) {
  let c = props.card;

  const addToFavs = (card: CardType) => {

  }

  return (
    <Card sx={{ width: 300, height: 400 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={c.image.url}
        title={c.title}
      />
      <CardContent sx={{ height: 200 }}>
        <Typography gutterBottom variant="h5" component="div">
          {c.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {c.subtitle}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Button href={`/cards/${c._id}`} size="small" >Learn More</Button>
        <LikeBtn card={c} />
      </CardActions>
    </Card>
  );
}
