import { AxiosError } from "axios";
import { createAsyncAction } from "typesafe-actions";
import { IGithubUser } from "../../api/github";

export const GET_USER_PROFILE = `github/GET_USER_PROFILE`;
export const GET_USER_PROFILE_SUCCESS = `github/GET_USER_PROFILE_SUCCESS`;
export const GET_USER_PROFILE_FAILURE = `github/GET_USER_PROFILE_FAILURE`;

export const getUserProfileAsync = createAsyncAction(
  GET_USER_PROFILE,
  GET_USER_PROFILE_SUCCESS,
  GET_USER_PROFILE_FAILURE
)<string, IGithubUser, AxiosError>();
