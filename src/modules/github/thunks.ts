import { getUserProfile } from "../../api/github";
import createAsyncThunk from "../../lib/createAsyncThunk";
import { getUserProfileAsync } from "./actions";

// export const getUserProfileThunk = (
//   userName: string
// ): ThunkAction<void, TRootState, null, TGithubAction> => {
//   return async (dispatch) => {
//     const { request, success, failure } = getUserProfileAsync;
//     dispatch(request());
//     try {
//       const res = await getUserProfile(userName);
//       dispatch(success(res));
//     } catch (error) {
//       dispatch(failure(error as any));
//     }
//   };
// };

export const getUserProfileThunk = createAsyncThunk(
  getUserProfileAsync,
  getUserProfile
);
