import PropTypes from 'prop-types';
import css from '../css/Profile.module.css';

export default function Profile(props) {
  const { username, tag, location, avatar, stats } = props;
  const { followers, views, likes } = stats;
  return (
    <div className={css.profile}>
      <div className="description">
        <img src={avatar} alt={tag} width="300" className={css.avatar} />
        <p className={css.name}>
          <b>{username}</b>
        </p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.stats}>
        <li>
          <span className="label">Followers</span>
          <span className={css.quantity}>{followers}</span>
        </li>
        <li>
          <span className="label">Views</span>
          <span className={css.quantity}>{views}</span>
        </li>
        <li>
          <span className="label">Likes</span>
          <span className={css.quantity}>{likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};
