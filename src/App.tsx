import React from "react";
import { scroller } from "react-scroll";
import styled, { css } from "styled-components";
import "./App.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import WAVES from 'vanta/dist/vanta.waves.min';
import ScrollReveal from 'scrollreveal'

const navHeight = "56px";

ScrollReveal({
    viewOffset: { top: parseInt(navHeight), bottom: window.innerHeight * 0.5 },
    distance: '30px',
    duration: 500,
    easing: 'cubic-bezier(.4,-0.01,.3,.37)',
    origin: "left",
})

const wideContentSize = css`
  padding: 0px 200px;
  width: 100%;
  max-width: 1800px;
  margin: 0 auto;
  @media (max-width: 1080px) {
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
  padding: 0px 200px;
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  @media (max-width: 1080px) {
    padding: 0px 100px;
  }
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
  height: calc(100vh - ${props => props.navHeight});
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

const useScrollReveal = (ref: React.RefObject<HTMLElement>) => {
  React.useEffect(() => {
    if (ref.current) {
      ScrollReveal().reveal(ref.current);
    }
  }, [ref])
}

const StyledAboutSection = styled.section<SectionProps>`
  height: calc(100vh - ${props => props.navHeight});
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  font-size: 20px;
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
  const ref = React.createRef<HTMLElement>();
  useScrollReveal(ref);
  return (
    <StyledAboutSection id={id} {...props} ref={ref}>
      <StyledAboutContent>
        <h2>{title}</h2>
        <p>{content}</p>
      </StyledAboutContent>
    </StyledAboutSection>
  )
}

const StyledProjectsSection = styled.section<SectionProps>`
  height: calc(100vh - ${props => props.navHeight});
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  font-size: 20px;
`;

const StyledProjectsContent = styled.div`
  ${regularContentSize}
`;

interface ProjectsSectionProps extends SectionProps {
  id: string,
  title: string,
  content: string,
}

const Projects = ({ id, title, content, ...props }: ProjectsSectionProps) => {
  const ref = React.createRef<HTMLElement>();
  useScrollReveal(ref);
  return (
    <StyledProjectsSection id={id} {...props} ref={ref}>
      <StyledProjectsContent>
        <h2>{title}</h2>
        <p>{content}</p>
      </StyledProjectsContent>
    </StyledProjectsSection>
  )
};

const StyledBlogSection = styled.section<SectionProps>`
  height: calc(100vh - ${props => props.navHeight});
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  font-size: 20px;
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
  const ref = React.createRef<HTMLElement>();
  useScrollReveal(ref);
  return (
    <StyledBlogSection id={id} {...props} ref={ref}>
      <StyledBlogContent>
        <h2>{title}</h2>
        <p>{content}</p>
      </StyledBlogContent>
    </StyledBlogSection>
  )
};

const StyledContactSection = styled.section<SectionProps>`
  height: calc(100vh - ${props => props.navHeight});
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  font-size: 20px;
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
  const ref = React.createRef<HTMLElement>();
  useScrollReveal(ref);
  return (
    <StyledContactSection id={id} {...props} ref={ref}>
      <StyledContactContent>
        <h2>{title}</h2>
        <p>{content}</p>
      </StyledContactContent>
    </StyledContactSection>
  )
};

const Brand = styled(Navbar.Brand)`
  font-family: 'Kumbh Sans';
  width: ${parseInt(navHeight, 10) - 16}px;
  height: ${parseInt(navHeight, 10) - 16}px;
  text-align: center;
  &:hover {
    background-color:#e7e7e7;
    border-radius: 100%;
    cursor: pointer;
  }
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
                <Nav.Link {...(section.href && { href: section.href })} key={section.key} onClick={section.onClick}>{section.children}</Nav.Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

const scrollOptions = {
  offset: -parseInt(navHeight, 10),
  duration: 300,
  delay: 0.2,
  smooth: true,
  isDynamic: true,
  ignoreCancelEvents: false,
};

const useScrollToHashOnMount = () => {
  React.useEffect(() => {
    const hash = window.location.hash;
    if (hash && document.querySelector(hash)) {
      scroller.scrollTo(hash.split("#")[1], scrollOptions);
    }
  }, []);
};

const StyledMainContainer = styled.main``;

const App: React.FC = () => {

  useScrollToHashOnMount();

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
        <Projects {...projects} navHeight={navHeight}/>
        <Blog {...blog} navHeight={navHeight}/>
        <Contact {...contact} navHeight={navHeight}/>
      </StyledMainContainer>
    </>
  );
};

export default App;