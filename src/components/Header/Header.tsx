import "./Header.scss";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import SiteNav from "../SiteNav/SiteNav";
function Header() {
  const {theme} = useContext(ThemeContext); 
  return (
    <header className="site-header p-5 text-black font-extralight  text-center w-screen">
      <SiteNav />
    </header>
  );
}

export default Header;
