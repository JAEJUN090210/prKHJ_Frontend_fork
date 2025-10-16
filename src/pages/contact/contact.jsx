import React from "react";
import styled from "styled-components";
import colors from "../../styles/colors_system";

import InfoTooltip from "../../components/Tooltip/Tooltip";
import { Info } from "lucide-react";

function Contact() {
  const textToCopy = "jaejun090210@naver.com";

  const handleCopy = () => {
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => alert("복사되었습니다!"))
      .catch((err) => console.error("복사 실패:", err));
  };

  return (
    <Body>
      <Wrapper>
        <SubTitle>문의하실 수 있는 채널을 안내해 드릴게요</SubTitle>
        <Title>Contact Us</Title>

        <Description>
          프로젝트나 협업, 또는 기술 관련 문의가 있으신가요? <br />
          아래 채널을 통해 편하게 연락주세요. 항상 열린 자세로 기다리고 있습니다.
        </Description>

        <Section>
          <Set>
            {/* 이메일 */}
            <Card>
              <Type>
                Email{" "}
                <InfoTooltip
                  text={`이메일 주소를 클릭하면 클립보드에 복사됩니다.`}
                  position="top">
                  <span>
                    <Info size={19} />
                  </span>
                </InfoTooltip>
              </Type>
              <Content onClick={handleCopy}>jaejun090210@naver.com</Content>
            </Card>
            <KakaoCard>
              <Type>KakaoTalk</Type>
              <KakaoButton href="https://open.kakao.com/me/dsm11fejaejun" target="_blank">
                KHJ Kakao Channel
              </KakaoButton>
            </KakaoCard>
          </Set>
        </Section>

        <Footer>
          <p>응답 시간: 평일 오전 10시 ~ 오후 10시</p>
          <p>주말 및 공휴일에는 답변이 지연될 수 있습니다.</p>
        </Footer>
      </Wrapper>
    </Body>
  );
}

export default Contact;

const Body = styled.div`
  margin: 0;
  padding: 0;
  background-color: ${colors.gray[100]};
`;

const Wrapper = styled.div`
  box-sizing: border-box;
  padding: 80px 24px;
  padding-top: 40px;
  background-color: ${colors.gray[100]};
  min-height: 500px;
  text-align: center;
  margin: 0 200px;
`;

const SubTitle = styled.p`
  text-align: left;
  font-size: 22px;
  font-weight: 600;
  color: ${colors.primary[500]};
  margin-bottom: 10px;
`;

const Title = styled.h1`
  text-align: left;
  font-size: 42px;
  font-weight: bold;
  color: #222;
  margin-bottom: 25px;
`;

const Description = styled.p`
  margin-left: 18px;
  text-align: left;
  font-size: 19px;
  line-height: 1.5;
  color: ${colors.gray[700]};
  margin-bottom: 30px;
`;

const Highlight = styled.span`
  color: ${colors.primary[500]};
  font-weight: 600;
`;

const Section = styled.div`
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
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.08);
  padding: 48px 32px;
  width: 430px;
  height: 200px;
  text-align: left;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 18px 40px rgba(0, 0, 0, 0.12);
  }
`;

const Type = styled.div`
  font-size: 22px;
  color: ${colors.primary[500]};
  font-weight: 600;
  margin-bottom: 16px;
`;

const Content = styled.p`
  margin-top: 45px;
  margin-left: 24px;
  font-size: 24px;
  font-weight: 500;
  color: ${colors.gray[800]};
  word-break: break-all;
  cursor: pointer;

  &:hover {
    color: ${colors.primary[500]};
    text-decoration: underline;
  }
`;

const KakaoCard = styled(Card)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const KakaoButton = styled.a`
  display: inline-block;
  background-color: #fee500;
  color: #000;
  font-weight: 600;
  text-align: center;
  border-radius: 16px;
  padding: 18px 0;
  margin-top: 16px;
  text-decoration: none;
  font-size: 20px;
  transition: all 0.25s ease;
  cursor: pointer;

  &:hover {
    background-color: #fdd835;
    transform: translateY(-3px);
  }
`;

const Footer = styled.div`
  margin-top: 45px;
  font-size: 18px;
  color: ${colors.gray[600]};
  line-height: 1.6;
`;
