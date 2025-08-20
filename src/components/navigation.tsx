import styled from "styled-components";
import { Nav, Navbar } from "react-bootstrap";

import Brand from "src/components/brand";
import { useScrollTo } from "src/hooks/scroll";
import { usePropsWithConfig, useConfig } from "src/context/config";
import { circularBackgroundOnHover } from "src/styles/mixins/button";
import { wideContentSize } from "src/styles/mixins/section";

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

const StyledNavigationBar = styled(Navbar).attrs(usePropsWithConfig)`
  min-height: ${(props) => props.config.layout.nav.height};
  background-color: ${(props) => props.config.colors.nav.background};
  backdrop-filter: blur(12px);
`;

const StyledNavigationBarContent = styled.div.attrs(usePropsWithConfig)`
  ${wideContentSize}
  display: flex;
  justify-content: space-between;
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

const StyledNavigation = styled(Nav).attrs(usePropsWithConfig)`
  display: flex;
  flex-direction: row;
  column-gap: 0.5rem;
`;

const StyledNavigationLink = styled(Nav.Link).attrs(usePropsWithConfig)`
  color: ${(props) => props.config.colors.foreground.default};
  font-size: 0.9rem;
`;

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
    <StyledNavigationBar fixed="top">
      <StyledNavigationBarContent>
        <NavigationBarBrand />
        <StyledNavigation>
          {config.nav.destinations.map((destination, index) => (
            <NavigationLink key={index} destination={destination} />
          ))}
        </StyledNavigation>
      </StyledNavigationBarContent>
    </StyledNavigationBar>
  );
};

export default NavigationBar;
