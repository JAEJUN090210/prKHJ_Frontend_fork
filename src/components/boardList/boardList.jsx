import { useState, useEffect } from "react";
import {
  BoardListContainer,
  BoardListHeader,
  BoardListTitle,
} from "./boardList.styles";
import BoardItem from "../../components/boardItem/BoardItem.jsx";

function BoardList() {
  const [items, setItems] = useState([]);
  const API_BASE = import.meta.env.VITE_REACT_APP_API_BASE_URL;

  useEffect(() => {
    const fetchList = async () => {
      try {
        const res = await fetch(`${API_BASE}/student/list`);

        if (!res.ok) {
          setItems([]);
          return;
        }

        const data = await res.json();
        setItems(Array.isArray(data.list) ? data.list : []);
      } catch (err) {
        console.error(err);
        setItems([]);
      }
    };

    fetchList();
  }, [API_BASE]);

  return (
    <BoardListContainer>
      <BoardListHeader>
        <BoardListTitle style={{ width: "55px" }}>학번</BoardListTitle>
        <BoardListTitle style={{ width: "80px" }}>이름</BoardListTitle>
        <BoardListTitle style={{ width: "170px" }}>백준 아이디</BoardListTitle>
        <BoardListTitle style={{ width: "90px" }}>solved.ac</BoardListTitle>
        <BoardListTitle style={{ width: "70px" }}>Total</BoardListTitle>
        <BoardListTitle style={{ width: "45px" }}>정답률</BoardListTitle>
        <BoardListTitle style={{ width: "55px" }}>Today</BoardListTitle>
        <BoardListTitle style={{ width: "55px" }}>연속일수</BoardListTitle>
      </BoardListHeader>

      {items.map((student, idx) => (
        <BoardItem
          key={idx}
          studentId={student.studentId}
          name={student.name}
          baekjoonId={student.baekjoonId}
          solvedAc={student.solvedAc}
          total={student.total}
          accuracy={student.accuracy}
          today={student.today}
          streak={student.streak}
        />
      ))}
    </BoardListContainer>
  );
}

export default BoardList;
