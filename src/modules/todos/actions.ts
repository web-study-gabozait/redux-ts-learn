import { createAction } from "typesafe-actions";

export const ADD_TODO = `todos/ADD_TODO` as const;
export const TOGGLE_TODO = "todos/TOOGGLE_TODO" as const;
export const REMOVE_TODO = "todos/REMOVE_TODO" as const;

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
