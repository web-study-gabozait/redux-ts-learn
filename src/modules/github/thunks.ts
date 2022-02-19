import { ThunkAction } from "redux-thunk";
import { TRootState } from "..";
import { getUserProfile } from "../../api/github";
import { getUserProfileAsync } from "./actions";
import { TGithubAction } from "./types";

export const getUserProfileThunk = (
  userName: string
): ThunkAction<void, TRootState, null, TGithubAction> => {
  return async (dispatch) => {
    const { request, success, failure } = getUserProfileAsync;
    dispatch(request());
    try {
      const res = await getUserProfile(userName);
      dispatch(success(res));
    } catch (error) {
      dispatch(failure(error as any));
    }
  };
};
