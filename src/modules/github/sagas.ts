import { call, put, takeEvery } from "@redux-saga/core/effects";
import { AxiosError } from "axios";
import { getUserProfileAsync, GET_USER_PROFILE } from ".";
import { getUserProfile, IGithubUser } from "../../api/github";
import createAsyncSaga from "../../lib/createAsyncSaga";

// function* getUserProfileSaga(
//   action: ReturnType<typeof getUserProfileAsync.request>
// ) {
//   try {
//     const res: IGithubUser = yield call(getUserProfile, action.payload);
//     yield put(getUserProfileAsync.success(res));
//   } catch (error) {
//     yield put(getUserProfileAsync.failure(error as AxiosError));
//   }
// }
const getUserProfileSaga = createAsyncSaga(getUserProfileAsync, getUserProfile);

export function* githubSaga() {
  yield takeEvery(GET_USER_PROFILE, getUserProfileSaga);
}
