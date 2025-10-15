import styled from "styled-components";
import colors from "../../styles/colors_system";

export const Content = styled.div`
  background-color: ${colors.gray[100]};
  justify-content: center;
  align-items: flex-start;
  display: flex;
  gap: 35px;
  padding: 35px 0px;
`;

export const BoardContainer = styled.div`
  background-color: ${colors.gray[0]};
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 24px;
  display: flex;
  flex-direction: column;

  width: 950px;
  min-height: 800px;
  height: auto;
`;

export const BoardTitle = styled.h1`
  font-family: "Pretendard GOV", sans-serif;
  font-weight: 700;
  font-size: 28px;
  colors: ${colors.text.basic}
  margin-bottom: 50px;
`;

// --- 검색 및 필터 컴포넌트 스타일 ---
export const SearchFilterBox = styled.div`
  width: 255px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const SectionContainer = styled.div`
  background-color: ${colors.gray[0]};
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

export const SectionTitle = styled.h2`
  font-family: "Pretendard GOV", sans-serif;
  font-weight: 700;
  font-size: 23px;

  color: ${colors.text.basic};
  margin-bottom: 16px;
`;

export const RadioGroup = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  gap: 16px;
  margin-bottom: 16px;
`;

export const RadioLabel = styled.label`
  font-family: "Pretendard GOV", sans-serif;
  font-weight: 700;
  font-size: 16px;

  display: flex;
  align-items: center;
  color: ${colors.text.basic};
  cursor: pointer;

  input[type="radio"] {
    appearance: none;
    width: 18px;
    height: 18px;
    border: 2px solid #ccc;
    border-radius: 50%;
    margin-right: 8px;
    position: relative;

    &:checked {
      border-color: ${colors.primary[500]};

      &:after {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 9px;
        height: 9px;
        background-color: ${colors.primary[500]};
        border-radius: 50%;
      }
    }
  }
`;

export const SearchInputContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 0 12px;
  height: 45px;

  &:focus-within {
    border-color: ${colors.primary[500]};
    box-shadow: 0 0 0 2px rgba(46, 125, 255, 0.2);
  }
`;

export const SearchInput = styled.input`
  font-family: "Pretendard GOV", sans-serif;
  font-weight: 400;
  font-size: 17px;

  width: 100%;
  border: none;
  outline: none;
  color: ${colors.gray[500]};
  background-color: transparent;
`;

export const SearchIcon = styled.span`
  margin-left: 8px;
  height: 25px;
  cursor: pointer;
`;

export const FilterSelect = styled.select`
  font-family: "Pretendard GOV", sans-serif;
  font-weight: 400;

  width: 100%;
  height: 40px;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 0 12px;
  font-size: 16px;
  color: ${colors.text.basic};
  appearance: none;
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="%23999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>');
  background-repeat: no-repeat;
  background-position: right 12px center;
  background-size: 16px;

  &:focus {
    border-color: ${colors.primary[500]};
    box-shadow: 0 0 0 2px rgba(46, 125, 255, 0.2);
    outline: none;
  }
`;

export const FilterLabel = styled.label`
  font-family: "Pretendard GOV", sans-serif;
  font-weight: 700;
  font-size: 17px;
  color: ${colors.text.basic};
  margin-bottom: 8px;
  margin-top: 15px;

  &:first-of-type {
    margin-top: 0;
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 40px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s;
`;

export const ResetButton = styled(Button)`
  background-color: ${colors.gray[0]};
  color: ${colors.text.primary};
  border: 1px solid ${colors.button.basic};
  margin-top: 16px;

  &:hover {
    background-color: ${colors.primary[100]};
  }

  &:active {
    background-color: ${colors.primary[200]};
  }
`;

export const ExcelButton = styled(Button)`
  background-color: ${colors.button.default};
  color: ${colors.gray[0]};
  margin-top: 8px;

  &:hover {
    background-color: ${colors.button.hover};
  }

  &:active {
    background-color: ${colors.button.pressed};
  }
`;
