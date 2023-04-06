import React, { HTMLAttributes } from "react";
import { scroller } from "react-scroll";
import styled, { css } from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import TerminalIcon from '@mui/icons-material/Terminal';
import { GitHub as GitHubIcon, LinkedIn as LinkedInIcon, SchoolOutlined as SchoolIcon} from "@mui/icons-material";

import Reveal from 'src/components/reveal';
import defaultConfig, { ConfigProvider, useConfig, usePropsWithConfig, PropsWithConfig } from 'src/config';
import defaultContent, { ContentProvider } from 'src/content';
import Hero from 'src/components/sections/hero';
import About from 'src/components/sections/about';


const StyledAnchor = styled.a.attrs(usePropsWithConfig)`
  color: ${props => props.config.theme.colors.foreground.muted};
  text-decoration: none;
  &:hover {
    color: ${props => props.config.theme.colors.foreground.muted};
  }
`;

const circularBackgroundOnHover = css<PropsWithConfig<{}>>`
  &:hover {
    background-color: ${props => props.config.theme.colors.neutral.subtle};
    border-radius: 100%;
    cursor: pointer;
  }
`;

const wideContentSize = css`
  padding: 0px 200px;
  width: 100%;
  max-width: 1800px;
  margin: 0 auto;
  @media (max-width: 1300px) {
    padding: 0px 100px;
  }
  @media (max-width: 768px) {
    padding: 0px 50px;
  }
  @media (max-width: 480px) {
    padding: 0px 20px;
  }
`;

const regularContentSize = css`
  padding: 0px 100px;
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  @media (max-width: 768px) {
    padding: 0px 50px;
  }
  @media (max-width: 480px) {
    padding: 0px 20px;
  }
`;

interface WithKey {
  key: React.Key | null | undefined;
}

const StyledExperiencesSection = styled.section.attrs(usePropsWithConfig)`
  min-height: calc(100vh - ${props => props.config.layout.nav.height});
  padding: clamp(20px, 5vh, 50px) 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StyledExperiencesContent = styled.div`
  position: relative;
  ${regularContentSize}
`;

interface ExperiencesSectionProps {
  id: string,
  title: string,
}

const StyledExperienceCard = styled.div.attrs(usePropsWithConfig)<PropsWithConfig<{isWork?: boolean}>>`
  margin: 20px 0px 20px 150px;
  padding: 20px;
  ${props => props.isWork && css`
    border-radius: 10px;
    border: 1px solid ${props.config.theme.colors.border.default};
  `}
  transition: all 0.2s linear 0s;
  @media (max-width: 1450px) {
    margin: 20px 0px 20px 200px;
  }
  @media (max-width: 1079px) {
    margin: 20px 0px;
    ${props => !props.isWork && css`
      display: none;
    `}
  }
  ${props => props.isWork && css`
    &:hover {
      border-color: ${props.config.theme.colors.border.emphasized};
      box-shadow: ${props.config.theme.shadow.default};
    }
  `}
`;

const timelineHorizontalPosition = css`
  position: absolute;
  left: 50px;
  @media (max-width: 1450px) {
    left: 100px;
  }
  @media (max-width: 1079px) {
    display: none;
  }
`;

const StyledVerticalTimeline = styled.div.attrs(usePropsWithConfig)`
  height: calc(100% - 20px);
  top: 50px;
  width: 1px;
  background-color: ${props => props.config.theme.colors.neutral.muted};
  ${timelineHorizontalPosition}
`;

const timelineNodePosition = css`
  position: absolute;
  top: -30px;
  left: -9px;
`;

const StyledTimelineNodeCircle = styled.div.attrs(usePropsWithConfig)<PropsWithConfig<{hoverable?: boolean}>>`
  ${timelineNodePosition}
  border-radius: 50%;
  background-color: ${props => props.config.theme.colors.neutral.emphasized};
  width: 19px;
  height: 19px;
  ${props => props.hoverable && css`
    transition: all 0.05s linear 0.3s;
    ${StyledExperienceCard}:hover & {
      transform: scale(1.2);
      transition-delay: 0s;
    }
  `}
