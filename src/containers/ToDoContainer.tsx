import { useDispatch, useSelector } from "react-redux";
import ToDoInsert from "../components/ToDoInsert";
import ToDoList from "../components/ToDoList";
import { TRootState } from "../modules";
import { addToDo, removeToDo, toggleToDo } from "../modules/todos";

const ToDoContainer = () => {
  const todos = useSelector((state: TRootState) => state.todos);

  const dispatch = useDispatch();

  const onInsert = (text: string) => dispatch(addToDo(text));

  const onToggle = (id: number) => dispatch(toggleToDo(id));

  const onRemove = (id: number) => dispatch(removeToDo(id));

  return (
    <>
      <ToDoInsert onInsert={onInsert} />
      <ToDoList todos={todos} onToggle={onToggle} onRemove={onRemove} />
    </>
  );
};

export default ToDoContainer;
