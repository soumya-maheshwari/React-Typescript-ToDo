import React, { useState } from "react";
import "./App.css";
import InputField from "./components/InputField";
import { Todo } from "./model";
import TodoList from "./components/TodoList";

// let name: string;
// let age: number | String; // uinion
// let isStudent: boolean;
// let hobbies: string[];
// let role: [number, string];

// type Person = {
//   name: string;
//   age?: number; // optional
// };

// let lotsOfPeoplae: Person[];

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }
  };
  console.log(todos);

  console.log(todo);

  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todos={todos} setTodos={setTodos} />
      {/* {todos.map((t) => {
        return <li>{t.todo}</li>;
      })} */}
    </div>
  );
};

export default App;
