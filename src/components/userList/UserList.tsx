import { useCallback, useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import "./UserList.css";

interface UserProps {
  avatar_url: string;
  id: number;
  login: string;
}

const UserList = () => {
  const [isSelected, setIsSelected] = useState<boolean>(false);
  const [selectedUsers, setSelectedUsers] = useState<any[]>([]);
  const { searchResults, errors } = useContext(UserContext);

  const handleClick = useCallback(
    (id: number) => {
      if (!selectedUsers.includes(id)) {
        setIsSelected(!isSelected);
        setSelectedUsers([...selectedUsers, id]);
        console.log("passe la ");
      } else {
        setIsSelected(!isSelected);
        setSelectedUsers(
          selectedUsers.filter((savedId: number) => savedId !== id)
        );
        console.log("passe ici et là ");
      }
    },
    [isSelected, selectedUsers]
  );

  return !searchResults || errors ? (
    <span style={{ display: "flex", justifyContent: "center", color: "red" }}>
      {errors}
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
              /* onClick={handleDelete} */
            />
          </div>
        </div>
        <div className='list'>
          {searchResults.map(({ avatar_url, id, login }: UserProps) => (
            <div className='card card-shadow'>
              <input type='checkbox' onClick={() => handleClick(id)}></input>
              <div className='card-avatar'>
                <img src={avatar_url} alt='avatar' />
              </div>
              <div className='card-body'>{id}</div>
              <div className='card-body'>{login}</div>
              <div className='card-footer'>
                <button className='btn'>View profile</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default UserList;
