import react from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  LoginBox,
  SubTitle,
  Title,
  Label,
  Space,
  Input,
  CheckContainer,
  Checkbox,
  CheckLabel,
  Button,
} from "./login.styles";

function Login() {
  return (
    <Container>
      <LoginBox>
        <SubTitle>Deadeok Software Coding Test</SubTitle>
        <Title>아이디로 로그인</Title>
        <form>
          <Label>아이디</Label>
          <Input type="text" placeholder="아이디를 입력하세요" />
          <Space></Space>
          <Label>비밀번호</Label>
          <Input type="password" placeholder="비밀번호를 입력하세요" />
          <CheckContainer>
            <CheckLabel htmlFor="autoLogin">자동로그인</CheckLabel>
            <Checkbox type="checkbox" name="autoLogin" id="autoLogin" />
          </CheckContainer>
          <Button type="submit">로그인</Button>
        </form>
      </LoginBox>
    </Container>
  );
}

export default Login;
