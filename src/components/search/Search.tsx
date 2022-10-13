import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import "./Search.css";

const Search = () => {
  const { query, setQuery } = useContext(UserContext);
  return (
    <>
      <form className='input-container'>
        <label className='label'>Search</label>
        <input
          type='text'
          className='input'
          id='search'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </form>
      <input type='checkbox' id='check' className='toggle' />
      <label>fhhj</label>
    </>
  );
};

export default Search;
