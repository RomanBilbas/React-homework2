import { useState } from "react";
import UserListItem from "../UserListItem/UserListItem";
import style from "../UserListItem/index.module.css";

const userDb = [
  {
    id: 1,
    firstName: "Anton",
    lastName: "Bilbas",
    age: 25,
    photoSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9hoRBNPANLUMFuecXaifkEGqwQ31lAChJwpq5IBLb6oJAmYehjGOy_gd3PbjWncHIBSM&usqp=CAU",
  },
  {
    id: 2,
    firstName: "Ivo",
    lastName: "Ivovich",
    age: 30,
    photoSrc:
      "https://png.pngtree.com/element_our/png_detail/20181206/users-vector-icon-png_260862.jpg",
  },
  {
    id: 3,
    firstName: "Roman",
    lastName: "Bilbas",
    age: 20,
    photoSrc:
      "https://w7.pngwing.com/pngs/915/511/png-transparent-female-avatar-girl-face-woman-user-flat-classy-users-icon.png",
  },
  {
    id: 4,
    firstName: "Ivo",
    lastName: "Ivovich",
    age: 30,
    photoSrc:
      "https://png.pngtree.com/element_our/png_detail/20181206/users-vector-icon-png_260862.jpg",
  },
  {
    id: 5,
    firstName: "Ivo",
    lastName: "Ivovich",
    age: 30,
    photoSrc:
      "https://png.pngtree.com/element_our/png_detail/20181206/users-vector-icon-png_260862.jpg",
  },
  {
    id: 6,
    firstName: "Ivo",
    lastName: "Ivovich",
    age: 30,
    photoSrc:
      "https://png.pngtree.com/element_our/png_detail/20181206/users-vector-icon-png_260862.jpg",
  },
];
function UsersList() {
  const [users, setUsers] = useState(
    userDb.map((u) => ({ ...u, isSelected: false }))
  );

  function selectUser(index) {
    const usersCopy = [...users];
    usersCopy[index] = {
      ...usersCopy[index],
      isSelected: !users[index].isSelected,
    };

    setUsers(usersCopy);
  }
  function buttondelete(index) {
    const usersCopy = [...users];
    usersCopy.splice(index, 1);
    setUsers(usersCopy);
  }

  function mapUsers(u, index) {
    return (
      <UserListItem
        key={u.id}
        user={u}
        index={index}
        buttondelete={buttondelete}
        selectUser={selectUser}
      />
    );
  }
  return <ul className={style.usersList}>{users.map(mapUsers)}</ul>;
}

export default UsersList;
