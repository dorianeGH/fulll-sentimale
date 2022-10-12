import {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
interface Props {
  query: string;
  setQuery: Dispatch<SetStateAction<string>>;
  searchResults: [];
  setSearchResults: Dispatch<SetStateAction<[]>>;
  errors: string;
}
export const UserContext = createContext<Props>({} as any);
export const UserContextProvider = ({ children }: any) => {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState<[]>([]);
  const [errors, setErrors] = useState("");

  const getUser = async () => {
    const controller = new AbortController();
    const signal = controller.signal;
    fetch(`https://api.github.com/search/users?q="${query}"`, { signal })
      .then((res) => res.json())
      .then((data) => {
        setSearchResults(data.items);
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("resquest cancelled");
        } else {
          setErrors("autre erreur");
        }
      });
    // alert("this is the alert");

    return () => {
      controller.abort();
    };
  };

  useEffect(() => {
    getUser();
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
