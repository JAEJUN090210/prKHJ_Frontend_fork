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
  return (
    <HeaderWrapper>
      <TopRow>
        <LeftArea>
          <LogoText>KHJ</LogoText>
          <SubText>
            Daedeok Software
            <br />
            Coding Test System
          </SubText>
        </LeftArea>

        <RightArea>
          <TopLinks>
            <Link to="about">About</Link>
            <Divider>|</Divider>
            <Link to="/login">로그인</Link>
            <Divider>|</Divider>
            <Link to="/signup">회원가입</Link>
          </TopLinks>

          <NavMenu>
            <Link to="/data-query">데이터 조회</Link>
            <Link to="/student-registration">학생 등록</Link>
            <Link to="/student-deletion">학생 삭제</Link>
          </NavMenu>
        </RightArea>
      </TopRow>
    </HeaderWrapper>
  );
};

export default Header;
