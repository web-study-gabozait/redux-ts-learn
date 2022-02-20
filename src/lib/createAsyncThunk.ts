import { Dispatch } from "redux";
import { AsyncActionCreatorBuilder } from "typesafe-actions";

type AnyAsyncActionCreator = AsyncActionCreatorBuilder<any, any, any>;
type AnyPromiseCreator = (...params: any[]) => Promise<any>;

export default function createAsyncThunk<
  A extends AnyAsyncActionCreator,
  F extends AnyPromiseCreator
>(asyncActionCreator: A, promiseCreator: F) {
  type Params = Parameters<F>;
  return function thunk(...params: Params) {
    return async (dispath: Dispatch) => {
      const { request, success, failure } = asyncActionCreator;
      dispath(request(undefined));
      try {
        const res = await promiseCreator(...params);
        dispath(success(res));
      } catch (error) {
        dispath(failure(error as any));
      }
    };
  };
}
