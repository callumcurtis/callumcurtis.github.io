import React from "react";
import { scroller } from "react-scroll";
import styled, { css } from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import WAVES from 'vanta/dist/vanta.waves.min';
import ScrollReveal from 'scrollreveal'
import TerminalIcon from '@mui/icons-material/Terminal';
import SchoolIcon from '@mui/icons-material/SchoolOutlined';

const navHeight = "56px";

ScrollReveal({
    viewOffset: { top: parseInt(navHeight) + 50, bottom: 50},
    distance: '30px',
    duration: 500,
    easing: 'cubic-bezier(.4,-0.01,.3,.37)',
    origin: "left",
    reset: true,
})

const circularBackgroundOnHover = css`
  &:hover {
    background-color:#e7e7e7;
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

interface SectionProps {
  navHeight: string;
}

interface WithKey {
  key: React.Key | null | undefined;
}

interface Destroyable {
  destroy: () => void;
}

const WaveBackground = () => {
  const [vantaEffect, setVantaEffect] = React.useState<Destroyable | null>(null)
  const myRef = React.useRef(null)
  React.useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(WAVES({
        el: myRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0x60609,
        shininess: 48.00,
        waveHeight: 12.00,
        zoom: 0.88,
      }))
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])
  return <div ref={myRef} className="h-100 w-100 position-absolute" style={{zIndex: -1}} />
}

const StyledHeroSection = styled.section<SectionProps>`
  position: relative;
  min-height: calc(100vh - ${props => props.navHeight});
  padding: clamp(20px, 5vh, 50px) 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
`;

const StyledHeroContent = styled.div`
  ${wideContentSize}
`;

interface HeroProps extends SectionProps {
  id: string,
  title: string,
  content: string,
}

const Hero = ({ id, title, content, ...props }: HeroProps) => {
  return (
    <StyledHeroSection id={id} {...props}>
        <WaveBackground/>
        <StyledHeroContent style={{color: "white"}}>
          <h1>{title}</h1>
          <p style={{maxWidth: "550px", marginTop: "20px"}}>{content}</p>
        </StyledHeroContent>
    </StyledHeroSection>
  )
}

const useScrollReveal = <T extends HTMLElement>(options: scrollReveal.ScrollRevealObjectOptions) => {
  const ref = React.createRef<T>();
  React.useEffect(() => {
    if (ref.current) {
      ScrollReveal().reveal(ref.current, options);
    }
  }, [ref, options])
  return ref;
}

interface ScrollRevealWrapperProps {
  children: React.ReactNode,
  options?: scrollReveal.ScrollRevealObjectOptions,
}

const ScrollRevealWrapper = ({ children, options = {} }: ScrollRevealWrapperProps) => {
  const ref = useScrollReveal<HTMLDivElement>(options);
  return (
    <div ref={ref}>
      {children}
    </div>
  )
}

const StyledAboutSection = styled.section<SectionProps>`
  min-height: calc(100vh - ${props => props.navHeight});
  padding: clamp(20px, 5vh, 50px) 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

const StyledAboutContent = styled.div`
  ${regularContentSize}
`;

interface AboutSectionProps extends SectionProps {
  id: string,
  title: string,
  content: string,
}

const About = ({ id, title, content, ...props }: AboutSectionProps) => {
  return (
      <StyledAboutSection id={id} {...props}>
        <ScrollRevealWrapper>
          <StyledAboutContent>
            <h2>{title}</h2>
            <p>{content}</p>
          </StyledAboutContent>
        </ScrollRevealWrapper>
      </StyledAboutSection>
  )
}

const StyledExperiencesSection = styled.section<SectionProps>`
  min-height: calc(100vh - ${props => props.navHeight});
  padding: clamp(20px, 5vh, 50px) 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StyledExperiencesContent = styled.div`
  position: relative;
  ${regularContentSize}
