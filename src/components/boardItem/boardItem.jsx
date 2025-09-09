import React from "react";
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
  return (
    <BoardItemContainer>
      <Cell width="55px">{studentId}</Cell>
      <Cell width="80px">{name}</Cell>
      <Cell width="170px">{baekjoonId}</Cell>
      <Cell width="90px">{solvedAc}</Cell>
      <Cell width="70px">{total}개</Cell>
      <Cell width="45px">{accuracy}%</Cell>
      <Cell width="55px">{today}개</Cell>
      <Cell width="55px">D+{streak}</Cell>
    </BoardItemContainer>
  );
}

export default BoardItem;
