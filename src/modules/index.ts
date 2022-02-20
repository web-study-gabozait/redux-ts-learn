import { combineReducers } from "redux";
import counter from "./counter";
import todos from "./todos";
import github, { githubSaga } from "./github";
import { all } from "redux-saga/effects";

export type TRootState = ReturnType<typeof rootReducer>;

export function* rootSaga() {
  yield all([githubSaga()]);
}

const rootReducer = combineReducers({
  counter,
  todos,
  github,
});

export default rootReducer;