`;

interface ExperiencesSectionProps extends SectionProps {
  id: string,
  title: string,
}

const StyledExperienceCard = styled.div`
  margin: 20px 0px 20px 150px;
  padding: 20px;
  border-radius: 10px;
  border: 1px solid #eaeaea;
  transition: all 0.2s linear 0s;
  @media (max-width: 1450px) {
    margin: 20px 0px 20px 200px;
  }
  @media (max-width: 1079px) {
    margin: 20px 0px;
  }
  &:hover {
    border-color: #c3c3c3;
    box-shadow: 0 6px 20px #387dff2b;
  }
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

const StyledVerticalTimeline = styled.div`
  height: calc(100% - 20px);
  top: 50px;
  width: 1px;
  background-color: #eaeaea;
  ${timelineHorizontalPosition}
`;

const StyledTimelineNode = styled.div`
  position: absolute;
  top: -30px;
  left: -9px;
`;

const StyledTimelineNodeCircle = styled(StyledTimelineNode)`
  border-radius: 50%;
  background-color: #eaeaea;
  width: 19px;
  height: 19px;
`;

const StyledTimelineNodeCircleWithInteraction = styled(StyledTimelineNodeCircle)`
  transition: all 0.05s linear 0.3s;
  ${StyledExperienceCard}:hover & {
    transform: scale(1.2);
    transition-delay: 0s;
    background-color: #c3c3c3;
  }
`;

const StyledTimelineNodeIcon = styled(StyledTimelineNode)`
  color: #eaeaea;
  width: 25px;
  height: 25px;
`;

const StyledTimelineNodeIconWithInteraction = styled(StyledTimelineNodeIcon)`
  transition: all 0.05s linear 0.3s;
  ${StyledExperienceCard}:hover & {
    transform: scale(1.2);
    transition-delay: 0s;
    color: #c3c3c3;
  }
`;

const StyledTimelineNodeToContentConnector = styled.div<{socket?: boolean}>`
  position: absolute;
  background-color: #c3c3c3;
  top: -22px;
  padding-left: ${props => props.socket ? '20px' : '0px'};
  background-clip: content-box;
  width: 0px;
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
      border: 0px solid #c3c3c3;
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

const School = () => {
  return (
    <ScrollRevealWrapper options={{origin: "bottom"}}>
      <StyledExperienceCard>
        <StyledVerticalTimeline>
          <StyledTimelineDateRange>2015 - 2019</StyledTimelineDateRange>
          <StyledTimelineNodeIconWithInteraction>
            <SchoolIcon style={{width: "100%", height: "100%", position: "absolute", right: "3px", top: "-3px"}}/>
          </StyledTimelineNodeIconWithInteraction>
          <StyledTimelineNodeToContentConnector socket={true}/>
        </StyledVerticalTimeline>
        <h3>Software Engineering</h3>
        <StyledDateRange>2015 - 2019</StyledDateRange>
        <p>At <a href="https://www.usherbrooke.ca/">Université de Sherbrooke</a></p>
        <p>Graduated with a Bachelor's degree in Software Engineering</p>
      </StyledExperienceCard>
    </ScrollRevealWrapper>
  )
}

const Experience = () => {
  return (
    <ScrollRevealWrapper options={{origin: "bottom"}}>
      <StyledExperienceCard>
        <StyledVerticalTimeline>
          <StyledTimelineDateRange>May 2019 - Sep 2021</StyledTimelineDateRange>
          <StyledTimelineNodeCircleWithInteraction/>
          <StyledTimelineNodeToContentConnector/>
        </StyledVerticalTimeline>
        <h3>Software Engineer</h3>
        <StyledDateRange>May 2019 - Sep 2021</StyledDateRange>
        <p>At <a href="https://www.ubisoft.com/en-US/studio/quebec.aspx">Ubisoft Quebec</a> from 2019 to 2021</p>
        <p>Working on <a href="https://www.ubisoft.com/en-US/game/assassins-creed/valhalla">Assassin's Creed Valhalla</a></p>
      </StyledExperienceCard>
    </ScrollRevealWrapper>
  )
}

const Experiences = ({ id, title, ...props }: ExperiencesSectionProps) => {
  return (
      <StyledExperiencesSection id={id} {...props}>
          <div style={{display: "flex", justifyContent: "center"}}>
            <StyledExperiencesContent>
              <h2 style={{textAlign: "center"}}>{title}</h2>
              <Experience/>
              <Experience/>
              <School/>
              <Experience/>
              <TimelineAlignment>
                <ScrollRevealWrapper options={{origin: "top", scale: 0.5, delay: 200, distance: "5px"}}>
                  <TerminalIcon style={{left: "calc(50% - 11px)", position: "absolute", top: "20px", color: '#c3c3c3'}}/>
                </ScrollRevealWrapper>
              </TimelineAlignment>
            </StyledExperiencesContent>
          </div>
      </StyledExperiencesSection>
  )
}

const StyledProjectsSection = styled.section<SectionProps>`
  min-height: calc(100vh - ${props => props.navHeight});
  padding: clamp(20px, 5vh, 50px) 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

