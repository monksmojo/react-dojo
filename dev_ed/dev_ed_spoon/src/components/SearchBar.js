import { FormStyle } from "./Styled";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();

  const searchSubmitHandler = (event) => {
    event.preventDefault();
    console.log(searchText);
    navigate(`/search/${searchText}`);
  };

  return (
    <FormStyle onSubmit={searchSubmitHandler}>
      <div>
        <FaSearch></FaSearch>
        <input
          value={searchText}
          onChange={(event) => {
            setSearchText(event.target.value);
          }}
          type="text"
        />
        <button>search</button>
      </div>
    </FormStyle>
  );
}

export default SearchBar;
