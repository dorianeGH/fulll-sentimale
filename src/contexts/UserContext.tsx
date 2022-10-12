import {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { User } from "../components/card/Card";
interface Props {
  query: string;
  setQuery: Dispatch<SetStateAction<string>>;
  searchResults: User[];
  setSearchResults: Dispatch<SetStateAction<User[]>>;
  errors: string;
}
export const UserContext = createContext<Props>({} as any);
export const UserContextProvider = ({ children }: any) => {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState<User[]>([]);
  const [errors, setErrors] = useState("");

  const getUser = () => {
    if (query !== "") {
      const controller = new AbortController();
      const signal = controller.signal;
      fetch(`https://api.github.com/search/users?q="${query}"`, { signal })
        .then((res) => res.json())
        .then((data) => {
          if (data.message) {
            setErrors(data.message);
          }
          setSearchResults(data.items);
        })
        .catch((err) => {
          if (err.name === "AbortError") {
            console.log("resquest cancelled");
          } else {
            console.log(err);
          }
        });

      return () => {
        controller.abort();
      };
    }
    //si searchbar empty reinitialise to empty
    setSearchResults([]);
  };

  useEffect(() => {
    return getUser();
  }, [query]);

  useEffect(() => console.log("searchResults", searchResults), [searchResults]);

  const contextValue: Props = {
    query,
    setQuery,
    searchResults,
    setSearchResults,
    errors,
  };
  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};
