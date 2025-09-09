import styled from "styled-components";
import colors from "../../styles/colors_system";

export const Wrapper = styled.div`
  position: relative;
  height: 100vh;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Box = styled.div`
  font-family: "Pretendard GOV", sans-serif;
  font-weight: 700;
  background: ${colors.gray[50]};
  padding: 35px 20px;
  position: absolute;
  border-radius: 12px;
  box-shadow: 0 16px 24px rgba(0, 0, 0, 0.2);
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: ${colors.text.basic};

  span {
    display: block;
    margin-bottom: 12px;
    font-size: 17px;
  }

  button {
    padding: 12px 24px;
    border: none;
    border-radius: 4px;
    background-color: ${colors.button.default};
    color: ${colors.gray[50]};
    cursor: pointer;
    font-size: 15px;
    margin-top: 30px;

    &:hover {
      background-color: ${colors.button.hover};
    }

    &:active {
      background-color: ${colors.button.pressed};
    }
  }
`;
