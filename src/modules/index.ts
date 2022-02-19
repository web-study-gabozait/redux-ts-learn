import { combineReducers } from "redux";
import counter from "./counter";
import todos from "./todos";

export type TRootState = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({
  counter,
  todos,
});

export default rootReducer;
