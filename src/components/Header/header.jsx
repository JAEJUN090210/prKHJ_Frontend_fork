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
            <a href="#">About</a>
            <Divider>|</Divider>
            <a href="#">로그인</a>
            <Divider>|</Divider>
            <a href="#">회원가입</a>
          </TopLinks>

          <NavMenu>
            <a href="#">데이터 조회</a>
            <a href="#">학생 등록</a>
            <a href="#">학생 삭제</a>
          </NavMenu>
        </RightArea>
      </TopRow>
    </HeaderWrapper>
  );
};

export default Header;
