import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Logo: React.FC<LogoProps> = ({ ...props }) => {
  return (
    <Svg viewBox="0 0 205 26" {...props}>
      <image
        width="205"
        height="26"
        href="/images/goong/LogoText.png"
      />
    </Svg>
  );
};

export default Logo;
