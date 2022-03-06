import classes from "./LandingPage.module.css";
import MainNav from "./MainNavigation";

function LandingPage(props) {
  return (
    <div>
      <MainNav />
      <main className={classes.main}>{props.children}</main>
    </div>
  );
}

export default LandingPage;
