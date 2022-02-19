import { ActionType } from "typesafe-actions";
import * as actions from "./actions";

export type TToDosAction = ActionType<typeof actions>;

export type TToDo = {
  id: number;
  text: string;
  done: boolean;
};

export type TToDosState = TToDo[];
