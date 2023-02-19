import { FriendItem } from "./FriendListItem.styled";

export const FriendListItem = ({avatar, name, isOnline, id}) => { 
    return <FriendItem key={id}>
        <span class="status">{ isOnline}</span>
  <img className="avatar" src={avatar} alt="User avatar" width="48" />
        <p className="name">{ name}</p>
</FriendItem>
};