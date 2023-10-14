import ListItem from "./ListItem";

import { useSelector } from "react-redux";

const DisplayTodo = () => {
  const todoList = useSelector((state) => state.todo.todoList);

  return (
    <div className="mt-32 max-sm:mt-28 md:w-[60%] mx-auto w-[80%]">
      <h2 className="mx-auto font-bold text-slate-500 text-2xl my-4 text-center">
        To-Do List
      </h2>
      <ul>
        {todoList.map((todo) => (
          <ListItem key={todo.id} id={todo.id} text={todo.text} />
        ))}
      </ul>
    </div>
  );
};

export default DisplayTodo;