const StyledProjectsContent = styled.div`
  ${regularContentSize}
`;

interface ProjectsSectionProps extends SectionProps {
  id: string,
  title: string,
  content: string,
}

const StyledProjectCard = styled.div`
  position: relative;
  margin: 20px 0px;
  padding: 20px;
  border-radius: 10px;
  border: 1px solid #eaeaea;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 20px #387dff2b;
  }
`;

const AnchorOverlay = (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
  return (
    <a {...props}>
      <span style={{width: "100%", height: "100%", zIndex: "1", position: "absolute", top: 0, left: 0}}/>
    </a>
  )
}

const Project = () => {
  return (
    <ScrollRevealWrapper>
      <StyledProjectCard>
        <AnchorOverlay href="https://css-tricks.com/almanac/properties/j/justify-content/"/>
        <div style={{display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "space-around", columnGap: "20px"}}>
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
    </ScrollRevealWrapper>
  )
}

const Projects = ({ id, title, ...props }: ProjectsSectionProps) => {
  return (
    <StyledProjectsSection id={id} {...props}>
      <StyledProjectsContent>
        <ScrollRevealWrapper>
          <h2>{title}</h2>
        </ScrollRevealWrapper>
        {
          Array.from({length: 6}).map((_, i) => (
              <Project key={i}/>
          ))
        }
      </StyledProjectsContent>
    </StyledProjectsSection>
  )
};

const StyledBlogSection = styled.section<SectionProps>`
  min-height: calc(100vh - ${props => props.navHeight});
  padding: clamp(20px, 5vh, 50px) 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

const StyledBlogContent = styled.div`
  ${regularContentSize}
`;

interface BlogSectionProps extends SectionProps {
  id: string,
  title: string,
  content: string,
}

const Blog = ({ id, title, content, ...props }: BlogSectionProps) => {
  return (
      <StyledBlogSection id={id} {...props}>
        <ScrollRevealWrapper>
          <StyledBlogContent>
            <h2>{title}</h2>
            <p>{content}</p>
          </StyledBlogContent>
        </ScrollRevealWrapper>
      </StyledBlogSection>
  )
};

const StyledContactSection = styled.section<SectionProps>`
  min-height: calc(100vh - ${props => props.navHeight});
  padding: clamp(20px, 5vh, 50px) 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

const StyledContactContent = styled.div`
  ${regularContentSize}
`;

interface ContactSectionProps extends SectionProps {
  id: string,
  title: string,
  content: string,
}

const Contact = ({ id, title, content, ...props }: ContactSectionProps) => {
  return (
      <StyledContactSection id={id} {...props}>
        <ScrollRevealWrapper>
          <StyledContactContent>
            <h2>{title}</h2>
            <p>{content}</p>
          </StyledContactContent>
        </ScrollRevealWrapper>
      </StyledContactSection>
  )
};

