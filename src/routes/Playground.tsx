import Stack from "@mui/material/Stack/Stack";
import axios from "axios";
import { useEffect, useState } from "react";
import { CardType } from "../@types/types";

const Playground = () => {
  const api = `https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards`;
  const [allCards, setAllCards] = useState<CardType[]>([]);
  const filteredCards = allCards.filter((c) => c.likes.length > 0);

  useEffect(() => {
    axios.get(api).then((res) => {
      setAllCards(res.data);
    });
  }, []);

  return (
    <Stack>
      {filteredCards.map((c) => (
        <div key={c._id}>
          <h2>{c.title}</h2>
          <span>Likes: {c.likes.length}</span>
        </div>
      ))}
    </Stack>
  );
};

export default Playground;
