import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";

function MainNav(props) {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/new-meetups">New Meetups</Link>
          </li>
          <li>
            <Link to="/fav-meetups">Fav Meetups</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNav;
