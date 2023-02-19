import PropTypes from 'prop-types';
import { ListOfFriends } from './FriendList.styled';


import { FriendListItem } from 'components/FriendListItem/FriendListItem';


export const FriendList = ({friends}) => { 
    return <ListOfFriends>
       { friends.map(({avatar,name, isOnline,id})=><FriendListItem
            avatar={avatar}
            name={name}
            isOnline={isOnline}
            id={id}
        />) }
    </ListOfFriends>
};


FriendListItem.PropTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
};