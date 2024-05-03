import axios from "axios";
import { CardType } from "../@types/types";

const baseUrl = "https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards";

export const getCards = () => axios.get(baseUrl);
export const getCardById = (id: string) => axios.get(baseUrl + `/${id}`);
export const createCard = (data: CardType) => axios.post(baseUrl,data, {
  headers: {
    "x-auth-token": localStorage.getItem("token"),
  },
} );
