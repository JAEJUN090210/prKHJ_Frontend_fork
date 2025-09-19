// src/Dashboard.styled.js

import styled from "styled-components";
import colors from "../../styles/colors_system";
import { color } from "chart.js/helpers";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 827px;
  background-color: ${colors.gray[100]};
  font-family: "Pretendard GOV", sans-serif;
`;

export const DashboardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 35px;
`;

export const LeftSection = styled.div`
  display: flex;
  background-color: ${colors.gray[0]};
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  padding: 24px;
  width: 800px;
  height: 600px;
  gap: 24px;
  flex: 2;
  flex-direction: column;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;

export const UserInfo = styled.div`
  display: flex;
  gap: 8px;
  font-size: 24px;
  font-weight: 700;
`;

export const StudentId = styled.span`
  color: ${colors.text.basic};
`;

export const StudentName = styled.span`
  color: ${colors.text.basic};
`;

export const Days = styled.div`
  font-size: 24px;
  font-weight: 500;
  color: ${colors.text.subtle};
`;

export const ChartContainer = styled.div`
  width: 100%;
  height: 380px;
  background-color: white;
  border: 1px solid ${colors.gray[100]};
  border-radius: 8px;
  padding: 18px;
  position: relative;
`;

export const ChartLabels = styled.div`
  position: absolute;
  width: 103%;
  display: flex;
  justify-content: space-around;
  bottom: 0;
  left: 0;
  padding: 8px 2px;
  padding-right: 0px;
  font-size: 18px;
  color: ${colors.text.subtle};
`;

export const DayLabel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const DateText = styled.span`
  position: absolute;
  top: 40px;
  color: ${colors.text.subtle};
  margin-bottom: 4px;

  ${(props) =>
    props.$isSunday &&
    `
    color: ${colors.danger[400]}; /* 일요일 빨간색 */
    font-weight: 700;
  `}

  ${(props) =>
    props.$isSaturday &&
    `
    color: ${colors.primary[400]}; /* 토요일 파란색 */
    font-weight: 700;
  `}
`;

export const CountText = styled.span`
  position: absolute;
  top: 70px;
  color: ${colors.text.disabled};
`;

export const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Card = styled.div`
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  width: 250px;
  gap: 20px;
  background-color: ${colors.gray[50]};
  border-radius: 8px;
  padding: 21px;

  p {
    height: 25px;
  }
`;

export const CardTitle = styled.div`
  font-size: 19px;
  color: ${colors.text.subtle};
  margin-bottom: 16px;
`;

export const CardContent = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: ${colors.text.basic};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const CardContent2 = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: ${colors.text.basic};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

export const Button = styled.button`
  width: 250px;
  background-color: ${colors.button.default};
  color: white;
  border: none;
  padding: 12px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background-color: ${colors.button.hover};
  }
`;

export const SolvedACRank = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: ${colors.text.basic};
`;

export const Percent = styled.span`
  font-size: 24px;
  font-weight: bold;
  color: ${colors.text.basic};
`;
