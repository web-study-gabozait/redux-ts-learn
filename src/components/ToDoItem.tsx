import { CSSProperties } from "react";
import { TToDo } from "../modules/todos";

interface IToDoItemProps {
  todo: TToDo;
  onToggle: (id: number) => void;
  onRemove: (id: number) => void;
}

const ToDoItem: React.FC<IToDoItemProps> = ({ todo, onToggle, onRemove }) => {
  const handleToggle = () => onToggle(todo.id);

  const handleRemove = () => onRemove(todo.id);

  const liStyle: CSSProperties = {
    display: "flex",
    alignItems: "center",
  };

  const textStyle: CSSProperties = {
    textDecoration: todo.done ? "line-through" : "none",
  };

  const removeStyle: CSSProperties = {
    color: "red",
    marginLeft: 8,
  };

  return (
    <li style={liStyle}>
      <span onClick={handleToggle} style={textStyle}>
        {todo.text}
      </span>
      <span onClick={handleRemove} style={removeStyle}>
        ❌
      </span>
    </li>
  );
};

export default ToDoItem;
