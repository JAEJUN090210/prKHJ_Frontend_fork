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

  // 로컬 JSON 파일 경로
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

  // 주간 풀이 현황 가져오기
  useEffect(() => {
    const fetchWeeklySolved = async () => {
      try {
        const res = await fetch(WEEKLY_API_URL);
        const data = await res.json();

        // studentInfo가 업데이트된 후에만 실행
        if (studentInfo.id !== "NON") {
          const foundWeeklyData = data.list.find((item) => item.id === studentInfo.id);

          if (foundWeeklyData) {
            const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
            const today = new Date();
            const dates = Array.from({ length: 7 }, (_, i) => {
              const d = new Date(today);
              d.setDate(today.getDate() - ((today.getDay() - i + 7) % 7));
              return `${d.getMonth() + 1}/${d.getDate()}`;
            });

            const chartData = days.map((day, index) => ({
              date: dates[index],
              solvedCount: foundWeeklyData[day] !== -1 ? foundWeeklyData[day] : 0,
            }));
            setWeeklySolvedData(chartData);
          } else {
            // 데이터가 없는 경우 기본값 설정
            setWeeklySolvedData(
              Array.from({ length: 7 }, (_, i) => {
                const d = new Date();
                d.setDate(d.getDate() - ((d.getDay() - i + 7) % 7));
                return {
                  date: `${d.getMonth() + 1}/${d.getDate()}`,
                  solvedCount: 0,
                };
              })
            );
          }
        }
      } catch (err) {
        console.error("Failed to fetch weekly solved data", err);
      }
    };

    // studentInfo.id가 유효할 때만 API 호출
    if (studentInfo.id !== "NON") {
      fetchWeeklySolved();
    }
  }, [studentInfo.id]); // studentInfo.id가 변경될 때마다 실행

  // 차트 데이터 및 옵션 (기존 코드와 동일)
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
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: true,
          drawBorder: false,
          color: (context) => {
            if (context.index === 6) {
              return "#E6E8EA";
            }
            return "rgba(0, 0, 0, 0)";
          },
          borderDash: (context) => {
            if (context.index === 6) {
              return [5, 5];
            }
            return [];
          },
        },
        ticks: {
          display: false,
        },
      },
      y: {
        max: 14,
        min: 0,
        beginAtZero: true,
        ticks: {
          stepSize: 2,
          color: "#CDD1D5",
          font: {
            size: 18,
          },
        },
        grid: {
          drawBorder: false,
          color: "#E6E8EA",
        },
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
                  <DateText isToday={index === weeklySolvedData.length - 1}>
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
            <CardContent>
              <SolvedACRank>{studentInfo.tier}</SolvedACRank>
            </CardContent>
          </Card>
          <Card>
            <CardTitle>Total</CardTitle>
            <CardContent>{studentInfo.solved_total}개</CardContent>
            <p></p>
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
