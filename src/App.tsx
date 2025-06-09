import styled from "styled-components";

import defaultConfig, {
  ConfigProvider,
  usePropsWithConfig,
} from "src/context/config";
import defaultContent, { ContentProvider } from "src/context/content";
import { useOpenExternalLinksInNewPageWithProtection } from "src/hooks/link";
import { useAutoScrollToHashOnMount } from "src/hooks/scroll";
import Hero from "src/components/sections/hero";
import About from "src/components/sections/about";
import Experience from "src/components/sections/experience";
import Testimonials from "src/components/sections/testimonials";
import Projects from "src/components/sections/projects";
import NavigationBar from "src/components/navigation";
import SideSocials from "src/components/side-socials";
import Footer from "src/components/footer";

import "src/App.css";

const StyledMainContainer = styled.main.attrs(usePropsWithConfig)`
  background-color: ${(props) => props.config.colors.background.muted};
`;

const App = () => {
  useAutoScrollToHashOnMount();
  useOpenExternalLinksInNewPageWithProtection();

  return (
    <ConfigProvider config={defaultConfig}>
      <ContentProvider content={defaultContent}>
        <NavigationBar />
        <Hero />
        <StyledMainContainer>
          <About />
          <Experience />
          <Testimonials />
          <Projects />
        </StyledMainContainer>
        <SideSocials />
        <Footer />
      </ContentProvider>
    </ConfigProvider>
  );
};

export default App;