`;

const StyledTimelineNodeIcon = styled.div.attrs(usePropsWithConfig)<PropsWithConfig<{hoverable?: boolean}>>`
  ${timelineNodePosition}
  color: ${props => props.config.theme.colors.neutral.emphasized};
  width: 25px;
  height: 25px;
  ${props => props.hoverable && css`
    transition: all 0.05s linear 0.3s;
    ${StyledExperienceCard}:hover & {
      transform: scale(1.2);
      transition-delay: 0s;
    }
  `}
`;

const StyledTimelineNodeToContentConnector = styled.div.attrs(usePropsWithConfig)<PropsWithConfig<{socket?: boolean}>>`
  position: absolute;
  background-color: ${props => props.config.theme.colors.neutral.emphasized};
  top: -22px;
  padding-left: ${props => props.socket ? '20px' : '0px'};
  background-clip: content-box;
  width: 0px;
  z-index: -1;
  height: 3px;
  transition: all 0.1s linear 0.2s;
  ${props => props.socket && css`
    &:before {
      content: "";
      position: absolute;
      top: -16px;
      left: 4px;
      width: 18px;
      height: 35px;
      background-color: transparent;
      border-top-right-radius: 16px;  /* 100px of height + 10px of border */
      border-bottom-right-radius: 16px; /* 100px of height + 10px of border */
      border: 0px solid ${props.config.theme.colors.neutral.emphasized};
      border-left: 0;
      transition-delay: 0.3s;
    }
    ${StyledExperienceCard}:hover &:before {
      border-width: 3px;
      transition-delay: 0.05s;
    }
  `}
  ${StyledExperienceCard}:hover & {
    width: 100px;
    transition-delay: 0.05s;
  }
`;

const StyledTimelineDateRange = styled.div`
  position: absolute;
  top: -30px;
  right: 20px;
  font-size: 14px;
  white-space: nowrap;
`;

const TimelineAlignment = styled.div`
  padding: inherit;
  ${timelineHorizontalPosition}
`;

const StyledDateRange = styled.div`
  display: none;
  @media (max-width: 1079px) {
    display: block;
  }
`;

const WorkExperience = () => {
  return (
    <Reveal origin="bottom">
      <StyledExperienceCard isWork>
        <StyledVerticalTimeline>
          <StyledTimelineDateRange>May 2019 - Sep 2021</StyledTimelineDateRange>
          <StyledTimelineNodeCircle hoverable/>
          <StyledTimelineNodeToContentConnector/>
        </StyledVerticalTimeline>
        <h3>Software Engineering</h3>
        <StyledDateRange>May 2019 - Sep 2021</StyledDateRange>
        <p>At Ubisoft Quebec from 2019 to 2021</p>
        <p>Working on Assassin's Creed Valhalla</p>
      </StyledExperienceCard>
    </Reveal>
  )
}

const NonWorkExperience = ({ timelineNode, socket }: { timelineNode: React.ReactNode, socket?: boolean }) => {
  return (
    <Reveal origin="bottom">
      <StyledExperienceCard>
        <StyledVerticalTimeline>
          <StyledTimelineDateRange>May 2019 - Sep 2021</StyledTimelineDateRange>
          {timelineNode}
          <StyledTimelineNodeToContentConnector socket={socket} />
        </StyledVerticalTimeline>
        <p style={{ fontSize: "14px" }}>Continuing: Software Engineering at the University of Victoria</p>
      </StyledExperienceCard>
    </Reveal>
  );
}

const School = () => {
  return (
    <NonWorkExperience
      socket
      timelineNode={
        <StyledTimelineNodeIcon hoverable>
          <SchoolIcon style={{ width: "100%", height: "100%", position: "absolute", right: "3px", top: "-3px" }} />
        </StyledTimelineNodeIcon>
      }
    />
  );
}

const Experiences = ({ id, title, ...props }: ExperiencesSectionProps) => {
  const { theme } = useConfig();
  return (
      <StyledExperiencesSection id={id} {...props}>
          <div style={{display: "flex", justifyContent: "center"}}>
            <StyledExperiencesContent>
              <h2 style={{textAlign: "center"}}>{title}</h2>
              <School/>
              <WorkExperience/>
              <School/>
              <WorkExperience/>
              <School/>
              <TimelineAlignment>
                <Reveal origin="top" scale={0.5} delay={200} distance="5px">
                  <TerminalIcon style={{left: "calc(50% - 11px)", position: "absolute", top: "20px", color: theme.colors.neutral.emphasized}}/>
                </Reveal>
              </TimelineAlignment>
            </StyledExperiencesContent>
          </div>
      </StyledExperiencesSection>
  )
}

interface TestimonialProps {
  content: string,
  attribution: string,
}

interface TestimonialSectionProps {
  testimonials: (TestimonialProps & WithKey)[],
}

const StyledTestimonialSection = styled.div.attrs(usePropsWithConfig)`
  min-height: calc(100vh - ${props => props.config.layout.nav.height});
  padding: clamp(20px, 5vh, 50px) 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StyledTestimonialRow = styled.div`
  ${wideContentSize}
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  column-gap: 100px;
  max-height: 500px;
  overflow: hidden;
  text-align: left;
`;

