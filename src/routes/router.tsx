import { createBrowserRouter } from "react-router-dom";
import Register from "./Register.tsx";
import Login from "./Login.tsx";
import Cards from "./Cards.tsx";
import Error from "./Error.tsx";
import CardPage from "./CardPage.tsx";
import Root from "../layouts/Root.tsx";
import Profile from "./Profile.tsx";
import CreateCard from "./CreateCard.tsx";
import Favorites from "./Favorites.tsx";
import MyCards from "./MyCards.tsx";
import About from "./About.tsx";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Cards /> },
      { path: "/register", element: <Register /> },
      { path: "/login", element: <Login /> },
      { path: "/cards", element: <Cards /> },
      { path: "/cards/:id", element: <CardPage /> },
      { path: "/favorites", element: <Favorites /> },
      { path: "/mycards", element: <MyCards /> },
      { path: "/about", element: <About /> },
      {
        path: "/createcard",
        element: (
          <CreateCard />
        ),
      },
      {
        path: "/profile",
        element: (
          <Profile />
        ),
      },
    ],
  },
]);
