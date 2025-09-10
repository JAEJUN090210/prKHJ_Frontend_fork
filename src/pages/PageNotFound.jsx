import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import colors from "../styles/colors_system";

const NotFound = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <ErrorPageContainer>
      <ErrorCode>404</ErrorCode>
      <ErrorTitle>Page Not Found</ErrorTitle>
      <ErrorMessage>죄송합니다. 요청하신 페이지를 찾을 수 없습니다.</ErrorMessage>
      <GoHomeButton onClick={handleGoHome}>홈으로 돌아가기</GoHomeButton>
    </ErrorPageContainer>
  );
};

export default NotFound;

const ErrorPageContainer = styled.div`
  font-family: "Pretendard GOV", sans-serif;
  font-weight: 700;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
  background-color: ${colors.gray[900]};
`;

const ErrorCode = styled.h1`
  font-size: 10rem;
  font-weight: 700;
  color: ${colors.danger[500]};
  margin: 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
`;

const ErrorTitle = styled.h2`
  font-size: 2.5rem;
  margin-top: 1rem;
  color: ${colors.gray[50]};
`;

const ErrorMessage = styled.p`
  font-size: 1.25rem;
  color: ${colors.gray[400]};
  margin-top: 0.5rem;
`;

const GoHomeButton = styled.p`
  margin-top: 15rem;
  font-size: 2rem;
  color: ${colors.gray[50]};
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-8px);
    color: ${colors.text.primary};
  }

  &:active {
    transform: translateY(0);
  }
`;
