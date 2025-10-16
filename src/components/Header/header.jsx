// src/components/Header/header.jsx
// This file is part of the Daedeok Software Meister High School project.
// Created by [ jaejun ] on [ 2025-08-06 ].
// last modified by [ jaejun ] on [ 2025-08-06 ].

import React from "react";
import {
  HeaderWrapper,
  TopRow,
  LeftArea,
  LogoText,
  SubText,
  RightArea,
  TopLinks,
  Divider,
  NavMenu,
} from "./header.styles";
import { Link } from "react-router-dom";

const Header = () => {
  const lerterror = () => {
    alert("해당 기능은 이용할 수 없습니다.\n추후 업데이트 예정입니다.");
  };

  return (
    <HeaderWrapper>
      <TopRow>
        <Link to="/home" style={{ textDecoration: "none" }}>
          <LeftArea>
            <LogoText>KHJ</LogoText>
            <SubText>
              Daedeok Software
              <br />
              Coding Test System
            </SubText>
          </LeftArea>
        </Link>

        <RightArea>
          <TopLinks>
            {/* <Link to="about">About</Link>
            <Divider>|</Divider>
            <Link to="/login">로그인</Link>
            <Divider>|</Divider>
            <Link to="/signup">회원가입</Link> */}
            <Link to="/aboutDev">About</Link>
            <Divider>|</Divider>
            <Link to="/contact">Contact</Link>
            <Divider>|</Divider>
            <Link onClick={lerterror}>로그인</Link>
          </TopLinks>

          <NavMenu>
            <Link to="/list">풀이 현황</Link>
            <Link onClick={lerterror}>학생 등록</Link>
            <Link onClick={lerterror}>학생 삭제</Link>
          </NavMenu>
        </RightArea>
      </TopRow>
    </HeaderWrapper>
  );
};

export default Header;
