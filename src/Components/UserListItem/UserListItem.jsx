import React from "react";
import { GiTrashCan } from "react-icons/gi";
import style from "../UserListItem/index.module.css";

function UserListItem(props) {
  const { user: u, index, buttondelete, selectUser } = props;

  const itemStyle = {
    backgroundColor: u.isSelected ? "lightgreen" : "white",
  };

  return (
    <div>
      <li
        style={itemStyle}
        key={u.id}
        className={style.userListItem}
        onClickCapture={() => selectUser(index)}
      >
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
