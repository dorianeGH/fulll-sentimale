import { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import Card, { User } from "../card/Card";
import "./UserList.css";

const UserList = () => {
  const [selectedUsers, setSelectedUsers] = useState<any[]>([]);
  const { searchResults, setSearchResults, errors } = useContext(UserContext);

  const handleDelete = () => {
    setSearchResults(
      searchResults.filter((user: User) => !selectedUsers.includes(user.id))
    );
    setSelectedUsers(
      searchResults.filter((user: User) => selectedUsers.includes(user.id))
    );
  };
  return !searchResults || errors ? (
    <span
      style={{
        display: "flex",
        justifyContent: "center",
        color: "red",
        margin: "0 auto",
      }}
    >
      {`${errors}. Please try again in few minutes`}
    </span>
  ) : searchResults.length < 1 ? (
    <h3 style={{ display: "flex", justifyContent: "center" }}>No user found</h3>
  ) : (
    <>
      <div className='list-container'>
        <div className='action-bar'>
          <div className='action-bar-left'>
            <input type='checkbox'></input>
            <span style={{ paddingLeft: "10px", color: "var(--darker-grey)" }}>
              {`${selectedUsers.length}`} elements selected
            </span>
          </div>
          <div className='action-bar-right'>
            <img
              src='https://cdn-icons-png.flaticon.com/512/3991/3991529.png'
              alt='duplicate'
              /* onClick={handleDuplicate} */
            />
            <img
              src='https://cdn-icons-png.flaticon.com/512/1214/1214428.png'
              alt='delete'
              style={{ marginLeft: "10px" }}
              onClick={handleDelete}
            />
          </div>
        </div>
        <Card
          selectedUsers={selectedUsers}
          setSelectedUsers={setSelectedUsers}
        />
      </div>
    </>
  );
};

export default UserList;
