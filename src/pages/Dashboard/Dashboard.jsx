// src/Dashboard.jsx

import React from "react";
import { Line } from "react-chartjs-2";
import { useNavigate, Link } from "react-router-dom";
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

  let studentId = "1310";
  let studentName = "전재준";
  let consecutiveDays = 9;
  let baekjoonId = "jaejun090210";
  let solvedACRank = "다이아2";
  let totalSolved = 1000;
  let todaySolved = 10;
  let correctRate = 99;

  const chartData = [
    { date: "08/03", solvedCount: 2 },
    { date: "08/04", solvedCount: 4 },
    { date: "08/05", solvedCount: 1 },
    { date: "08/06", solvedCount: 4 },
    { date: "08/07", solvedCount: 4 },
    { date: "08/08", solvedCount: 2 },
    { date: "08/09", solvedCount: 0 },
  ];

  const data = {
    labels: chartData.map((d) => d.date),
    datasets: [
      {
        data: chartData.map((d) => d.solvedCount),
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
        max: 12,
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
              <StudentId>{studentId}</StudentId>
              <StudentName>{studentName}</StudentName>
            </UserInfo>
            <Days>D+{consecutiveDays}</Days>
          </Header>
          <ChartContainer>
            <Line data={data} options={options} />
            <ChartLabels>
              {chartData.map((d, index) => (
                <DayLabel key={index}>
                  <DateText isToday={index === chartData.length - 1}>{d.date}</DateText>
                  <CountText>{d.solvedCount}개</CountText>
                </DayLabel>
              ))}
            </ChartLabels>
          </ChartContainer>
        </LeftSection>
        <RightSection>
          <Card>
            <CardTitle>백준 ID</CardTitle>
            <CardContent>{baekjoonId}</CardContent>
          </Card>
          <Card>
            <CardTitle>solved.ac 랭크</CardTitle>
            <CardContent>
              <SolvedACRank>{solvedACRank}</SolvedACRank>
            </CardContent>
          </Card>
          <Card>
            <CardTitle>Total</CardTitle>
            <CardContent>{totalSolved}개</CardContent>
            <p></p>
            <CardTitle style={{ marginTop: "8px" }}>Today</CardTitle>
            <CardContent>{todaySolved}개</CardContent>
          </Card>
          <Card>
            <CardTitle>정답률</CardTitle>
            <CardContent>
              <Percent>{correctRate}%</Percent>
            </CardContent>
          </Card>
          <Button onClick={handleGoToList}>리스트로 돌아가기</Button>
        </RightSection>
      </DashboardContainer>
    </Wrapper>
  );
}

export default Dashboard;
