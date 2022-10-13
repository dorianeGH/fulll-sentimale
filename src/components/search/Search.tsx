import { useContext } from "react";
import { ModeContext } from "../../contexts/ModeContext";
import { UserContext } from "../../contexts/UserContext";
import "./Search.css";

const Search = () => {
  const { query, setQuery } = useContext(UserContext);
  const { editMode, toggleEditMode } = useContext(ModeContext);
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
      <input
        type='checkbox'
        checked={editMode === "on"}
        onChange={toggleEditMode}
        id={editMode}
        className='toggle'
      />
      <label className='switch'>Edit mode:{editMode}</label>
    </>
  );
};

export default Search;
