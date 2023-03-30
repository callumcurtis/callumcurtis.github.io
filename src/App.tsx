import React from "react";
import { Element, animateScroll as scroll, scroller } from "react-scroll";
import styled from "styled-components";
import "./App.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import WAVES from 'vanta/dist/vanta.waves.min';

const navHeight = "56px";

const sections = [

  {
    id: "about",
    title: "About",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel nunc et enim efficitur feugiat a eget dolor. Ut pellentesque, quam id ultrices facilisis, nisi nulla finibus velit, id aliquam ipsum orci non nibh. Sed blandit non libero vitae bibendum. Donec a dolor turpis. Sed suscipit interdum mi, in elementum neque aliquam at. Aenean quis massa a magna egestas pellentesque. Sed tristique semper ante, a gravida ex auctor at."
  },
  {
    id: "projects",
    title: "Projects",
    content:
      "Donec lobortis interdum faucibus. Etiam bibendum, nulla id eleifend congue, nisi nulla iaculis elit, sed eleifend elit elit vel elit. Fusce non dapibus velit. Nullam vel eros et augue commodo auctor vitae sed turpis. Duis euismod aliquet felis, at malesuada sapien vestibulum ac. Fusce sit amet lacinia dolor, vel bibendum nisl."
  },
  {
    id: "blog",
    title: "Blog",
    content:
      "Phasellus vulputate elit a pretium tempor. Morbi ut purus fringilla, lobortis magna a, pharetra leo. Donec et sapien aliquet, pharetra turpis non, tristique quam. Maecenas congue tellus at ante posuere lacinia. Sed sollicitudin bibendum diam ac rhoncus. Ut eget finibus augue. Sed blandit, libero vitae vestibulum ornare, felis augue consequat ipsum, vel feugiat lacus justo vel sapien. In gravida volutpat bibendum. Suspendisse id velit in nisl consectetur congue. Praesent ultrices orci eget arcu luctus, vel interdum lectus pretium."
  },
  {
    id: "contact",
    title: "Contact Me",
    content:
      "Suspendisse rutrum interdum ligula vitae ultrices. Fusce eleifend ut ipsum et pulvinar. Integer bibendum elit euismod nunc venenatis faucibus. Suspendisse nec leo eu tortor semper tincidunt. Integer tincidunt odio sit amet eleifend blandit. Cras vel augue nec lacus ultricies lobortis. Fusce eget quam sagittis, ullamcorper libero id, suscipit sapien. Sed posuere consequat nibh, in fermentum lacus bibendum vitae."
  }
];

interface SectionProps {
  navHeight: string;
}

const Section = styled(Element)<SectionProps>`
  position: relative;
  height: calc(100vh - ${props => props.navHeight});
  display: flex;
`;

const CenterDownSection = styled(Section)`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const LeftDownSection = styled(Section)`
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  text-align: left;
`;

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
  id: string;
}

interface NavigationBarProps {
  brand: NavigationBarElement;
  items: NavigationBarElement[];
  minHeight: string;
}

const NavigationBar = ({ brand, items, minHeight }: NavigationBarProps) => {
  return (
    <>
      <div style={{ height: minHeight }} />
      <Navbar bg="light" expand="sm" fixed="top" style={{ minHeight: minHeight }}>
        <Container fluid style={{paddingLeft: "30px", paddingRight: "30px"}}>
          <Brand className="Brand" onClick={brand.onClick}>{brand.children}</Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="justify-content-end" style={{ width: "100%" }}>
              {items.map((item) => (
                <Nav.Link key={item.id} onClick={item.onClick}>{item.children}</Nav.Link>
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

const App: React.FC = () => {

  const brand = {
    id: "C",
    children: "C",
    onClick: () => scroll.scrollToTop(scrollOptions),
  };

  const items = sections.map((section) => ({
    id: section.id,
    children: section.title,
    onClick: () => scroller.scrollTo(section.id, scrollOptions),
  }));

  return (
    <div className="App">
      <NavigationBar brand={brand} items={items} minHeight={navHeight}/>
      <LeftDownSection name={"hero"} key={"hero"} id={"hero"} navHeight={navHeight}>
        <WaveBackground/>
        <div style={{padding: "45px 30px", color: "white"}}>
          <h1>Callum Curtis</h1>
          <p style={{maxWidth: "550px", marginTop: "20px"}}>
            I'm a software engineering student, passionate about solving problems,
            challenging my skills, and pushing my expectations of myself. Currently, I'm
            continuing my studies at the University of Victoria.
          </p>
        </div>
      </LeftDownSection>
      {sections.map((section) => (
        <CenterDownSection name={section.id} key={section.id} navHeight={navHeight}>
          <div className="Section__content">
            <h2>{section.title}</h2>
            <p>{section.content}</p>
          </div>
        </CenterDownSection>
      ))}
    </div>
  );
};

export default App;