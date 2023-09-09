import { NavLink } from "react-router-dom";
import Styles from "./AppNav.module.css";

function AppNav() {
  return (
    <nav className={Styles.nav}>
      <ul>
        <li>
          <NavLink to="/app/cities">Cities</NavLink>
        </li>
        <li>
          <NavLink to="/app/countries">Countries</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default AppNav;
