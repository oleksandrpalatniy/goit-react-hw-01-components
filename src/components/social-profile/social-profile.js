import React from 'react';
import user from '../social-profile/user.json'
import PropTypes from 'prop-types'

// import './socialprofile.module.css'
import styles from '../social-profile/socialprofile.module.css'

const { username, tag, location, avatar, stats } = user;

export const Usercard =() => {
    return (<div className={styles.Profile}>
        <div className={styles.User}>
            <img className={styles.Avatar}
                src={avatar}
                alt={username}
                clas={styles.image}
            />
            <p className={styles.Name}>{username}</p>
            <p className={styles.Tag}>@{tag}</p>
            <p className={styles.Location}>{location}</p>
        </div>

        <ul className={styles.Statslist}>
            <li>
                <span className={styles.Label}>Followers</span>
                <span className={styles.Quantity}>{stats.followers}</span>
            </li>
            <li>
                <span className={styles.Label}>Views</span>
                <span className={styles.Quantity}>{stats.views}</span>
            </li>
            <li>
                <span className={styles.Label}>Likes</span>
                <span className={styles.Quantity}>{stats.likes}</span>
            </li>
        </ul>
    </div>
    )}

user.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string,
    location: PropTypes.string,
    avatar: PropTypes.string,
    stats:  PropTypes.string,
}
