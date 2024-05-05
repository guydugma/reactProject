import { createBrowserRouter } from "react-router-dom";
import Register from "./Register.tsx";
import Login from "./Login.tsx";
import Cards from "./Cards.tsx";
import Error from "./Error.tsx";
import Card from "./Card.tsx";
import Playground from "./Playground.tsx";
import Practice from "./Practice.tsx";
import Root from "../layouts/Root.tsx";
import ProtectedRoute from "../components/ProtectedRoute.tsx";
import Profile from "./Profile.tsx";
import CreateCard from "./CreateCard.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <ProtectedRoute> <Root /></ProtectedRoute>,
    errorElement: <Error />,
    children: [
      { index: true, element: <Cards /> },
      { path: "/register", element: <Register /> },
      { path: "/login", element: <Login /> },
      { path: "/cards", element: <Cards /> },
      { path: "/cards/:id", element: <Card /> },
      {
        path: "/createcard",
        element: (
          <ProtectedRoute>
            <CreateCard />
          </ProtectedRoute>
        ),
      },
      {
        path: "/profile",
        element: (
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        ),
      },
      {
        path: "/playground",
        element: <Playground />,
      },
      { path: "/practice", element: <Practice /> },
    ],
  },
]);
