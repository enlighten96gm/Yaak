import styled from "styled-components";
import { NavLink } from "react-router-dom";
import driver from "../../assets/images/driver.svg";
import settings from "../../assets/images/settings.svg";
import logo from "../../assets/images/yaak_logo.svg";
import collapse from "../../assets/images/collapse.svg";
import { useState } from "react";

const NavigationSection = () => {
  const [navigationViewState, setNavigationViewState] = useState(false);

  const handleSwitchNavigationView = () => {
    setNavigationViewState((value) => !value);
  };

  return (
    <Wrapper property={navigationViewState}>
      <LogoContainer>
        <img
          src={logo}
          style={{ display: navigationViewState ? "none" : "block" }}
        />
        <img
          style={{
            cursor: "pointer",
            transform: navigationViewState ? "rotate(180deg)" : "rotate(0deg)",
          }}
          src={collapse}
          onClick={handleSwitchNavigationView}
        />
      </LogoContainer>
      {navigationViewState || (
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
      )}
    </Wrapper>
  );
};

export default NavigationSection;

const Wrapper = styled.div<{ property: boolean }>`
  transition: 0.5s;
  height: 95vh;
  border-right: 1px solid #e3e8e5;
  padding: 16px;
  width: ${({ property }) => (property ? "1%" : "14%")};
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
