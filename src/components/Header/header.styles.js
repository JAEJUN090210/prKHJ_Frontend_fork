import styled from "styled-components";
import colors from "../../styles/colors_system";

/* ──────────────── 헤더 전체 래퍼 ──────────────── */
export const HeaderWrapper = styled.header`
  width: 100%;
  height: 75px;
  padding: 5px 10% 12px;
  border-bottom: 1px solid #8a949e;
  background-color: ${colors.gray[50]};
  box-sizing: border-box;

  position: sticky;
  top: 0;
  z-index: 1000;
`;

/* ──────────────── 헤더 내부 상단 행 (로고 + 링크) ──────────────── */
export const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;

/* ──────────────── 왼쪽 영역 (로고 관련) ──────────────── */
export const LeftArea = styled.div`
  font-family: "Pretendard GOV", sans-serif;
  font-weight: 700;
  display: flex;
  flex-direction: row;
  gap: 14px;
  align-items: center;
  cursor: pointer;
`;

export const LogoText = styled.div`
  font-size: 40px;
  font-weight: 700;
  color: ${colors.text.primary};
  letter-spacing: 8px;
  cursor: pointer;
`;

export const SubText = styled.div`
  font-size: 17px;
  color: ${colors.primary[300]};
  font-weight: 700;
  cursor: pointer;
`;

/* ──────────────── 오른쪽 영역 (링크 + 네비게이션) ──────────────── */
export const RightArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  gap: 14px;
`;

export const TopLinks = styled.div`
  font-family: "Pretendard GOV", sans-serif;
  font-weight: 400;
  display: flex;
  align-items: center;
  gap: 8px;

  a {
    font-size: 15px;
    color: ${colors.text.basic};
    text-decoration: none;
    cursor: pointer;

    &:hover {
      color: ${colors.text.border};
      font-weight: 600;
    }
  }
`;

export const Divider = styled.span`
  color: ${colors.text.basic};
  margin: 0 4px;
`;

export const NavMenu = styled.nav`
  font-family: "Pretendard GOV", sans-serif;
  font-weight: 700;
  display: flex;
  justify-content: flex-end;
  gap: 24px;

  a {
    font-size: 18px;
    color: ${colors.text.basic};
    text-decoration: none;
    cursor: pointer;

    &:hover {
      color: ${colors.text.border};
      font-weight: 800;
    }
  }
`;
