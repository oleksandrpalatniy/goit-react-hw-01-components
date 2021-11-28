import styles from './friendlist.module.css'

const FriendsListItem = ({ id, avatar, name, isOnline }) => {
    return (
        <>
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
    </>
    )
}

export const FriendList = ({friends}) => {
    return (
    <ul className={styles.FriendList}>
            {friends.map(el => (
            <li className={styles.Item_friend} key={el.id}>
            <FriendsListItem
                avatar={el.avatar}
                name={el.name}
                isOnline={el.isOnline}
                id={el.id}
                    />
                    </li>
            ))}
    </ul>
    )
}

