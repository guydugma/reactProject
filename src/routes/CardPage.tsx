import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CardType, ErrorType } from "../@types/types";
import { getCardById } from "../services/cards";
import { Card, CardContent, CardMedia, Container, Typography } from "@mui/material";
import Dividier from "@mui/material/Divider";
import { fromAddress, setKey } from "react-geocode";
import BusinessMap from "../components/Map/BusinessMap";
import 'react-medium-image-zoom/dist/styles.css'

const mapApiKey = "AIzaSyD2wbh6P-LEPX1TeG5z1R2a8Zsvv--6vFY";
setKey(mapApiKey);


const CardPage = () => {

  // dynamic route: /cards/:id
  const { id } = useParams();
  const [card, setCard] = useState<CardType>();
  const [error, setError] = useState<ErrorType>();
  const [location, setLocation] = useState({ address: "", lat: 0, lng: 0 });

  useEffect(() => {
    getCardById(id ?? "")
      .then((res) => {
        setCard(res.data);
        const tempCard = res.data as CardType;
        const address = tempCard.address.city + " " + tempCard.address.street + " " + tempCard.address.houseNumber + " " + tempCard.address.country + " " + tempCard.address.state;
        fromAddress(address).then(({ results }) => {
          setLocation({ address: address, lat: results[0].geometry.location.lat, lng: results[0].geometry.location.lng })

        })
          .catch(console.error)
      })
      .catch((e) => {
        const status = e.response.status;
        const message = e.message;
        const details = e.response.data;

        setError({ status, message, details });
      });
  }, []);
  return error ? (
    <div>
      <h2>{error.message}</h2>
    </div>
  ) : (
    <Container sx={{ height: { sm: '80vh', md: 'auto' }, scrollbarWidth: 'none' }} maxWidth={false}>
      <Card sx={{
        display: { md: 'flex', sm: 'block', xs: 'block' },
        flexGrow: 1,
        flexDirection: {
          sm: "column", md: "row-reverse",

        },
        width: { sm: 'auto', md: '100%' },
        height: { xs: '100%', sm: '100%', md: '100%' },
        padding: 1,
        justifyContent: 'space-between',
        overflow: "scroll",
        scrollbarWidth: 'none'
      }}>
        {card?.image && <CardMedia
          sx={{
            height: '100%',
            width: '100%',
            boxShadow: 'rgba(255, 255, 255, 0.24) 0px 3px 8px',
            borderRadius: "5px",
            flexGrow: 1
          }}
          image={card?.image.url}
          title={card?.image.alt}
        />}
        <Card sx={{
          minWidth: '50%',
          boxShadow: 'rgba(255, 255, 255, 0.24) 0px 3px 8px',
          overflow: "visible",
        }}>
          <CardContent sx={{ overflowY: { sm: 'scroll', md: 'scroll' }, scrollbarWidth: 'none', flexGrow: 1 }}>
            <Typography gutterBottom variant="h3" component="div">
              {card?.title}
            </Typography>
            <Typography variant="h4" color="text.secondary">{card?.subtitle}</Typography>
            <Dividier sx={{ height: 30 }} />
            <CardContent>
              {card?.description && <Typography variant="body2" fontSize={20} color="text.secondary">{card?.description}</Typography>}
              {card?.phone && <Typography variant="body2" fontSize={20} color="text.secondary">Phone: {card?.phone}</Typography>}
              {card?.email && <Typography variant="body2" fontSize={20} color="text.secondary">Email: <a href={`mailto:${card?.email}`}>{card?.email}</a></Typography>}
              {card?.web && <Typography variant="body2" fontSize={20} color="text.secondary">Website: <a href={card?.web}>{card?.web}</a></Typography>}
              {location.address !== "" && <Typography variant="body2" fontSize={20} color="text.secondary">Address: {location.address}</Typography>}
              <BusinessMap location={location} />
            </CardContent>
          </CardContent>
        </Card>
      </Card>
    </Container>
  );
};

export default CardPage;
