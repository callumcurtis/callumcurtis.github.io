import styled from "styled-components";
import { Container, Nav, Navbar } from "react-bootstrap";

import Brand from "src/components/brand";
import { useScrollTo } from "src/hooks/scroll";
import { usePropsWithConfig, useConfig } from "src/context/config";
import { circularBackgroundOnHover } from "src/styles/mixins/button";

import "bootstrap/dist/css/bootstrap.min.css";

const StyledNavigationBarBrandContainer = styled(Navbar.Brand).attrs(
  usePropsWithConfig
)`
  display: flex;
  justify-content: center;
  width: ${(props) => parseInt(props.config.layout.nav.height, 10) - 16}px;
  height: ${(props) => parseInt(props.config.layout.nav.height, 10) - 16}px;
  ${circularBackgroundOnHover}
`;

const StyledNavigationBarReservedSpace = styled.div.attrs(usePropsWithConfig)`
  height: ${(props) => props.config.layout.nav.height};
`;

const StyledNavigationBar = styled(Navbar).attrs(usePropsWithConfig)`
  min-height: ${(props) => props.config.layout.nav.height};
  background-color: ${(props) => props.config.colors.background.default};
  border-bottom: 1px solid ${(props) => props.config.colors.neutral.subtle};
`;

const StyledNavigationBarContainer = styled(Container)`
  padding: 0 30px;
  @media (max-width: 1024px) {
    padding: 0 15px;
  }
`;

const NavigationBarBrand = () => {
  const config = useConfig();
  return (
    <StyledNavigationBarBrandContainer
      onClick={useScrollTo(config.ids.hero)}
      href={"#"}
    >
      <Brand />
    </StyledNavigationBarBrandContainer>
  );
};

const StyledNavigationBarToggle = styled(Navbar.Toggle).attrs(
  usePropsWithConfig
)``;

const StyledCollapsableNavigation = styled(Navbar.Collapse).attrs(
  usePropsWithConfig
)`
  justify-content: flex-end;
`;

const StyledNavigation = styled(Nav).attrs(usePropsWithConfig)``;

const StyledNavigationLink = styled(Nav.Link).attrs(usePropsWithConfig)``;

const NavigationLink = ({
  destination,
}: {
  destination: { id: string; name: string };
}) => {
  return (
    <StyledNavigationLink
      href={`#${destination.id}`}
      onClick={useScrollTo(destination.id)}
      active={false}
    >
      {destination.name}
    </StyledNavigationLink>
  );
};

const NavigationBar = () => {
  const config = useConfig();

  return (
    <>
      <StyledNavigationBarReservedSpace />
      <StyledNavigationBar expand="sm" fixed="top">
        <StyledNavigationBarContainer fluid>
          <NavigationBarBrand />
          <StyledNavigationBarToggle aria-controls={config.ids.navigation} />
          <StyledCollapsableNavigation id={config.ids.navigation}>
            <StyledNavigation>
              {config.nav.destinations.map((destination, index) => (
                <NavigationLink key={index} destination={destination} />
              ))}
            </StyledNavigation>
          </StyledCollapsableNavigation>
        </StyledNavigationBarContainer>
      </StyledNavigationBar>
    </>
  );
};

export default NavigationBar;
