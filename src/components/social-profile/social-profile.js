import React from 'react';
import user from '../social-profile/user.json'
import PropTypes from 'prop-types'

const {username, tag, location, avatar, stats} = user;

export const Usercard =() => {
    return (<div>
        <div>
            <img
                src={avatar}
                alt={username}
                clas={avatar}
            />
            <p>{username}</p>
            <p>@{tag}</p>
            <p>{location}</p>
        </div>

        <ul>
            <li>
                <span>Followers</span>
                <span>{stats.followers}</span>
            </li>
            <li>
                <span>Views</span>
                <span>{stats.views}</span>
            </li>
            <li>
                <span>Likes</span>
                <span>{stats.likes}</span>
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