import "./Header.scss";
import MuiNav from "../SiteNav/MuiNav";
import { Container } from "@mui/material";
function Header() {
  return (
    <Container className="site-header text-black font-extralight  text-center " maxWidth={false} sx={{
      borderBottom: "1px solid aquamarine",
      padding: { xs: 0, sm: 0, lg: 3 },
      px: { lg: 20 },
    }}>
      <MuiNav />
    </Container>
  );
}

export default Header;
