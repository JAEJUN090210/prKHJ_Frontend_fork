import React from "react";
import { useNavigate, Link } from "react-router-dom";
import "../../styles/reset.css";
import backgroundImage from "../../assets/Group 79.svg";
import { Wrapper, Box } from "./home.styles";

function Home() {
  const navigate = useNavigate();

  const lerterror = () => {
    alert("로그인 없이 이용 가능합니다.\n데이터 조회 페이지로 이동합니다.");
    navigate("/list");
  };

  return (
    <Wrapper>
      <img src={backgroundImage} alt="background" />
      <Box>
        <span>로그인 후 서비스를 이용해 보세요</span>
        <span>Deadok Software Coding Test System</span>
        <button onClick={lerterror}>로그인하러 가기</button>
      </Box>
    </Wrapper>
  );
}

export default Home;
