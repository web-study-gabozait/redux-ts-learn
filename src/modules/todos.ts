const ADD_TODO = `todos/ADD_TODO` as const;
const TOGGLE_TODO = "todos/TOOGGLE_TODO" as const;
const REMOVE_TODO = "todos/REMOVE_TODO" as const;

let nextId: number = 1;

export const addToDo = (text: string) => ({
  type: ADD_TODO,
  payload: {
    id: nextId++,
    text,
  },
});

export const toggleToDo = (id: number) => ({
  type: TOGGLE_TODO,
  payload: id,
});

export const removeToDo = (id: number) => ({
  type: REMOVE_TODO,
  payload: id,
});

type TToDosAction =
  | ReturnType<typeof addToDo>
  | ReturnType<typeof toggleToDo>
  | ReturnType<typeof removeToDo>;

export type TToDo = {
  id: number;
  text: string;
  done: boolean;
};

type TToDosState = TToDo[];

const initialState: TToDosState = [];

function todos(
  state: TToDosState = initialState,
  action: TToDosAction
): TToDosState {
  switch (action.type) {
    case ADD_TODO:
      return state.concat({
        id: action.payload.id,
        text: action.payload.text,
        done: false,
      });
    case TOGGLE_TODO:
      return state.map((todo) =>
        todo.id === action.payload ? { ...todo, done: !todo.done } : todo
      );

    case REMOVE_TODO:
      return state.filter((todo) => todo.id !== action.payload);

    default:
      return state;
  }
}

export default todos;
