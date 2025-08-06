// src/components/Header/header.styles.js
// This file is part of the Daedeok Software Meister High School project.
// Created by [ jaejun ] on [ 2025-08-06 ].
// last modified by [ jaejun ] on [ 2025-08-06 ].

import styled from "styled-components";

/* ──────────────── 헤더 전체 래퍼 ──────────────── */
export const HeaderWrapper = styled.header`
  width: 100%;
  height: 85px;
  padding: 5px 360px 12px;
  border-bottom: 1px solid #8a949e;
  background-color: #fafafa;
  box-sizing: border-box;

  position: sticky;
  top: 0;
  z-index: 1000;
`;

/* ──────────────── 헤더 내부 상단 행 (로고 + 링크) ──────────────── */
export const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;

/* ──────────────── 왼쪽 영역 (로고 관련) ──────────────── */
export const LeftArea = styled.div`
  display: flex;
  flex-direction: row;
  gap: 14px;
  align-items: center;
`;

export const LogoText = styled.div`
  font-size: 40px;
  font-weight: 700;
  color: #0b50d0;
  letter-spacing: 8px;
`;

export const SubText = styled.div`
  font-size: 17px;
  color: #86aff9;
  font-weight: 700;
`;

/* ──────────────── 오른쪽 영역 (링크 + 네비게이션) ──────────────── */
export const RightArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  gap: 14px;
`;

export const TopLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  a {
    font-size: 15px;
    color: #1a1a1a;
    text-decoration: none;

    &:hover {
      color: #083891;
      font-weight: 600;
    }
  }
`;

export const Divider = styled.span`
  color: #33363d;
  margin: 0 4px;
`;

export const NavMenu = styled.nav`
  display: flex;
  justify-content: flex-end;
  gap: 24px;

  a {
    font-size: 18px;
    font-weight: 600;
    color: #1e2124;
    text-decoration: none;

    &:hover {
      color: #083891;
    }
  }
`;
