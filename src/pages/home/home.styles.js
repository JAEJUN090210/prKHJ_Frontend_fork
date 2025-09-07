import styled from "styled-components";

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
  background: #FAFAFA;
  padding: 50px 20px;
  position: absolute;
  border-radius: 12px;
  box-shadow: 0 16px 24px rgba(0, 0, 0, 0.2);
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: #131416;

  span {
    display: block;
    margin-bottom: 12px;
  }

  button {
    padding: 12px 24px;
    border: none;
    border-radius: 4px;
    background-color: #256EF4;
    color: #131416;
    cursor: pointer;

    &:hover {
      background-color: #1a73e8;
    }
  }
`;