const StyledTestimonial = styled.div`
  flex-basis: 350px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 500px;
  max-width: 520px;
`;

const TestimonialQuotationMark = (props: HTMLAttributes<HTMLSpanElement>) => {
  return <span {...props}>“</span>
}

const StyledTestimonialQuotationMark = styled(TestimonialQuotationMark)`
  font-size: 48px;
  font-family: "Arial Black";
  height: 60px;
`;

const Testimonial = ({content, attribution}: TestimonialProps) => {
  return (
    <StyledTestimonial>
      <StyledTestimonialQuotationMark/>
      <h3>{content}</h3>
      <p>{attribution}</p>
    </StyledTestimonial>
  )
};

const Testimonials = ({ testimonials, ...props }: TestimonialSectionProps) => {
  return (
      <StyledTestimonialSection {...props}>
        <Reveal>
          <StyledTestimonialRow>
            {
              testimonials.map(({key, ...testimonial}) => (
                <Testimonial key={key} {...testimonial}/>
              ))
            }
          </StyledTestimonialRow>
        </Reveal>
      </StyledTestimonialSection>
  )
};

const StyledProjectsSection = styled.section.attrs(usePropsWithConfig)`
  min-height: calc(100vh - ${props => props.config.layout.nav.height});
  padding: clamp(20px, 5vh, 50px) 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

const StyledProjectsContent = styled.div`
  ${regularContentSize}
`;

interface ProjectsSectionProps {
  id: string,
  title: string,
  content: string,
}

const StyledProjectCard = styled.div.attrs(usePropsWithConfig)`
  position: relative;
  margin: 20px 0px;
  padding: 20px;
  border-radius: 10px;
  border: 1px solid ${props => props.config.theme.colors.border.default};
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${props => props.config.theme.shadow.default};
    border: 1px solid ${props => props.config.theme.colors.border.emphasized};
  }
