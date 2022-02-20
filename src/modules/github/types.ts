import { ActionType } from "typesafe-actions";
import { IGithubUser } from "../../api/github";
import { AsyncState } from "../../lib/reducerUtils";
import * as actions from "./actions";

export type TGithubAction = ActionType<typeof actions>;
export type TGithubState = {
  userProfile: AsyncState<IGithubUser, Error>;
};
