import { createAction, ActionType, createReducer } from "typesafe-actions";

const INCREASE = `counter/INCREASE`;
const DECREASE = `counter/DECREASE`;
const INCREASE_BY = `counter/INCREASE_BY`;

export const increase = createAction(INCREASE)();
export const decrease = createAction(DECREASE)();
export const increaseBy = createAction(INCREASE_BY)<number>();

type TCounterState = {
  count: number;
};

const actions = { increase, decrease, increaseBy };

type TCounterAction = ActionType<typeof actions>;

const initialState: TCounterState = {
  count: 0,
};

const counter = createReducer<TCounterState, TCounterAction>(initialState)
  .handleAction(increase, (state) => ({ count: state.count + 1 }))
  .handleAction(decrease, (state) => ({ count: state.count - 1 }))
  .handleAction(increaseBy, (state, action) => ({
    count: state.count + action.payload,
  }));

//   {
//   [INCREASE]: (state) => ({ count: state.count + 1 }),
//   [DECREASE]: (state) => ({ count: state.count - 1 }),
//   [INCREASE_BY]: (state, action) => ({ count: state.count + action.payload }),
// });

export default counter;
