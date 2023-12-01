import React from "react";
import "../components/styles.css";
import { Todo } from "../model";
import SingleTodoComp from "./SingleTodoComp";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}
const TodoList: React.FC<Props> = ({ todos, setTodos }: Props) => {
  return (
    <div className="todos">
      {todos &&
        todos.map((todo) => {
          return (
            <SingleTodoComp
              todo={todo}
              key={String(todo.id)}
              // key={todo.id}
              todos={todos}
              setTodos={setTodos}
            />
          );
        })}
    </div>
  );
};

export default TodoList;
