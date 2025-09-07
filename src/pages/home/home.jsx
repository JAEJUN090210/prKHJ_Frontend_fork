import React from "react";
import "../../styles/reset.css";
import backgroundImage from "../../assets/Group 79.svg";
import { Wrapper, Box } from "./home.styles";

function Home() {
  return (
    <Wrapper>
      <img src={backgroundImage} alt="background" />
      <Box>
        <span>로그인 후 서비스를 이용해 보세요</span>
        <span>Deadok Software Coding Test System</span>
        <button to="/login">로그인</button>
      </Box>
    </Wrapper>
  );
}

export default Home;
