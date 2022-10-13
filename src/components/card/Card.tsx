import { Dispatch, SetStateAction, useContext } from "react";
import "./Card.css";
import { UserContext } from "../../contexts/UserContext";
import Checkbox from "../checkbox/Checkbox";
import { ModeContext } from "../../contexts/ModeContext";

interface CardProps {
  selectedUsers: string[];
  setSelectedUsers: Dispatch<SetStateAction<string[]>>;
}
export interface User {
  avatar_url: string;
  id: number;
  login: string;
}
const Card = ({ selectedUsers, setSelectedUsers }: CardProps) => {
  const { searchResults } = useContext(UserContext);
  const { editMode } = useContext(ModeContext);

  const handleClick = (e: any) => {
    const { id, checked } = e.target;
    setSelectedUsers([...selectedUsers, id]);
    if (!checked) {
      setSelectedUsers(selectedUsers.filter((user) => user !== id));
    }
  };

  return (
    <div className='list'>
      {searchResults.map(({ avatar_url, id, login }: User) => (
        <div className='card card-shadow'>
          {editMode === "on" && (
            <Checkbox
              key={id}
              type='checkbox'
              name={login}
              id={id.toString()}
              handleClick={handleClick}
              isChecked={selectedUsers.includes(id.toString())}
            />
          )}
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
  );
};

export default Card;
