import { useDispatch, useSelector } from "react-redux";
import GithubProfileInfo from "../components/GithubProfileInfo";
import GithubUserNameForm from "../components/GithubUserNameForm";
import { TRootState } from "../modules";
import { getUserProfileThunk } from "../modules/github";

const GithubProfileLoader = () => {
  const { data, loading, error } = useSelector(
    (state: TRootState) => state.github.userProfile
  );

  const dispatch = useDispatch();

  const onSubmit = (userName: string) => {
    dispatch(getUserProfileThunk(userName));
  };

  return (
    <>
      <GithubUserNameForm onSubmitUsername={onSubmit} />
      {loading ? (
        <p style={{ textAlign: "center" }}>{error ? "에러발생" : "로딩중"} </p>
      ) : (
        <>
          {data ? (
            <GithubProfileInfo
              name={data.name}
              thumbnail={data.avatar_url}
              bio={data.bio}
              blog={data.blog}
            />
          ) : (
            <p style={{ textAlign: "center" }}>정보 없음</p>
          )}
        </>
      )}
    </>
  );
};

export default GithubProfileLoader;
