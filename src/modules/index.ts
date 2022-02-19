import { combineReducers } from "redux";
import counter from "./counter";
import todos from "./todos";
import github from "./github";

export type TRootState = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({
  counter,
  todos,
  github,
});

export default rootReducer;
