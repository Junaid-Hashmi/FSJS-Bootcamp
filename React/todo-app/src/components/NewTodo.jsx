import { useState } from "react";
import { addTodo } from "../features/todo/todoSlice";
import { useDispatch } from "react-redux";

const NewTodo = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  return (
    <div className="bg-white md:w-[60%] mx-auto my-8 w-[80%] pt-3 pb-5 px-5 rounded-md border shadow-xl max-sm:my-2">
      <h3 className="text-black font-semibold text-lg mb-2">New Todo: </h3>
      <form action="#" className="flex gap-2 max-sm:flex-col">
        <input
          type="text"
          className="border-2 border-slate-300 p-1 text-black rounded flex-1 focus:outline-none"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          type="submit"
          onClick={() => {
            if (!input) {
              alert("Enter a task");
            } else {
              dispatch(addTodo(input));
              setInput("");
            }
          }}
          className="bg-slate-800 px-3 py-1 rounded"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default NewTodo;
