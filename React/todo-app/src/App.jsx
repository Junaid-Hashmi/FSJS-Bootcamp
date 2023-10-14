import NewTodo from "./components/NewTodo";
import DisplayTodo from "./components/DisplayTodo";

const App = () => {
  return (
    <>
      <div className="w-full h-12 bg-slate-800 text-slate-200 justify-center py-20">
        <NewTodo />
      </div>
      <DisplayTodo />
    </>
  );
};

export default App;
