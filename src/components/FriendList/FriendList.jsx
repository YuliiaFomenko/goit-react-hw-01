import React from 'react';
import FriendListItem from '../FriendListItem/FriendListItem.jsx';
import s from './FriendList.module.css';

const FriendList = ({ friends }) => {
  return (
    <div>
      <ul className={s.friendList}>
        {friends.map(friend => (
          <li className={s.friendListItem} key={friend.id}>
            <FriendListItem
              avatar={friend.avatar}
              name={friend.name}
              isOnline={friend.isOnline}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FriendList;
