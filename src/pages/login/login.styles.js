import styled from "styled-components";
import colors from "../../styles/colors_system";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 610px;
  background-color: ${colors.gray[100]};
`;

export const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  background: ${colors.gray[0]};
  padding: 40px 42px;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 410px;
  height: 500px;
`;

export const SubTitle = styled.h3`
  margin-bottom: 10px;
  font-weight: 500;
  font-size: 15px;
  color: ${colors.gray[600]};
`;

export const Title = styled.h2`
  margin-bottom: 38px;
  font-weight: 600;
  font-size: 27px;
  color: ${colors.gray[900]};
`;

export const Space = styled.div`
  height: 20px;
`;

export const Label = styled.label`
  display: block;
  align-self: flex-start;
  margin-bottom: 14px;
  font-weight: 500;
  font-size: 15px;
  color: ${colors.gray[800]};
`;

export const Input = styled.input`
  width: 340px;
  padding: 16px;
  margin-bottom: 10px;
  border: 1px solid ${colors.gray[300]};
  border-radius: 9px;
  font-size: 17px;
  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

export const CheckContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 18px;
  width: 100%;
`;

export const Checkbox = styled.input`
  margin-right: 9px;
  width: 18px;
  height: 18px;
  accent-color: ${colors.primary[500]};
  cursor: pointer;
`;

export const CheckLabel = styled.label`
  font-size: 17px;
  color: ${colors.gray[700]};
  cursor: pointer;
`;

export const Button = styled.button`
  width: 340px;
  margin-top: 18px;
  padding: 12px;
  background: ${colors.primary[500]};
  color: white;
  border: none;
  border-radius: 9px;
  font-size: 19px;
  cursor: pointer;
  &:hover {
    background: ${colors.primary[600]};
  }
  &:active {
    background: ${colors.primary[400]};
  }
`;
