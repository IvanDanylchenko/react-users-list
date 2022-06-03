import styles from './UserListItem.module.css';
import TrashCircleIcon from 'mdi-react/TrashCircleIcon';

function UsersListItem (props) {
  const {
    user: { imgSrc, firstName, lastName, age, creator, isSelected },
    selectUser, removeUsers,
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
      <TrashCircleIcon
        className={styles.trashCircle}
        size={40}
        onClick={() => removeUsers()}
      />
    </li>
  );
}

export default UsersListItem;
