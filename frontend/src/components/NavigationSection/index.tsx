import styled from "styled-components";
import { NavLink } from "react-router-dom";
import driver from "../../assets/images/driver.svg";
import settings from "../../assets/images/settings.svg";
import logo from "../../assets/images/yaak_logo.svg";
import collapse from "../../assets/images/collapse.svg";
import { useState } from "react";

const NavigationSection = () => {
  const [navigationViewState, setNavigationViewState] = useState(true);

  const handleSwitchNavigationView = () => {
    setNavigationViewState((value) => !value);
  };

  return (
    <Wrapper property={navigationViewState}>
      <LogoContainer>
        <img src={logo} />
        <img
          style={{
            cursor: "pointer",
            transform: navigationViewState ? "rotate(0deg)" : "rotate(180deg)",
          }}
          src={collapse}
          onClick={handleSwitchNavigationView}
        />
      </LogoContainer>
      <Nav>
        <NavItem to="/drives" end>
          <Image src={driver} />
          Drives
        </NavItem>
        <NavItem to="/settings" end>
          <Image src={settings} />
          Settings
        </NavItem>
      </Nav>
    </Wrapper>
  );
};

export default NavigationSection;

const Wrapper = styled.div<{ property: boolean }>`
  position: relative;
  transition: 0.5s;
  right: ${({ property }) => (property ? "0px" : "13%")};
  height: 95vh;
  width: 14%;
  border-right: 1px solid #e3e8e5;
  padding: 16px;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 65px;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const getNavLinkClass = ({ isActive }: { isActive: boolean }) =>
  isActive ? "active" : "";

const NavItem = styled(NavLink).attrs({ className: getNavLinkClass })`
  width: 100%;
  height: 48px;
  padding: 0px 16px;
  text-decoration: none;
  color: #000;
  display: flex;
  align-items: center;
  gap: 10px;

  &.active {
    background-color: #eaffe9;
    color: #00a751;
  }
`;

const Image = styled.img``;
