import PropTypes from 'prop-types';
import { BsFillCircleFill } from 'react-icons/bs';
import '../css/utils/vars.css';
import css from '../css/FriendList.module.css';

export default function FriendList({ friends }) {
  return (
    <section className="friends">
      <ul className="friend-list">
        {friends.map(({ avatar, name, isOnline, id }) => (
          <li key={id} className={css.friend}>
            <span className="status">
              <BsFillCircleFill style={{ fill: isOnline ? 'green' : 'red' }} />
            </span>
            <img className="avatar" src={avatar} alt={name} width="48" />
            <p className="name">{name}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string,
      id: PropTypes.number,
      isOnline: PropTypes.bool,
    })
  ),
};
