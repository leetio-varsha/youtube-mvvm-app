import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.scss";

export const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <ul>
        <li>
          <NavLink
            to="/"
            end
            className={({ isActive }) => (isActive ? `${styles.navLink} ${styles.activeLink}` : styles.navLink)}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/video"
            className={({ isActive }) => (isActive ? `${styles.navLink} ${styles.activeLink}` : styles.navLink)}
          >
            Video
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/gif"
            className={({ isActive }) => (isActive ? `${styles.navLink} ${styles.activeLink}` : styles.navLink)}
          >
            Gif
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
