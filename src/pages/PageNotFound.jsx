import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import colors from "../styles/colors_system";
import P1 from "../assets/404.svg";
import P2 from "../assets/Go home.svg";

const NotFound = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <Wrapper>
      <ErrorImage src={P1} alt="404" />
      <HomeButton src={P2} alt="Go Home Button" onClick={handleGoHome} />
    </Wrapper>
  );
};

export default NotFound;

/* ──────────────── 스타일 ──────────────── */
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 817px;
  background-color: ${colors.gray[100]};
  gap: 90px;
`;

const ErrorImage = styled.img`
  width: 1000px;
  max-width: 80%;
  height: auto;
`;

const HomeButton = styled.img`
  width: 270px;
  max-width: 60%;
  height: auto;
  cursor: pointer;
  transition:
    transform 0.2s ease,
    opacity 0.2s ease;

  &:hover {
    transform: scale(1.05);
    opacity: 0.9;
  }

  &:active {
    transform: scale(0.95);
    opacity: 0.8;
  }
`;
