import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Flex from "../../components/Flex/Flex";
import { HamburgerIcon, HamburgerCloseIcon, LogoIcon as LogoWithText } from "./icons";
import MenuButton from "./MenuButton";

interface Props {
  isPushed: boolean;
  isDark: boolean;
  togglePush: () => void;
  href: string;
}

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  .desktop-icon {
    width: 81px;
  }
`;

const Logo: React.FC<Props> = ({ isPushed, togglePush, isDark, href }) => {
  const isAbsoluteUrl = href.startsWith("http");
  const innerLogo = (
    <>
      {/* <LogoIcon className="mobile-icon" /> */}
      <LogoWithText className="desktop-icon" isDark={isDark} />
    </>
  );

  return (
    <Flex>
      <MenuButton aria-label="Toggle menu" onClick={togglePush} mr="24px">
        {isPushed ? (
          <HamburgerCloseIcon width="24px" color="background" />
        ) : (
          <HamburgerIcon width="24px" color="background" />
        )}
      </MenuButton>
      {isAbsoluteUrl ? (
        <StyledLink as="a" href={href} aria-label="Aqua home page">
          {innerLogo}
        </StyledLink>
      ) : (
        <StyledLink to={href} aria-label="Aqua home page">
          {innerLogo}
        </StyledLink>
      )}
    </Flex>
  );
};

export default Logo;
