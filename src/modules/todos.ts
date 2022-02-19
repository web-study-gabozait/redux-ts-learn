import { ActionType, createAction, createReducer } from "typesafe-actions";

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

export const toggleToDo = createAction(TOGGLE_TODO)<number>();
export const removeToDo = createAction(REMOVE_TODO)<number>();

const actions = {
  addToDo,
  toggleToDo,
  removeToDo,
};

type TToDosAction = ActionType<typeof actions>;

export type TToDo = {
  id: number;
  text: string;
  done: boolean;
};

type TToDosState = TToDo[];

const initialState: TToDosState = [];

const todos = createReducer<TToDosState, TToDosAction>(initialState, {
  [ADD_TODO]: (state, action) =>
    state.concat({
      ...action.payload,
      done: false,
    }),
  [TOGGLE_TODO]: (state, action) =>
    state.map((todo) =>
      todo.id === action.payload ? { ...todo, done: !todo.done } : todo
    ),
  [REMOVE_TODO]: (state, action) =>
    state.filter((todo) => todo.id !== action.payload),
});

export default todos;
