import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { useNavigate, useParams } from "react-router-dom";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";

import {
  Wrapper,
  DashboardContainer,
  LeftSection,
  Header,
  UserInfo,
  StudentId,
  StudentName,
  Days,
  ChartContainer,
  ChartLabels,
  DayLabel,
  DateText,
  CountText,
  RightSection,
  Card,
  CardTitle,
  CardContent,
  Button,
  SolvedACRank,
  Percent,
} from "./Dashboard.styles";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

function Dashboard() {
  const tierMap = {
    0: "Banned",
    1: "Bronze 5",
    2: "Bronze 4",
    3: "Bronze 3",
    4: "Bronze 2",
    5: "Bronze 1",
    6: "Silver 5",
    7: "Silver 4",
    8: "Silver 3",
    9: "Silver 2",
    10: "Silver 1",
    11: "Gold 5",
    12: "Gold 4",
    13: "Gold 3",
    14: "Gold 2",
    15: "Gold 1",
    16: "Platinum 5",
    17: "Platinum 4",
    18: "Platinum 3",
    19: "Platinum 2",
    20: "Platinum 1",
    21: "Diamond 5",
    22: "Diamond 4",
    23: "Diamond 3",
    24: "Diamond 2",
    25: "Diamond 1",
    26: "Ruby 5",
    27: "Ruby 4",
    28: "Ruby 3",
    29: "Ruby 2",
    30: "Ruby 1",
    31: "Master",
  };

  const navigate = useNavigate();
  const { studentId } = useParams();

  const [studentInfo, setStudentInfo] = useState({
    student_no: "0000",
    name: "NON",
    streak_days: 0,
    id: "NON",
    tier: "NON",
    solved_total: 0,
    solved_today: 0,
    accuracy_pct: 0,
  });

  const [weeklySolvedData, setWeeklySolvedData] = useState([]);

  const MEMBER_API_URL = "/data/members.json";
  const WEEKLY_API_URL = "/data/weekly_solved.json";

  // 학생 기본 정보 가져오기
  useEffect(() => {
    const fetchStudentInfo = async () => {
      try {
        const res = await fetch(MEMBER_API_URL);
        const data = await res.json();
        const foundStudent = data.list.find(
          (member) => member.student_no === parseInt(studentId)
        );
        if (foundStudent) {
          setStudentInfo(foundStudent);
        }
      } catch (err) {
        console.error("Failed to fetch student info", err);
      }
    };
    fetchStudentInfo();
  }, [studentId]);

  // 주간 풀이 현황 가져오기 (이번 주 기준: 일~토)
  useEffect(() => {
    const fetchWeeklySolved = async () => {
      try {
        const res = await fetch(WEEKLY_API_URL);
        const data = await res.json();

        if (studentInfo.id !== "NON") {
          const foundWeeklyData = data.list.find((item) => item.id === studentInfo.id);

          const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

          // 이번 주 일요일 계산
          const today = new Date();
          const sunday = new Date(today);
          sunday.setDate(today.getDate() - today.getDay());

          // 이번 주 날짜 배열 생성 (일~토)
          const dates = Array.from({ length: 7 }, (_, i) => {
            const d = new Date(sunday);
            d.setDate(sunday.getDate() + i);
            return `${d.getMonth() + 1}/${d.getDate()}`;
          });

          const chartData = days.map((day, index) => ({
            date: dates[index],
            solvedCount: foundWeeklyData?.[day] !== -1 ? foundWeeklyData[day] : 0,
          }));

          setWeeklySolvedData(chartData);
        }
      } catch (err) {
        console.error("Failed to fetch weekly solved data", err);
      }
    };

    if (studentInfo.id !== "NON") {
      fetchWeeklySolved();
    }
  }, [studentInfo.id]);

  const data = {
    labels: weeklySolvedData.map((d) => d.date),
    datasets: [
      {
        data: weeklySolvedData.map((d) => d.solvedCount),
        borderColor: "#B1CEFB",
        tension: 0,
        pointBackgroundColor: "#256EF4",
        pointBorderColor: "#fff",
        pointRadius: 6,
        pointHoverRadius: 8,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: false },
    },
    scales: {
      x: {
        grid: {
          display: true,
          drawBorder: false,
          color: (context) => (context.index === 6 ? "#E6E8EA" : "rgba(0,0,0,0)"),
          borderDash: (context) => (context.index === 6 ? [5, 5] : []),
        },
        ticks: { display: false },
      },
      y: {
        max: 14,
        min: 0,
        beginAtZero: true,
        ticks: { stepSize: 2, color: "#CDD1D5", font: { size: 18 } },
        grid: { drawBorder: false, color: "#E6E8EA" },
      },
    },
  };

  const handleGoToList = () => {
    navigate("/list");
  };

  return (
    <Wrapper>
      <DashboardContainer>
        <LeftSection>
          <Header>
            <UserInfo>
              <StudentId>{studentInfo.student_no}</StudentId>
              <StudentName>{studentInfo.name}</StudentName>
            </UserInfo>
            <Days>D+{studentInfo.streak_days}</Days>
          </Header>
          <ChartContainer>
            <Line data={data} options={options} />
            <ChartLabels>
              {weeklySolvedData.map((d, index) => (
                <DayLabel key={index}>
                  <DateText $isSunday={index === 0} $isSaturday={index === 6}>
                    {d.date}
                  </DateText>
                  <CountText>{d.solvedCount}개</CountText>
                </DayLabel>
              ))}
            </ChartLabels>
          </ChartContainer>
        </LeftSection>
        <RightSection>
          <Card>
            <CardTitle>백준 ID</CardTitle>
            <CardContent>{studentInfo.id}</CardContent>
          </Card>
          <Card>
            <CardTitle>solved.ac 랭크</CardTitle>
            <CardContent
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                flexDirection: "row",
              }}>
              <img
                src={`https://d2gd6pc034wcta.cloudfront.net/tier/${studentInfo.tier}.svg`}
                alt="tier"
                style={{ width: "28px", height: "28px" }}
              />
              <SolvedACRank>{tierMap[studentInfo.tier] || "Unknown"}</SolvedACRank>
            </CardContent>
          </Card>
          <Card>
            <CardTitle>Total</CardTitle>
            <CardContent>{studentInfo.solved_total}개</CardContent>
            <CardTitle style={{ marginTop: "8px" }}>Today</CardTitle>
            <CardContent>{studentInfo.solved_today}개</CardContent>
          </Card>
          <Card>
            <CardTitle>정답률</CardTitle>
            <CardContent>
              <Percent>{studentInfo.accuracy_pct}%</Percent>
            </CardContent>
          </Card>
          <Button onClick={handleGoToList}>리스트로 돌아가기</Button>
        </RightSection>
      </DashboardContainer>
    </Wrapper>
  );
}

export default Dashboard;
