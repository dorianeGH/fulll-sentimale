import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import Card, { User } from "../card/Card";
import Checkbox from "../checkbox/Checkbox";
import "./UserList.css";

const UserList = () => {
  const [selectedUsers, setSelectedUsers] = useState<any[]>([]);
  const [isSelectAll, setIsSelectAll] = useState(false);

  const { searchResults, setSearchResults, errors } = useContext(UserContext);
  // ischeck= selectedUsers, setIsCheck= setSelectedUsers

  const handleSelectAll = (e: any) => {
    setIsSelectAll(!isSelectAll);
    setSelectedUsers(searchResults.map((user: User) => user.id.toString()));
    if (isSelectAll) {
      setSelectedUsers([]);
    }
  };
  useEffect(
    () =>
      console.log("selectedUsers", selectedUsers, "etisSelectAll", isSelectAll),
    [selectedUsers, isSelectAll]
  );

  const handleDelete = (e: any) => {
    setSearchResults(
      searchResults.filter(
        (user: User) => !selectedUsers.includes(user.id.toString())
      )
    );
    setSelectedUsers([]);
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
            <Checkbox
              type='checkbox'
              name='selectAll'
              id='selectAll'
              handleClick={handleSelectAll}
              isChecked={isSelectAll}
            />
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
              //onChange={handleChange}
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
