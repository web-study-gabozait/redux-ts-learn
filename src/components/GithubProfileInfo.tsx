import styled from "styled-components";

interface IGithubProfileInfoProps {
  name: string;
  thumbnail: string;
  bio: string;
  blog: string;
}

const GithubProfileInfo: React.FC<IGithubProfileInfoProps> = ({
  name,
  thumbnail,
  bio,
  blog,
}) => {
  return (
    <InfoWrap>
      <InfoHeaderWrap>
        <img src={thumbnail} alt="thumbnail" />
        <pre>{name}</pre>
      </InfoHeaderWrap>
      <InfoBio>{bio}</InfoBio>
      {blog !== "" && (
        <InfoGoToBlog onClick={() => window.open(blog, "_blank")}>
          블로그
        </InfoGoToBlog>
      )}
    </InfoWrap>
  );
};
export default GithubProfileInfo;

const InfoWrap = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  margin: 0px auto;
`;

const InfoHeaderWrap = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 64px;
    height: 64px;
    object-fit: cover;
    border-radius: 100%;
    margin-right: 16px;
  }

  pre {
    font-size: 15px;
    font-weight: bold;
  }
`;

const InfoBio = styled.p`
  font-size: 15px;
  word-break: break-all;
  line-height: 18px;
  margin-top: 20px;
`;

const InfoGoToBlog = styled.span`
  font-size: 15px;
`;
