import React from "react";
import { TToDo } from "../modules/todos";
import ToDoItem from "./ToDoItem";

interface IToDoList {
  todos: TToDo[];
  onToggle: (id: number) => void;
  onRemove: (id: number) => void;
}

const ToDoList: React.FC<IToDoList> = ({ todos, onToggle, onRemove }) => {
  return (
    <ul>
      {todos.length === 0 ? (
        <p>등록된 항목이 없습니다</p>
      ) : (
        <>
          {todos.map((todo) => {
            return (
              <ToDoItem
                todo={todo}
                onToggle={onToggle}
                onRemove={onRemove}
                key={todo.id}
              />
            );
          })}
        </>
      )}
    </ul>
  );
};

export default ToDoList;
