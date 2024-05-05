import "./Header.scss";
import MuiNav from "../SiteNav/MuiNav";
function Header() {
  return (
    <header className="site-header p-5 text-black font-extralight  text-center w-screen">
      <MuiNav />
    </header>
  );
}

export default Header;
