import { Container } from "@mui/material";
import BottomBar from "./BottomBar/BottomBar";
import "./Footer.scss";
import { TryContext } from "../../contexts/TryContext";
import { useContext } from "react";



function Footer() {
  const tryContext = useContext(TryContext);


  return (
    <Container className="site-footer  font-extralight  text-center  sticky bottom-0" maxWidth={false}
      sx={{
        padding: { xs: 0, sm: 0, lg: 3 },
        px: { lg: 20 },
        borderTop: "1px solid aquamarine",
        ...(tryContext.mode === 'dark' ? { boxShadow: '0 0 30px rgba(255, 255, 255, 0.5)' } : { boxShadow: '0 0 30px rgba(0, 0, 0, 0.5)' })
      }}>
      <BottomBar />
    </Container>
  );
}

export default Footer;
