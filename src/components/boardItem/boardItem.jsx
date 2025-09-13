import React from "react";
import { useNavigate } from "react-router-dom"; // useNavigate import
import { BoardItemContainer, Cell, Cell2 } from "./boardItem.styles";

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
      <Cell2 width="55px" onClick={handleItemClick}>
        {studentId}
      </Cell2>
      <Cell2 width="80px" onClick={handleItemClick}>
        {name}
      </Cell2>
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
