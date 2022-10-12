import { createContext, useEffect, useState } from "react";
interface Props {
  query: any;
  setQuery: any;
  searchResults: any;
  setSearchResults: any;
}
export const UserContext = createContext<Props>({} as any);
export const UserContextProvider = ({ children }: any) => {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (query !== "") {
      fetch(`https://api.github.com/search/users?q="${query}"`)
        .then((res) => res.json())
        .then((data) => setSearchResults(data.items));
    }
  }, [query]);

  useEffect(() => console.log("searchResults", searchResults), [searchResults]);

  const contextValue: Props = {
    query,
    setQuery,
    searchResults,
    setSearchResults,
  };
  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};
