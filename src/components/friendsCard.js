
const FriendsListItem = ({ id, avatar, name, isOnline }) => {
    return (
    <>
        <span className="status">{isOnline}</span>
        <img className="avatar" src={avatar} alt="User avatar" width="48" />
        <p className="name">{name}</p>  
    </>
    )
}

export const FriendList = ({friends}) => {
    return (
    <ul className="friend-list">
            {friends.map(el => (
            <li className="item" key={el.id}>
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

