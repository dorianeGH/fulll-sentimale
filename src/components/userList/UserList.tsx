import { useState } from "react";
import "./UserList.css";

const UserList = () => {
  const [users, setUsers] = useState(false);
  const [selectedUsers, setSelectedUsers] = useState([]);

  return (
    <div className='list-container'>
      {users && (
        <>
          <div className='action-bar'>
            <div className='action-bar-left'>
              <input type='checkbox'></input>
              <span
                style={{ paddingLeft: "10px", color: "var(--darker-grey)" }}
              >
                {`${selectedUsers.length}`} elements selected
              </span>
            </div>
            <div className='action-bar-right'>
              <input type='checkbox'></input>
              <input type='checkbox'></input>
            </div>
          </div>
          <div className='list'></div>
        </>
      )}
    </div>
  );
};

export default UserList;
