import "./Header.scss";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import MuiNav from "../SiteNav/MuiNav";
function Header() {
  const { theme } = useContext(ThemeContext);
  return (
    <header className="site-header p-5 text-black font-extralight  text-center w-screen">
      <MuiNav />
    </header>
  );
}

export default Header;
