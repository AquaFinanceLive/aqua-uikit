import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}
const Logo: React.FC<LogoProps> = ({ ...props }) => {
  return (
    <Svg viewBox="0 0 81 38" {...props}>
      <image width="81" height="38" href="/images/LogoText.png" />
    </Svg>
  );
};

export default Logo;
