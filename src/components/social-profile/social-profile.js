import React from 'react';
import PropTypes from 'prop-types'

import styles from '../social-profile/socialprofile.module.css'


export const Usercard = ({ username, tag, location, avatar, followers, views, likes }) => {
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
                <span className={styles.Quantity}>{followers}</span>
            </li>
            <li>
                <span className={styles.Label}>Views</span>
                <span className={styles.Quantity}>{views}</span>
            </li>
            <li>
                <span className={styles.Label}>Likes</span>
                <span className={styles.Quantity}>{likes}</span>
            </li>
        </ul>
    </div>
    )}

Usercard.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes:PropTypes.number.isRequired,
}
