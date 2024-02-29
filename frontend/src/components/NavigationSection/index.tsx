import styled from "styled-components";
import { NavLink } from "react-router-dom";
import driver from "../../assets/images/driver.svg";
import settings from "../../assets/images/settings.svg";

const NavigationSection = () => {
  return (
    <Wrapper>
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

const Wrapper = styled.div`
  height: 100%;
  width: 272px;
  border-right: 1px solid #e3e8e5;
`;

const Image = styled.img``;
