import PropTypes from 'prop-types';

export default function FriendList({ friends }) {
  return (
    <section className="friends">
      <ul className="friend-list">
        {friends.map(({ avatar, name, isOnline, id }) => (
          <li key={id}>
            <span className="status">{isOnline}</span>
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
  
