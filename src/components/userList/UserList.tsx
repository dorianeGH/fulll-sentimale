import { useState } from "react";
import "./UserList.css";

const UserList = () => {
  const [users, setUsers] = useState(false);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [error, setSerror] = useState("no res");

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
        <div className='card card-shadow'>
          <div className='card-avatar'>
            <img src='https://unsplash.com/photos/mEZ3PoFGs_k' alt='avatar' />
          </div>
          <div className='card-body'>ID Login</div>
          <div className='card-footer'>
            <button className='btn'>View profile</button>
          </div>
        </div>
        <div className='card card-shadow'>
          <div className='card-avatar'>
            <img src='https://unsplash.com/photos/mEZ3PoFGs_k' alt='avatar' />
          </div>
          <div className='card-body'>ID Login</div>
          <div className='card-footer'>
            <button className='btn'>View profile</button>
          </div>
        </div>
        <div className='card card-shadow'>
          <div className='card-avatar'>
            <img src='https://unsplash.com/photos/mEZ3PoFGs_k' alt='avatar' />
          </div>
          <div className='card-body'>ID Login</div>
          <div className='card-footer'>
            <button className='btn'>View profile</button>
          </div>
        </div>
        <div className='card card-shadow'>
          <div className='card-avatar'>
            <img src='https://unsplash.com/photos/mEZ3PoFGs_k' alt='avatar' />
          </div>
          <div className='card-body'>ID Login</div>
          <div className='card-footer'>
            <button className='btn'>View profile</button>
          </div>
        </div>
        <div className='card card-shadow'>
          <div className='card-avatar'>
            <img src='https://unsplash.com/photos/mEZ3PoFGs_k' alt='avatar' />
          </div>
          <div className='card-body'>ID Login</div>
          <div className='card-footer'>
            <button className='btn'>View profile</button>
          </div>
        </div>
        <div className='card card-shadow'>
          <div className='card-avatar'>
            <img src='https://unsplash.com/photos/mEZ3PoFGs_k' alt='avatar' />
          </div>
          <div className='card-body'>ID Login</div>
          <div className='card-footer'>
            <button className='btn'>View profile</button>
          </div>
        </div>
        <div className='card card-shadow'>
          <div className='card-avatar'>
            <img src='https://unsplash.com/photos/mEZ3PoFGs_k' alt='avatar' />
          </div>
          <div className='card-body'>ID Login</div>
          <div className='card-footer'>
            <button className='btn'>View profile</button>
          </div>
        </div>
        <div className='card card-shadow'>
          <div className='card-avatar'>
            <img src='https://unsplash.com/photos/mEZ3PoFGs_k' alt='avatar' />
          </div>
          <div className='card-body'>ID Login</div>
          <div className='card-footer'>
            <button className='btn'>View profile</button>
          </div>
        </div>
        <div className='card card-shadow'>
          <div className='card-avatar'>
            <img src='https://unsplash.com/photos/mEZ3PoFGs_k' alt='avatar' />
          </div>
          <div className='card-body'>ID Login</div>
          <div className='card-footer'>
            <button className='btn'>View profile</button>
          </div>
        </div>
        <div className='card card-shadow'>
          <div className='card-avatar'>
            <img src='https://unsplash.com/photos/mEZ3PoFGs_k' alt='avatar' />
          </div>
          <div className='card-body'>ID Login</div>
          <div className='card-footer'>
            <button className='btn'>View profile</button>
          </div>
        </div>
        <div className='card card-shadow'>
          <div className='card-avatar'>
            <img src='https://unsplash.com/photos/mEZ3PoFGs_k' alt='avatar' />
          </div>
          <div className='card-body'>ID Login</div>
          <div className='card-footer'>
            <button className='btn'>View profile</button>
          </div>
        </div>
        <div className='card card-shadow'>
          <div className='card-avatar'>
            <img src='https://unsplash.com/photos/mEZ3PoFGs_k' alt='avatar' />
          </div>
          <div className='card-body'>ID Login</div>
          <div className='card-footer'>
            <button className='btn'>View profile</button>
          </div>
        </div>
        <div className='card card-shadow'>
          <div className='card-avatar'>
            <img src='https://unsplash.com/photos/mEZ3PoFGs_k' alt='avatar' />
          </div>
          <div className='card-body'>ID Login</div>
          <div className='card-footer'>
            <button className='btn'>View profile</button>
          </div>
        </div>
        <div className='card card-shadow'>
          <div className='card-avatar'>
            <img src='https://unsplash.com/photos/mEZ3PoFGs_k' alt='avatar' />
          </div>
          <div className='card-body'>ID Login</div>
          <div className='card-footer'>
            <button className='btn'>View profile</button>
          </div>
        </div>
        <div className='card card-shadow'>
          <div className='card-avatar'>
            <img src='https://unsplash.com/photos/mEZ3PoFGs_k' alt='avatar' />
          </div>
          <div className='card-body'>ID Login</div>
          <div className='card-footer'>
            <button className='btn'>View profile</button>
          </div>
        </div>
        <div className='card card-shadow'>
          <div className='card-avatar'>
            <img src='https://unsplash.com/photos/mEZ3PoFGs_k' alt='avatar' />
          </div>
          <div className='card-body'>ID Login</div>
          <div className='card-footer'>
            <button className='btn'>View profile</button>
          </div>
        </div>
        <div className='card card-shadow'>
          <div className='card-avatar'>
            <img src='https://unsplash.com/photos/mEZ3PoFGs_k' alt='avatar' />
          </div>
          <div className='card-body'>ID Login</div>
          <div className='card-footer'>
            <button className='btn'>View profile</button>
          </div>
        </div>
        <div className='card card-shadow'>
          <div className='card-avatar'>
            <img src='https://unsplash.com/photos/mEZ3PoFGs_k' alt='avatar' />
          </div>
          <div className='card-body'>ID Login</div>
          <div className='card-footer'>
            <button className='btn'>View profile</button>
          </div>
        </div>
        <div className='card card-shadow'>
          <div className='card-avatar'>
            <img src='https://unsplash.com/photos/mEZ3PoFGs_k' alt='avatar' />
          </div>
          <div className='card-body'>ID Login</div>
          <div className='card-footer'>
            <button className='btn'>View profile</button>
          </div>
        </div>
        <div className='card card-shadow'>
          <div className='card-avatar'>
            <img src='https://unsplash.com/photos/mEZ3PoFGs_k' alt='avatar' />
          </div>
          <div className='card-body'>ID Login</div>
          <div className='card-footer'>
            <button className='btn'>View profile</button>
          </div>
        </div>
        <div className='card card-shadow'>
          <div className='card-avatar'>
            <img src='https://unsplash.com/photos/mEZ3PoFGs_k' alt='avatar' />
          </div>
          <div className='card-body'>ID Login</div>
          <div className='card-footer'>
            <button className='btn'>View profile</button>
          </div>
        </div>
        <div className='card card-shadow'>
          <div className='card-avatar'>
            <img src='https://unsplash.com/photos/mEZ3PoFGs_k' alt='avatar' />
          </div>
          <div className='card-body'>ID Login</div>
          <div className='card-footer'>
            <button className='btn'>View profile</button>
          </div>
        </div>
        <div className='card card-shadow'>
          <div className='card-avatar'>
            <img src='https://unsplash.com/photos/mEZ3PoFGs_k' alt='avatar' />
          </div>
          <div className='card-body'>ID Login</div>
          <div className='card-footer'>
            <button className='btn'>View profile</button>
          </div>
        </div>
        <div className='card card-shadow'>
          <div className='card-avatar'>
            <img src='https://unsplash.com/photos/mEZ3PoFGs_k' alt='avatar' />
          </div>
          <div className='card-body'>ID Login</div>
          <div className='card-footer'>
            <button className='btn'>View profile</button>
          </div>
        </div>
        <div className='card card-shadow'>
          <div className='card-avatar'>
            <img src='https://unsplash.com/photos/mEZ3PoFGs_k' alt='avatar' />
          </div>
          <div className='card-body'>ID Login</div>
          <div className='card-footer'>
            <button className='btn'>View profile</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserList;
