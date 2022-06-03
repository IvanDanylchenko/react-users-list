import UsersListItem from '../UsersList/UserListItem';

function UsersList ({ users, setUsers, setUsersList }) {
  const mapUser = (u, index) => {
    const selectUser = () => {
      const newUsers = [...users];
      newUsers[index].isSelected = !newUsers[index].isSelected;
      setUsers(newUsers);
    };

    const removeUsers = () => {
      const newUsersList = [...users];
      newUsersList.splice(index, 1);
      setUsersList(newUsersList);
    };

    return (
      <UsersListItem
        key={u.id}
        user={u}
        selectUser={selectUser}
        removeUsers={removeUsers}
      />
    );
  };

  return <ul>{users.map(mapUser)}</ul>;
}

export default UsersList;
