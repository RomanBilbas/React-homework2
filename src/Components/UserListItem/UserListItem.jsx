import React from "react";
import { GiTrashCan } from "react-icons/gi";
import style from "../UserListItem/index.module.css";

function UserListItem(props) {
  const { user: u, index, buttondelete } = props;

  return (
    <div>
      <li key={u.id} className={style.userListItem}>
        <img
          width="50px"
          height="50px"
          src={u.photoSrc}
          alt={`${u.firstName} ${u.lastName}`}
        />
        <p>{`${u.firstName} ${u.lastName} ${u.age}`}</p>
        <button onClick={() => buttondelete(index)}>
          <GiTrashCan />
        </button>
      </li>
    </div>
  );
}

export default UserListItem;
