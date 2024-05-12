import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Container, styled } from '@mui/material';


const Root = () => {

  const height = () => {
    const header = document.getElementsByClassName("site-header")[0] as HTMLHeadElement;
    const footer = document.getElementsByClassName("site-footer")[0] as HTMLElement;
    let l = 0;

    if (header && footer) {
      l = ((window.innerHeight) - (header.offsetHeight) - (footer.offsetHeight * 4)) * 100 / (window.innerHeight)
    }
    else {
      l = 50
    }
    return l
  }

  return (
    <div className="flex flex-col min-h-screen text-blue-500">
      <Header />
      <Container maxWidth={false} sx={{ mt: 4, mb: 4, px: { lg: 20 }, flexGrow: 1, display: 'flex' }}>
        <Outlet />
      </Container>
      <Footer />
    </div>
  );
};

export default Root;
