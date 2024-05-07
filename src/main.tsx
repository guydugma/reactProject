import React from "react";
import ReactDOM from "react-dom/client";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./index.css";

import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext.tsx";
import { router } from "./routes/router.tsx";
import { AuthContextProvider } from "./contexts/AuthContext.tsx";
import { TryProvider } from "./contexts/TryContext.tsx";
import CssBaseline from "@mui/material/CssBaseline";
import { CardsProvider } from "./contexts/CardsContext.tsx";
import { RefreshProvider } from "./contexts/RefreshContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthContextProvider>
      <TryProvider>
        <RefreshProvider>
          <CardsProvider>
            <CssBaseline />
            <RouterProvider router={router} />
          </CardsProvider>
        </RefreshProvider>
      </TryProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
