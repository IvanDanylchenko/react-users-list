import styles from './UserListItem.module.css';
import TrashCircleIcon from 'mdi-react/TrashCircleIcon';

function UsersListItem (props) {
  const {
    user: { imgSrc, firstName, lastName, age, creator, isSelected },
    selectUser,
    removeUsers,
  } = props;

  const liStyle = {
    backgroundColor: `${isSelected ? '#d6ec6a' : '#d7ddd7'}`,
  };

  return (
    <li
      className={styles.userItem}
      onClickCapture={() => selectUser()}
      style={liStyle}
    >
      <img
        className={styles.userImg}
        src={imgSrc}
        alt={`${firstName} ${lastName}`}
      />
      <div className={styles.userInfo}>
        <h1>
          {firstName} {lastName} {age}
        </h1>
        <p>{creator}</p>
      </div>
      <button className={styles.usersListBtn} onClick={() => removeUsers()}>
        <TrashCircleIcon size={40} />
      </button>
    </li>
  );
}

export default UsersListItem;