`;

const AnchorOverlay = (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
  return (
    <StyledAnchor {...props}>
      <span style={{width: "100%", height: "100%", zIndex: "1", position: "absolute", top: 0, left: 0}}/>
    </StyledAnchor>
  )
}

const Project = () => {
  return (
    <Reveal>
      <StyledProjectCard>
        <AnchorOverlay href="https://css-tricks.com/almanac/properties/j/justify-content/"/>
        <div style={{display: "flex", flexDirection: "row", flexWrap: "wrap-reverse", columnGap: "20px"}}>
          <div style={{flexGrow: 10, flexBasis: "400px"}}>
            <div style={{display: "flex", flexDirection: "column", textAlign: "left", height: "100%", padding: "15px", justifyContent: "space-between"}}>
              <h3 style={{marginBottom: "1rem"}}>Project Title</h3>
              <p>Quisque mollis hendrerit risus, ut ullamcorper lorem porta id. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer vestibulum velit vel mauris aliquet ultrices. Donec pulvinar augue non sapien commodo viverra. Pellentesque eget facilisis purus. Integer dignissim urna felis, eget dictum arcu facilisis et. Pellentesque malesuada nibh ut sem maximus scelerisque. Donec suscipit massa ut purus mollis, a viverra tellus feugiat.</p>
              <p>Keywords</p>
            </div>
          </div>
          <div style={{alignSelf: "center", flexBasis: "400px", flexGrow: 1}}>
            <img src="https://via.placeholder.com/600x400" style={{height: "auto", width: "100%", maxHeight: "100%"}}/>
          </div>
        </div>
      </StyledProjectCard>
    </Reveal>
  )
}

const Projects = ({ id, title, ...props }: ProjectsSectionProps) => {
  return (
    <StyledProjectsSection id={id} {...props}>
      <StyledProjectsContent>
        <Reveal>
          <h2>{title}</h2>
        </Reveal>
        {
          Array.from({length: 6}).map((_, i) => (
              <Project key={i}/>
          ))
        }
      </StyledProjectsContent>
    </StyledProjectsSection>
  )
};

const Brand = styled(Navbar.Brand).attrs(usePropsWithConfig)`
  font-family: 'Kumbh Sans';
  width: ${props => parseInt(props.config.layout.nav.height, 10) - 16}px;
  height: ${props => parseInt(props.config.layout.nav.height, 10) - 16}px;
  text-align: center;
  ${circularBackgroundOnHover}
