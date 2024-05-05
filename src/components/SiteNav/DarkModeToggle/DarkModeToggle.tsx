import { useContext } from "react";
import styles from "./DarkModeToggle.module.scss";
import { FaSun, FaMoon } from "react-icons/fa";
import { ThemeContext } from "../../../contexts/ThemeContext";



const DarkModeToggle = () => {
  const { theme, toggle } = useContext(ThemeContext);

  return (
    <button className={`${styles.toggle} ${styles[theme]}`}
      onClick={toggle}>
      {theme === "light" ? <FaMoon style={{ color: "#363333" }} /> : <FaSun style={{ color: "white" }} />}
    </button>
  );
};

export default DarkModeToggle;
