import AddTask from "./components/AddTask";
import Counter from "./components/Counter";
import Header from "./components/Header";
import Todo from "./components/Todo";

function App() {
  return (
    <>
      <div className="bg-rich-black h-screen">
        <Header />
        <Counter />
        <AddTask />
        <Todo />
        <Todo />
      </div>
    </>
  );
}

export default App;
