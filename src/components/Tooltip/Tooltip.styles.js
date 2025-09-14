import styled, { css } from "styled-components";
import colors from "../../styles/colors_system";

export const TooltipWrapper = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;
  cursor: pointer;
`;

export const TooltipBox = styled.div`
  font-family: "Pretendard GOV", sans-serif;
  font-weight: 400;
  font-size: 14px;
  position: absolute;
  white-space: nowrap;
  padding: 6px 10px;
  border-radius: 6px;
  background: rgba(0, 0, 0, 0.8);
  color: ${colors.gray[50]};
  opacity: 0;
  visibility: hidden;
  transform: translate(-50%, -5px);
  transition: all 0.2s ease-in-out;
  pointer-events: none;
  z-index: 100;

  ${({ $position }) =>
    $position === "top" &&
    css`
      bottom: 100%;
      left: 50%;
      margin-bottom: 7px;
    `}
  ${({ $position }) =>
    $position === "bottom" &&
    css`
      top: 100%;
      left: 50%;
      margin-top: 8px;
      transform: translate(-50%, 5px);
    `}
  ${({ $position }) =>
    $position === "left" &&
    css`
      right: 100%;
      top: 50%;
      margin-right: 8px;
      transform: translate(-5px, -50%);
    `}
  ${({ position }) =>
    position === "right" &&
    css`
      left: 100%;
      top: 50%;
      margin-left: 8px;
      transform: translate(5px, -50%);
    `}

  ${TooltipWrapper}:hover & {
    opacity: 1;
    visibility: visible;
    transform: translate(-50%, 0);
  }
`;
