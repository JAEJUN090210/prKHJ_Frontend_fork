import React from "react";
import { useNavigate } from "react-router-dom"; // useNavigate import
import { BoardItemContainer, Cell } from "./boardItem.styles";

function BoardItem({
  studentId,
  name,
  baekjoonId,
  solvedAc,
  total,
  accuracy,
  today,
  streak,
}) {
  const navigate = useNavigate(); // useNavigate 훅 사용

  const handleItemClick = () => {
    // /dashboard/:studentId 형식의 동적 URL로 이동
    navigate(`/dashboard/${studentId}`);
  };

  return (
    <BoardItemContainer onClick={handleItemClick}>
      <Cell width="55px">{studentId}</Cell>
      <Cell width="80px">{name}</Cell>
      <Cell width="170px">{baekjoonId}</Cell>
      <Cell width="90px">{solvedAc}</Cell>
      <Cell width="70px">{total}개</Cell>
      <Cell width="45px">{accuracy}%</Cell>
      <Cell width="55px">{today}개</Cell>
      <Cell width="60px">D+{streak}</Cell>
    </BoardItemContainer>
  );
}

export default BoardItem;
