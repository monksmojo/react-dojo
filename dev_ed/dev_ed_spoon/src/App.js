import Pages from "./pages/Pages";
import Category from "./components/Category";
import SearchBar from "./components/SearchBar";
import { Logo, Nav } from "./components/Styled";
import { GiKnifeFork } from "react-icons/gi";
function App() {
  return (
    <>
      <Nav>
        <GiKnifeFork />
        <Logo to={"/"}>Spoons</Logo>
      </Nav>
      <SearchBar />
      <Category />
      <Pages />
    </>
  );
}

export default App;
