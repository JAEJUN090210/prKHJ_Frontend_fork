import styled from "styled-components";
import { Link } from "react-router-dom";
import colors from "../../styles/colors_system";

export const BoardItemContainer = styled.div`
  font-family: "Pretendard GOV", sans-serif;
  font-weight: 400;
  font-size: 16px;

  display: flex;
  gap: 36px;
  height: 35px;
  width: 900px;

  border-bottom: 1px solid ${colors.gray[400]};
  color: ${colors.text.basic};
  align-items: center;
  justify-content: center;
`;

export const Cell = styled.div`
  text-align: center;
  white-space: nowrap;
  // overflow: hidden;
  // white-space: nowrap;
  // text-overflow: ellipsis; // 백준 자체 아이디 글자 수 제한으로 필요
  width: ${({ width }) => width || "auto"};
`;

export const Cell2 = styled.div`
  text-align: center;
  white-space: nowrap;
  width: ${({ width }) => width || "auto"};
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;
