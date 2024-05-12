import React, { createContext, useEffect, useState } from "react";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export const TryContext = React.createContext({
  toggleColorMode: () => { },
  mode: "dark",
});


export const TryProvider = ({ children }) => {
  const [mode, setMode] = React.useState<'light' | 'dark'>('dark');

  const toggleColorMode =
    () => {
      // toggle the theme
      const newValue = mode == "light" ? "dark" : "light";

      // save to local storage
      localStorage.setItem("theme", newValue);

      // update the class on the body
      if (newValue === "dark") {
        document.body.classList.add("dark");
      } else {
        document.body.classList.remove("dark");
      }

      // update the state
      setMode(newValue);
    }


  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === 'light' ? {
            background: {
              default: 'lightgrey',
            }
          } : {

          }),
        },
      }),
    [mode],
  );
  return (
    <TryContext.Provider value={{ toggleColorMode, mode }}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </TryContext.Provider>
  );
}