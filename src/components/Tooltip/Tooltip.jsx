import React from "react";
import { TooltipWrapper, TooltipBox } from "./Tooltip.styles";

const InfoTooltip = ({ children, text, position = "top" }) => {
  return (
    <TooltipWrapper>
      {children}
      <TooltipBox $position={position}>{text}</TooltipBox>
    </TooltipWrapper>
  );
};

export default InfoTooltip;
