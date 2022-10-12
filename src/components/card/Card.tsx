import {
  Dispatch,
  SetStateAction,
  useCallback,
  useContext,
  useState,
} from "react";
import "./Card.css";
import { UserContext } from "../../contexts/UserContext";

interface CardProps {
  selectedUsers: number[];
  setSelectedUsers: Dispatch<SetStateAction<number[]>>;
}
export interface User {
  avatar_url: string;
  id: number;
  login: string;
}
const Card = ({ selectedUsers, setSelectedUsers }: CardProps) => {
  const [isSelected, setIsSelected] = useState(false);
  const { searchResults } = useContext(UserContext);

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
  return (
    <div className='list'>
      {searchResults.map(({ avatar_url, id, login }: User) => (
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
  );
};

export default Card;
