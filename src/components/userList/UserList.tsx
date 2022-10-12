import { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import "./UserList.css";

const UserList = () => {
  const [users, setUsers] = useState(false);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [error, setSerror] = useState("no res");
  const { searchResults } = useContext(UserContext);

  return (
    <div className='list-container'>
      <div className='action-bar'>
        <div className='action-bar-left'>
          <input type='checkbox'></input>
          <span style={{ paddingLeft: "10px", color: "var(--darker-grey)" }}>
            {`${selectedUsers.length}`} elements selected
          </span>
        </div>
        <div className='action-bar-right'>
          <input type='checkbox'></input>
          <input type='checkbox'></input>
        </div>
      </div>
      <div className='list'>
        {searchResults.map((user: any) => (
          <div className='card card-shadow'>
            <div className='card-avatar'>
              <img src={user.avatar_url} alt='avatar' />
            </div>
            <div className='card-body'>{user.id}</div>
            <div className='card-body'>{user.login}</div>
            <div className='card-footer'>
              <button className='btn'>View profile</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;
