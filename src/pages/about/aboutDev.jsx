import React from "react";
import styled from "styled-components";
import colors from "../../styles/colors_system";

function AboutDev() {
  return (
    <Container>
      <Wrapper>
        <SubTitle>Project KHJ의 개발팀을 소개해 드릴게요</SubTitle>
        <Title>개발자 소개</Title>
        <Profile>
          <Set>
            <Card>
              <Role>PM</Role>
              <Name>신동호</Name>
              <GithubId>
                <a href="https://github.com/siren8170" target="_blank">
                  @siren8170
                </a>{" "}
                <img src="../src/assets/Logo/github-mark.svg" alt="깃허브 로고" />
              </GithubId>
            </Card>
            <Card>
              <Role>Frontend</Role>
              <Name>전재준</Name>
              <GithubId>
                <a href="https://github.com/JAEJUN090210" target="_blank">
                  @JAEJUN090210
                </a>{" "}
                <img src="../src/assets/Logo/github-mark.svg" alt="깃허브 로고" />
              </GithubId>
            </Card>
            <Card>
              <Role>Backend</Role>
              <Name>김시흔</Name>
              <GithubId>
                <a href="https://github.com/tlgms" target="_blank">
                  @tlgms
                </a>{" "}
                <img src="../src/assets/Logo/github-mark.svg" alt="깃허브 로고" />
              </GithubId>
            </Card>
          </Set>
        </Profile>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  margin: 0;
  padding: 0;
  background-color: ${colors.gray[100]};
`;

const Wrapper = styled.div`
  box-sizing: border-box;
  padding: 80px 24px;
  padding-top: 40px;
  background-color: ${colors.gray[100]};
  height: 93vh;
  text-align: center;
  margin: 0 200px;
`;

const SubTitle = styled.p`
  display: flex;
  text-align: flex-start;
  font-size: 22px;
  font-weight: 600;
  color: ${colors.primary[500]};
  margin-bottom: 15px;
`;

const Title = styled.h1`
  display: flex;
  text-align: flex-start;
  font-size: 42px;
  font-weight: bold;
  color: #222;
  margin-bottom: 40px;
`;

const Profile = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 40px;
`;

const Set = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
  justify-content: center;
`;

const Card = styled.div`
  background: ${colors.gray[50]};
  border-radius: 24px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
  padding: 24px 20px;
  width: 260px;
  height: 310px;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 16px 35px rgba(0, 0, 0, 0.12);
  }
`;

const Role = styled.p`
  display: flex;
  text-align: flex-start;
  font-size: 18px;
  color: ${colors.primary[500]};
  font-weight: 600;
  margin-bottom: 8px;
`;

const Name = styled.h2`
  display: flex;
  text-align: flex-start;
  font-size: 32px;
  color: #222;
  margin: 0;
  margin-bottom: 12px;
  font-weight: bold;
`;

const GithubId = styled.p`
  margin-top: 135px;
  text-align: right;
  font-size: 18px;
  color: ${colors.gray[700]};

  a {
    color: ${colors.gray[800]};
    text-decoration: none;
    cursor: pointer;

    &:hover {
      text-decoration: none;
    }
  }

  img {
    margin-left: 9px;
    width: 20px;
    height: 20px;
  }
`;

export default AboutDev;
