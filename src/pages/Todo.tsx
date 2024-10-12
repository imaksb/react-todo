import { useState } from "react";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const Todo = () => {
  const [todo, setTodo] = useState<Todo[]>([]);
  const [textInput, setTextInput] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (textInput.trim() === "") return alert("Please enter a valid todo");
    const newTodo: Todo = {
      id: Date.now(),
      text: e.currentTarget.todo.value,
      completed: false,
    };
    setTextInput("");
    setTodo([...todo, newTodo]);
  };

  const handleDelete = (id: number) => {
    const newTodo = todo.filter((t) => t.id !== id);
    setTodo(newTodo);
  };

  const handleComplete = (id: number) => {
    const newTodo = todo.map((t) =>
      t.id === id ? { ...t, completed: !t.completed } : t
    );
    setTodo(newTodo);
  };

  return (
    <div className="max-w-md mx-auto p">
      <h1 className="text-2xl font-bold mb-4 mt-4">Simple Todo App</h1>
      <p className="mb-4">Please add to-dos item(s) through the input field</p>

      <form className="flex justify-between" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add todo..."
          name="todo"
          value={textInput}
          onChange={(e) => setTextInput(e.target.value)}
          className="border-2 border-gray-300 p-2 w-full"
        />
        <button type="submit" className="bg-green-700 text-white p-2 w-28">
          Add
        </button>
      </form>
      <div className="mt-4">
        <ul>
          {todo.map((t) => (
            <div
              key={t.id}
              className="flex justify-between items-center space-y-2"
            >
              <div className="flex items-center gap-2">
                <input type="checkbox" onClick={() => handleComplete(t.id)} />
                <li
                  key={t.id}
                  className={`text-xl ${
                    t.completed ? "line-through text-orange-500" : ""
                  }`}
                >
                  {t.text}
                </li>
              </div>
              <button
                className="bg-red-500 text-white p-2 w-28"
                onClick={() => handleDelete(t.id)}
              >
                Delete
              </button>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Todo;
