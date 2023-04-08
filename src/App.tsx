import React from "react";
import styled from "styled-components";
import { GitHub as GitHubIcon, LinkedIn as LinkedInIcon} from "@mui/icons-material";

import defaultConfig, { ConfigProvider, usePropsWithConfig } from 'src/utils/config';
import defaultContent, { ContentProvider } from 'src/utils/content';
import { useAutoScrollToHashOnMount } from "./utils/scroll";
import Hero from 'src/components/sections/hero';
import About from 'src/components/sections/about';
import Experience from 'src/components/sections/experience';
import Testimonials from "./components/sections/testimonials";
import Projects from "./components/sections/projects";
import NavigationBar from "./components/navigation";
import SideSocials from "./components/side-socials";

import "./App.css";


const StyledAnchor = styled.a.attrs(usePropsWithConfig)`
  color: ${props => props.config.colors.foreground.muted};
  text-decoration: none;
  &:hover {
    color: ${props => props.config.colors.foreground.muted};
  }
`;

const ExternalLink = ({ children, href, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
  return (
    <StyledAnchor {...props} href={href} target="_blank" rel="noopener noreferrer">{children}</StyledAnchor>
  )
}

const Social = ({href, icon}: {href: string, icon: React.ReactNode}) => {
  return (
    <ExternalLink href={href}>
      {icon}
    </ExternalLink>
  )
}

const StyledMainContainer = styled.main``;

const StyledFooter = styled.footer`
  margin-top: 80px;
  padding: 20px 0;
  text-align: center;
  font-size: 14px;
  & p {
    padding: 0 10px;
  }
`;

const StyledFooterSocials = styled.div.attrs(usePropsWithConfig)`
  display: none;
  margin: 0 0 20px 0;
  justify-content: center;
  flex-direction: row;
  & svg {
    width: 35px;
    height: auto;
    color: ${props => props.config.colors.neutral.default};
    transition: all 0.2s ease-in-out;
    will-change: transform;
  }
  & a {
    margin: 0 10px;
  }
  & svg:hover {
    transform: translateY(-2px);
  }
  @media (max-width: calc(${props => props.config.breakpoints.switchToSocialsOnSide} - 1px)) {
    display: flex;
  }
`;

const FooterSocials = ({ children, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <StyledFooterSocials {...props}>
      {children}
    </StyledFooterSocials>
  )
}

interface credits {
  content: string;
  href: string;
}

const Footer = ({socials, credits}: {socials: React.ReactNode, credits: credits}) => {
  return (
    <StyledFooter>
      <FooterSocials children={socials}/>
      <ExternalLink href={credits.href}>
        <p>{credits.content}</p>
      </ExternalLink>
    </StyledFooter>
  )
}

const App: React.FC = () => {

  useAutoScrollToHashOnMount();

  const socials = [
    {
      key: "github",
      href: "https://github.com/callumcurtis",
      icon: <GitHubIcon/>,
    },
    {
      key: "linkedin",
      href: "https://www.linkedin.com/in/callumcurtis/",
      icon: <LinkedInIcon/>,
    },
  ].map((social) => (
    <Social key={social.key} href={social.href} icon={social.icon}/>
  ));

  const footer = {
    socials: socials,
    credits: {
      content: "Created by Callum Curtis using React and TypeScript",
      href: "https://github.com/callumcurtis/callumcurtis.github.io"
    },
  }

  return (
    <ConfigProvider config={defaultConfig}>
      <ContentProvider content={defaultContent}>
        <NavigationBar/>
        <StyledMainContainer>
          <Hero/>
          <About/>
          <Experience/>
          <Testimonials/>
          <Projects/>
        </StyledMainContainer>
        <SideSocials/>
        <Footer {...footer}/>
      </ContentProvider>
    </ConfigProvider>
  );
};

export default App;