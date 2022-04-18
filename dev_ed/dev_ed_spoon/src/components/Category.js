import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import { List, StyledNavLink } from "./Styled";
import { NavLink } from "react-router-dom";

function Category() {
  return (
    <List>
      <StyledNavLink to={"/cuisine/Italian"}>
        <FaPizzaSlice />
        <h4>Italian</h4>
      </StyledNavLink>
      <StyledNavLink to={"/cuisine/Japaneses"}>
        <GiChopsticks />
        <h4>Japanese</h4>
      </StyledNavLink>
      <StyledNavLink to={"/cuisine/American"}>
        <FaHamburger />
        <h4>American</h4>
      </StyledNavLink>
      <StyledNavLink to={"/cuisine/Thai"}>
        <GiNoodles />
        <h4>Thai</h4>
      </StyledNavLink>
    </List>
  );
}

export default Category;
