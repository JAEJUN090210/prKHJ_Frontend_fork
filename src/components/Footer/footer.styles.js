// src/components/footer/footer.styles.js
// This file is part of the Daedeok Software Meister High School project.
// Created by [ jaejun ] on [ 2025-08-06 ].
// last modified by [ jaejun ] on [ 2025-08-06 ].

import styled from "styled-components";
import colors from "../../styles/colors_system";

/* ──────────────── 풋터 전체 래퍼 ──────────────── */
export const FooterWrapper = styled.footer`
  width: 100%;
  height: 25px;
  padding: 10px;
  background-color: ${colors.gray[100]};
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    font-family: "Pretendard GOV", sans-serif;
    font-weight: 400;
    margin: 5px;
    font-size: 13px;
    color: ${colors.text.subtle};
    text-align: center;
    text-decoration: none;
  }
`;
