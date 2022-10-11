import "./App.css";
import Header from "./components/header/Header";
import Search from "./components/search/Search";
import UserList from "./components/userList/UserList";
import { UserContextProvider } from "./contexts/UserContext";

function App() {
  return (
    <UserContextProvider>
      <div className='body'>
        <Header />
        <Search />
        <UserList />
      </div>
    </UserContextProvider>
  );
}

export default App;
