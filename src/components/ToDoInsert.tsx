import { FormEvent, useState } from "react";

interface IToDoInsertProps {
  onInsert: (text: string) => void;
}

const ToDoInsert: React.FC<IToDoInsertProps> = ({ onInsert }) => {
  const [value, setValue] = useState("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    onInsert(value);
    setValue("");
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          value={value}
          onChange={(e) => onChange(e)}
          placeholder="할 일을 입력하세요"
        />
        <button type="submit">등록</button>
      </form>
    </div>
  );
};

export default ToDoInsert;
