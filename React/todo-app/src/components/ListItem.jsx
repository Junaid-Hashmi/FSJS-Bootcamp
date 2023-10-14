import { useState } from "react";
import edit from "../assets/edit-alt.svg";
import trash from "../assets/trash.svg";
import save from "../assets/save.svg";
import { useDispatch } from "react-redux";
import {
  deleteTodo,
  updateTodo,
  completeTodo,
} from "../features/todo/todoSlice";

const ListItem = ({ id, text }) => {
  const dispatch = useDispatch();

  const [editInput, setEditInput] = useState(text);
  const [editEnabled, setEditEnabled] = useState(false);
  const [inputDisabled, setInputDisabled] = useState(true);
  const [itemChecked, setItemChecked] = useState(false);

  return (
    <li
      className={`flex gap-x-3 border-2 border-slate-300 p-2 ${
        itemChecked ? "bg-slate-100" : ""
      }`}
    >
      <div className="flex-1 flex max-sm:w-[80%]">
        <input
          type="checkbox"
          className="mr-2 self-center scale-110"
          checked={itemChecked}
          onChange={(e) => {
            setItemChecked(e.currentTarget.checked);
            dispatch(completeTodo(id));
          }}
        />
        <input
          className={`w-full text-slate-600 font-semibold text-lg disabled:bg-inherit flex-1 px-1 focus:outline-1 focus:outline-slate-300 ${
            itemChecked ? "line-through decoration-red-700 decoration-2" : ""
          }`}
          value={editInput}
          disabled={inputDisabled}
          onChange={(e) => setEditInput(e.target.value)}
          title={editInput}
        />
      </div>
      <div className="ml-auto">
        {editEnabled ? (
          <button
            className="mr-1"
            onClick={() => {
              setEditEnabled(false);
              dispatch(updateTodo({ id, editInput }));
              setInputDisabled(true);
            }}
          >
            <img src={save} alt="save" />
          </button>
        ) : (
          <button
            className="mr-1 "
            onClick={() => {
              setEditEnabled(true);
              setInputDisabled(false);
            }}
          >
            <img src={edit} alt="edit" />
          </button>
        )}
        <button onClick={() => dispatch(deleteTodo(id))}>
          <img src={trash} alt="trash" />
        </button>
      </div>
    </li>
  );
};

export default ListItem;
