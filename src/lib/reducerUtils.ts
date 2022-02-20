import {
  ActionType,
  AsyncActionCreatorBuilder,
  getType,
} from "typesafe-actions";

export type AsyncState<T, E = any> = {
  loading: boolean;
  data: T | null;
  error: E | null;
};

export const asyncState = {
  initial: <T, E>(initialData?: T): AsyncState<T, E> => ({
    loading: false,
    data: initialData || null,
    error: null,
  }),
  load: <T, E>(data?: T | null): AsyncState<T, E> => ({
    loading: true,
    data: data || null,
    error: null,
  }),
  success: <T, E>(data: any): AsyncState<T, E> => ({
    data,
    loading: false,
    error: null,
  }),
  error: <T, E>(error: E): AsyncState<T, E> => ({
    error,
    loading: false,
    data: null,
  }),
};

type AnyAsyncActionCreator = AsyncActionCreatorBuilder<any, any, any>;

export function createAsyncReducer<
  S,
  AC extends AnyAsyncActionCreator,
  K extends keyof S
>(asyncActionCreator: AC, key: K) {
  return (state: S, action: ActionType<AC>) => {
    const [request, success, failure] = [
      asyncActionCreator.request,
      asyncActionCreator.success,
      asyncActionCreator.failure,
    ].map(getType);

    switch (action.type) {
      case request:
        return {
          ...state,
          [key]: asyncState.load(),
        };

      case success:
        return {
          ...state,
          [key]: asyncState.success(action.payload),
        };

      case failure:
        return {
          ...state,
          [key]: asyncState.error(action.payload),
        };

      default:
        return state;
    }
  };
}
