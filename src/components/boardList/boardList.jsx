import { BoardListContainer, BoardListHeader, BoardListTitle } from "./boardList.styles";
import BoardItem from "../boardItem/boardItem";

function BoardList({ items }) {
  return (
    <BoardListContainer>
      <BoardListHeader>
        <BoardListTitle style={{ width: "55px" }}>학번</BoardListTitle>
        <BoardListTitle style={{ width: "80px" }}>이름</BoardListTitle>
        <BoardListTitle style={{ width: "150px" }}>백준 아이디</BoardListTitle>
        <BoardListTitle style={{ width: "75px" }}>티어</BoardListTitle>
        <BoardListTitle style={{ width: "70px" }}>총 풀이</BoardListTitle>
        <BoardListTitle style={{ width: "45px" }}>정답률</BoardListTitle>
        <BoardListTitle style={{ width: "70px" }}>일일 풀이</BoardListTitle>
        <BoardListTitle style={{ width: "60px" }}>연속일수</BoardListTitle>
      </BoardListHeader>

      {items.map((student, idx) => (
        <BoardItem
          key={idx}
          studentId={student.student_no}
          name={student.name}
          baekjoonId={student.id}
          solvedAc={student.tierName}
          total={student.solved_total}
          accuracy={student.accuracy_pct}
          today={student.solved_today}
          streak={student.streak_days}
        />
      ))}
    </BoardListContainer>
  );
}

export default BoardList;
