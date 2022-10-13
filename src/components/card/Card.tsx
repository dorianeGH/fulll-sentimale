import {
  Dispatch,
  SetStateAction,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import "./Card.css";
import { UserContext } from "../../contexts/UserContext";
import Checkbox from "../checkbox/Checkbox";

interface CardProps {
  //selectedUsers: number[];
  selectedUsers: any;
  setSelectedUsers: Dispatch<SetStateAction<any[]>>;
}
export interface User {
  avatar_url: string;
  id: number;
  login: string;
}
const Card = ({ selectedUsers, setSelectedUsers }: CardProps) => {
  // ischeck= selectedUsers, setIsCheck= setSelectedUsers
  //const [isSelected, setIsSelected] = useState(false);
  const { searchResults, editMode } = useContext(UserContext);

  const handleClick = (e: any) => {
    const { id, checked } = e.target;
    setSelectedUsers([...selectedUsers, id]);
    if (!checked) {
      setSelectedUsers(selectedUsers.filter((user: User) => user !== id));
    }
  };
  useEffect(() => console.log("nouveau test", selectedUsers), [selectedUsers]);

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
