import "./ThumbnailCard.scss";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { CardType } from "../../@types/types";
import { Link } from 'react-router-dom';


type Props = {
  card: CardType;
}

const ThumbnailCard = (props: Props) => {
  let c = props.card;
  // dynamic route: /cards/:id

return (
    <Card>
      <Card.Img variant="top" src={c.image.url}/>
      <Card.Body>
        <Card.Title>{c.title}</Card.Title>
        <Card.Text>
          {c.subtitle}
        </Card.Text>
        <Link to={`/cards/${c._id}`}>
        <Button variant="primary">Go somewhere</Button>
      </Link>
      </Card.Body>
    </Card>
  );
};

export default ThumbnailCard;
