import { ActionType } from "typesafe-actions";
import { IGithubUser } from "../../api/github";
import * as actions from "./actions";

export type TGithubAction = ActionType<typeof actions>;
export type TGithubState = {
  userProfile: {
    loading: boolean;
    data: IGithubUser | null;
    error: Error | null;
  };
};