`;

interface NavigationBarElement {
  children: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLElement>;
  href?: string;
}

interface NavigationBarProps {
  brand: NavigationBarElement;
  sections: (NavigationBarElement & WithKey)[];
}

const NavigationBar = ({ brand, sections }: NavigationBarProps) => {
  const config = useConfig();
  return (
    <>
      <div style={{ height:  config.layout.nav.height}} />
      <Navbar bg="light" expand="sm" fixed="top" style={{ minHeight: config.layout.nav.height }}>
        <Container fluid style={{paddingLeft: "30px", paddingRight: "30px"}}>
          <Brand className="Brand" onClick={brand.onClick} href={brand.href || "#"}>{brand.children}</Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="justify-content-end" style={{ width: "100%" }}>
              {sections.map((section) => (
                <Nav.Link {...(section.href && { href: section.href })} key={section.key} onClick={section.onClick} active={false}>{section.children}</Nav.Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

const StyledFixedSocials = styled.div.attrs(usePropsWithConfig)`
  position: fixed;
  display: flex;
  margin: 0 50px 0 0;
  align-items: center;
  bottom: 0;
  right: 0;
  flex-direction: column;
  & svg {
    width: 35px;
    height: auto;
    color: ${props => props.config.theme.colors.neutral.emphasized};
    transition: all 0.2s ease-in-out;
    will-change: transform;
  }
  & a {
    margin: 0 0 20px 0;
  }
  & svg:hover {
    transform: translateY(-2px);
  }
  @media (max-width: 1300px) {
    margin: 0 35px 0 0;
  }
  @media (max-width: 768px) {
    display: none;
`;

const FixedSocials = ({ children, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <StyledFixedSocials {...props}>
      {children}
      <StyledFixedSocialsToBottomOfViewportConnector/>
    </StyledFixedSocials>
  )
}

const StyledFixedSocialsToBottomOfViewportConnector = styled.div.attrs(usePropsWithConfig)`
  height: calc(clamp(10px, 10vh, 100px) - 10px);
  width: 0px;
  border: 1px solid ${props => props.config.theme.colors.neutral.emphasized};
`;

// TODO: define custom types for react-scroll options (Definitely Typed package uses any)
const useScrollToHashOnMount = (options: any) => {
  React.useEffect(() => {
    const hash = window.location.hash;
    if (hash && document.querySelector(hash)) {
      scroller.scrollTo(hash.split("#")[1], options);
    }
  }, [options]);
};

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
  & p {
    font-size: 14px;
    padding: 0 10px;
  }
`;

const StyledFooterSocials = styled.div.attrs(usePropsWithConfig)`
  display: flex;
  margin: 0 0 20px 0;
  justify-content: center;
  flex-direction: row;
  & svg {
    width: 35px;
    height: auto;
    color: ${props => props.config.theme.colors.neutral.emphasized};
    transition: all 0.2s ease-in-out;
    will-change: transform;
  }
  & a {
    margin: 0 10px;
  }
  & svg:hover {
    transform: translateY(-2px);
  }
  @media (min-width: 768px) {
    display: none;
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

  const config = defaultConfig;

  const scrollOptions = {
    offset: -parseInt(config.layout.nav.height, 10),
    duration: 300,
    delay: 0.2,
    smooth: true,
    isDynamic: true,
    ignoreCancelEvents: false,
  };

  useScrollToHashOnMount(scrollOptions);

  const about = {
    id: "about",
    title: "About",
  }

  const experiences = {
    id: "experience",
    title: "Experience",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel nunc et enim efficitur feugiat a eget dolor. Ut pellentesque, quam id ultrices facilisis, nisi nulla finibus velit, id aliquam ipsum orci non nibh. Sed blandit non libero vitae bibendum. Donec a dolor turpis. Sed suscipit interdum mi, in elementum neque aliquam at. Aenean quis massa a magna egestas pellentesque. Sed tristique semper ante, a gravida ex auctor at."
  }

  const projects = {
    id: "projects",
    title: "Projects",
    content: "Donec lobortis interdum faucibus. Etiam bibendum, nulla id eleifend congue, nisi nulla iaculis elit, sed eleifend elit elit vel elit. Fusce non dapibus velit. Nullam vel eros et augue commodo auctor vitae sed turpis. Duis euismod aliquet felis, at malesuada sapien vestibulum ac. Fusce sit amet lacinia dolor, vel bibendum nisl."
  }

  const brand = {
    children: "C",
    onClick: () => scroller.scrollTo(config.ids.hero, scrollOptions),
  };

  const sectionLinks = [
    about,
    experiences,
    projects,
  ].map((section) => ({
    key: section.id,
    href: `#${section.id}`,
    children: section.title,
    onClick: () => scroller.scrollTo(section.id, scrollOptions),
  }));

  const testimonials = {
    testimonials: [
      {
        key: "1",
        content: "Callum is a big big helper and did a good job, all the time, yes indeed",
        attribution: "Callum, Student",
      },
      {
        key: "2",
        content: "Callum is a big big helper and did a good job, all the time, yes indeed",
        attribution: "Callum, Student",
      },
      {
        key: "3",
        content: "Callum is a big big helper and did a good job, all the time, yes indeed",
        attribution: "Callum, Student",
      },
    ]
  }

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

  const fixedSocials = {
    children: socials,
  }

  const footer = {
    socials: socials,
    credits: {
      content: "Created by Callum Curtis using React and TypeScript",
      href: "https://github.com/callumcurtis/callumcurtis.github.io"
    },
  }

  return (
    <ConfigProvider config={config}>
      <ContentProvider content={defaultContent}>
        <NavigationBar brand={brand} sections={sectionLinks}/>
        <StyledMainContainer>
          <Hero/>
          <About/>
          <Experiences {...experiences}/>
          <Testimonials {...testimonials}/>
          <Projects {...projects}/>
        </StyledMainContainer>
        <FixedSocials {...fixedSocials}/>
        <Footer {...footer}/>
      </ContentProvider>
    </ConfigProvider>
  );
};

export default App;