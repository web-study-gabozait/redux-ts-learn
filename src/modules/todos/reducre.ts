import { createReducer } from "typesafe-actions";
import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from "./actions";
import { TToDosAction, TToDosState } from "./types";

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
