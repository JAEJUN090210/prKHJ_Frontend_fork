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
  const navigate = useNavigate();

  const handleItemClick = () => {
    navigate(`/dashboard/${studentId}`);
  };

  return (
    <BoardItemContainer>
      <Cell width="55px" onClick={handleItemClick}>{studentId}</Cell>
      <Cell width="80px" onClick={handleItemClick}>{name}</Cell>
      <Cell width="150px" onClick={handleItemClick}>{baekjoonId}</Cell>
      <Cell width="75px" onClick={handleItemClick}>{solvedAc}</Cell>
      <Cell width="70px" onClick={handleItemClick}>{total}개</Cell>
      <Cell width="45px" onClick={handleItemClick}>{accuracy}%</Cell>
      <Cell width="70px" onClick={handleItemClick}>{today}개</Cell>
      <Cell width="60px" onClick={handleItemClick}>D+{streak}</Cell>
    </BoardItemContainer>
  );
}

export default BoardItem;
