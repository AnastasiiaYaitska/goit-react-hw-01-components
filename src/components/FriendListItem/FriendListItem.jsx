import { FriendItem,Status, Avatar, UserName } from "./FriendListItem.styled";

export const FriendListItem = ({avatar, name, isOnline, id}) => { 
    return <FriendItem key={id}>
        <Status isOnline = {isOnline}></Status>
  <Avatar src={avatar} alt="User avatar" width="50" />
        <UserName>{ name}</UserName>
</FriendItem>
};