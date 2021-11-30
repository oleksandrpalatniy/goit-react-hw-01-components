import styles from './friendlist.module.css';
import FriendsListItem from './friendItem';

export const FriendList = ({ friends }) => {
  return (
    <ul className={styles.FriendList}>
      {friends.map(el => (
        <FriendsListItem
          avatar={el.avatar}
          name={el.name}
          isOnline={el.isOnline}
          id={el.id}
        />
      ))}
    </ul>
  );
};
