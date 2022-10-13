import "./App.css";
import Header from "./components/header/Header";
import Search from "./components/search/Search";
import UserList from "./components/userList/UserList";
import { UserContextProvider } from "./contexts/UserContext";
import { ModeContextProvider } from "./contexts/ModeContext";

function App() {
  return (
    <UserContextProvider>
      <ModeContextProvider>
        <div className='body'>
          <Header />
          <Search />
          <UserList />
        </div>
      </ModeContextProvider>
    </UserContextProvider>
  );
}

export default App;
