import "./App.css";
import Header from "./components/Header";
import Search from "./components/Search";
import UserList from "./components/UserList";
import { UserContextProvider } from "./contexts/UserContext";

function App() {
  return (
    <UserContextProvider>
      <div className='App'>
        <Header />
        <Search />
        <UserList />
      </div>
    </UserContextProvider>
  );
}

export default App;
