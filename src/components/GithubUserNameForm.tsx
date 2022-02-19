import React, { FormEvent, useState } from "react";
import styled from "styled-components";

interface IGithubUserNameFormProps {
  onSubmitUsername: (userName: string) => void;
}

const GithubUserNameForm: React.FC<IGithubUserNameFormProps> = ({
  onSubmitUsername,
}) => {
  const [input, setInput] = useState("");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmitUsername(input);
    setInput("");
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return (
    <InputWrap onSubmit={onSubmit}>
      <Input
        onChange={onChange}
        value={input}
        placeholder="유저를 검색해주세요"
      />
      <Button type="submit">조회</Button>
    </InputWrap>
  );
};

export default GithubUserNameForm;

const InputWrap = styled.form`
  width: 400px;
  height: 32px;
  display: flex;
  align-items: center;
  margin: 0px auto;
  margin-top: 16px;
  margin-bottom: 48px;
  column-gap: 16px;
`;

const Input = styled.input`
  flex: 1;
  background: none;
  border: 0px;
  border-bottom: 1px solid black;
  outline: none;
  font-size: 21px;
`;

const Button = styled.button`
  height: 100%;
  min-width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  background-color: black;
  border-radius: 4px;
  cursor: pointer;
  outline: none;
  font-weight: bold;

  &:hover {
    background-color: #495057;
  }
`;
