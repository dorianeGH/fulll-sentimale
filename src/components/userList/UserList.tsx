import { useContext, useEffect, useState } from "react";
import { ModeContext } from "../../contexts/ModeContext";
import { UserContext } from "../../contexts/UserContext";
import Card, { User } from "../card/Card";
import Checkbox from "../checkbox/Checkbox";
import "./UserList.css";

const UserList = () => {
  const [selectedUsers, setSelectedUsers] = useState<string[]>([]);
  const [isSelectAll, setIsSelectAll] = useState(false);
  const { searchResults, setSearchResults, errors } = useContext(UserContext);
  const { editMode } = useContext(ModeContext);

  const handleSelectAll = () => {
    setIsSelectAll(!isSelectAll);
    setSelectedUsers(searchResults.map((user: User) => user.id.toString()));
    if (isSelectAll) {
      setSelectedUsers([]);
    }
  };

  const handleDelete = () => {
    setSearchResults(
      searchResults.filter(
        (user: User) => !selectedUsers.includes(user.id.toString())
      )
    );
    setSelectedUsers([]);
  };

  const handleDuplicate = () => {
    let duplicatedUsers: any = [];
    let newId = "";
    /* generate a newId */
    const generateId = () => {
      const generatedId = Math.floor(Math.random() * 100).toString();
      if (!selectedUsers.includes(generatedId)) {
        newId = generatedId;
      }
    };
    generateId();
    /* get users in temp array */
    for (const el of selectedUsers) {
      if (searchResults.map((user) => user.id.toString()).includes(el)) {
        if (searchResults) {
          duplicatedUsers.push({
            ...searchResults.find((user: User) => user.id.toString() === el),
            id: newId,
          });
        }
      }
      setSearchResults(duplicatedUsers.concat(searchResults));
      setSelectedUsers([]);
    }
    duplicatedUsers = [];
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
    <h3 style={{ display: "flex", justifyContent: "center" }}>
      Nothing to display
    </h3>
  ) : (
    <>
      <div className='list-container'>
        {editMode === "on" && (
          <div className='action-bar'>
            <div className='action-bar-left'>
              <Checkbox
                type='checkbox'
                name='selectAll'
                id='selectAll'
                handleClick={handleSelectAll}
                isChecked={isSelectAll}
              />
              <span
                style={{ paddingLeft: "10px", color: "var(--darker-grey)" }}
              >
                {`- ${selectedUsers.length}`} elements selected
              </span>
            </div>
            <div className='action-bar-right'>
              <img
                src='https://cdn-icons-png.flaticon.com/512/3991/3991529.png'
                alt='duplicate'
                onClick={handleDuplicate}
              />
              <img
                src='https://cdn-icons-png.flaticon.com/512/1214/1214428.png'
                alt='delete'
                style={{ marginLeft: "10px" }}
                onClick={handleDelete}
              />
            </div>
          </div>
        )}
        <Card
          selectedUsers={selectedUsers}
          setSelectedUsers={setSelectedUsers}
        />
      </div>
    </>
  );
};

export default UserList;
