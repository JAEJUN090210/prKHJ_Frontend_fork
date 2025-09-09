import styled from "styled-components";
import colors from "../../styles/colors_system";

export const BoardListContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 900px;
  min-height: 500px;
  height: auto;
`;

// 게시판 리스트 헤더
export const BoardListHeader = styled.div`
  font-family: "Pretendard GOV", sans-serif;
  font-weight: 700;
  font-size: 16px;

  display: flex;
  gap: 36px;
  height: 33px;
  width: 900px;

  border-top: 1px solid ${colors.gray[400]};
  border-bottom: 1px solid ${colors.gray[400]};
  color: ${colors.text.primary};
  align-items: center;
`;

// 게시판 리스트 제목
export const BoardListTitle = styled.h2`
  width: ${({ width }) => width || "auto"};
  text-align: center;
  height: 32px;
`;
