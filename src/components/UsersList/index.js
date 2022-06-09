import UsersListItem from '../UsersList/UserListItem';

function UsersList ({ users, setUsers }) {
  const mapUser = (u, index) => {
    const selectUser = () => {
      const newUsers = [...users];
      newUsers[index].isSelected = !newUsers[index].isSelected;
      setUsers(newUsers);
    };

    const removeUsers = () => {
      const newUsers = [...users];
      newUsers.splice(index, 1);
      setUsers(newUsers);
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
