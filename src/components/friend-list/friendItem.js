import styles from './friendlist.module.css';
const FriendsListItem = ({ id, avatar, name, isOnline }) => {
  return (
    <li className={styles.Item_friend} key={id}>
      {isOnline ? (
        <span className={styles.Status} style={{ backgroundColor: 'green' }}>
          {isOnline}
        </span>
      ) : (
        <span className={styles.Status} style={{ backgroundColor: 'red' }}>
          {isOnline}
        </span>
      )}
      <span className={styles.Status}>{isOnline}</span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className={styles.Name}>{name}</p>
    </li>
  );
};

export default FriendsListItem;