const Brand = styled(Navbar.Brand)`
  font-family: 'Kumbh Sans';
  width: ${parseInt(navHeight, 10) - 16}px;
  height: ${parseInt(navHeight, 10) - 16}px;
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
  minHeight: string;
}

const NavigationBar = ({ brand, sections, minHeight }: NavigationBarProps) => {
  return (
    <>
      <div style={{ height: minHeight }} />
      <Navbar bg="light" expand="sm" fixed="top" style={{ minHeight: minHeight }}>
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

// TODO: define custom types for react-scroll options (Definitely Typed package uses any)
const useScrollToHashOnMount = (options: any) => {
  React.useEffect(() => {
    const hash = window.location.hash;
    if (hash && document.querySelector(hash)) {
      scroller.scrollTo(hash.split("#")[1], options);
    }
  }, [options]);
};

const StyledMainContainer = styled.main``;

const App: React.FC = () => {

  const scrollOptions = {
    offset: -parseInt(navHeight, 10),
    duration: 300,
    delay: 0.2,
    smooth: true,
    isDynamic: true,
    ignoreCancelEvents: false,
  };

  useScrollToHashOnMount(scrollOptions);

  const hero = {
    id: "hero",
    title: "Hi, I'm Callum",
    content: "I'm a software engineering student, passionate about solving problems, challenging my skills, and pushing my expectations of myself. Currently, I'm continuing my studies at the University of Victoria."
  }

  const about = {
    id: "about",
    title: "About",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel nunc et enim efficitur feugiat a eget dolor. Ut pellentesque, quam id ultrices facilisis, nisi nulla finibus velit, id aliquam ipsum orci non nibh. Sed blandit non libero vitae bibendum. Donec a dolor turpis. Sed suscipit interdum mi, in elementum neque aliquam at. Aenean quis massa a magna egestas pellentesque. Sed tristique semper ante, a gravida ex auctor at."
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

  const blog = {
    id: "blog",
    title: "Blog",
    content: "Phasellus vulputate elit a pretium tempor. Morbi ut purus fringilla, lobortis magna a, pharetra leo. Donec et sapien aliquet, pharetra turpis non, tristique quam. Maecenas congue tellus at ante posuere lacinia. Sed sollicitudin bibendum diam ac rhoncus. Ut eget finibus augue. Sed blandit non libero vitae bibendum. Donec a dolor turpis. Sed suscipit interdum mi, in elementum neque aliquam at. Aenean quis massa a magna egestas pellentesque. Sed tristique semper ante, a gravida ex auctor at."
  }

  const contact = {
    id: "contact",
    title: "Contact",
    content: "Suspendisse rutrum interdum ligula vitae ultrices. Fusce eleifend ut ipsum et pulvinar. Integer bibendum elit euismod nunc venenatis faucibus. Suspendisse nec leo eu tortor semper tincidunt. Integer tincidunt odio sit amet eleifend blandit. Cras vel augue nec lacus ultricies lobortis. Fusce eget quam sagittis, ullamcorper libero id, suscipit sapien. Sed posuere consequat nibh, in fermentum lacus bibendum vitae."
  }

  const brand = {
    children: "C",
    onClick: () => scroller.scrollTo(hero.id, scrollOptions),
  };

  const sections = [
    about,
    experiences,
    projects,
    blog,
    contact,
  ];

  const sectionLinks = sections.map((section) => ({
    key: section.id,
    href: `#${section.id}`,
    children: section.title,
    onClick: () => scroller.scrollTo(section.id, scrollOptions),
  }));

  return (
    <>
      <NavigationBar brand={brand} sections={sectionLinks} minHeight={navHeight}/>
      <StyledMainContainer>
        <Hero {...hero} navHeight={navHeight}/>
        <About {...about} navHeight={navHeight}/>
        <Experiences {...experiences} navHeight={navHeight}/>
        <Projects {...projects} navHeight={navHeight}/>
        <Blog {...blog} navHeight={navHeight}/>
        <Contact {...contact} navHeight={navHeight}/>
      </StyledMainContainer>
    </>
  );
};

export default App;