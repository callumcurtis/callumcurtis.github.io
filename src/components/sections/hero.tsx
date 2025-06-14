import styled from "styled-components";

import {
  backgroundContainer,
  backgroundFillContainer,
} from "src/styles/mixins/background";
import { withFogAnimationBackground } from "src/components/background";
import {
  wideContentSize,
  sectionSize,
  sectionLayout,
  sectionLayer,
} from "src/styles/mixins/section";
import { useConfig, usePropsWithConfig } from "src/context/config";
import { useContent } from "src/context/content";

const StyledHeroSection = styled.section.attrs(usePropsWithConfig)`
  text-align: left;
  color: ${(props) => props.config.colors.hero.foreground};
  ${sectionSize}
  ${sectionLayout}
  ${backgroundContainer}
  ${sectionLayer}
`;

const StyledHeroBackground = withFogAnimationBackground(styled.div.attrs(
  usePropsWithConfig
)`
  z-index: ${(props) => props.config.layers.hero.background};
  ${backgroundFillContainer}
`);

const StyledHeroContent = styled.div.attrs(usePropsWithConfig)`
  z-index: ${(props) => props.config.layers.hero.foreground};
  mix-blend-mode: overlay;
  ${wideContentSize}
`;

const StyledHeroHeading = styled.h1.attrs(usePropsWithConfig)`
  font-weight: ${(props) => props.config.text.weight.semibold};
`;

const StyledHeroBrief = styled.p.attrs(usePropsWithConfig)`
  max-width: 750px;
  margin-top: 25px;
`;

const Hero = () => {
  const config = useConfig();
  const content = useContent();
  const fogOptions = {
    ...config.vanta.defaults,
    minHeight: 200.0,
    minWidth: 200.0,
    highlightColor: config.colors.hero.fog.highlight,
    midtoneColor: config.colors.hero.fog.midtone,
    lowlightColor: config.colors.hero.fog.lowlight,
    baseColor: config.colors.hero.fog.base,
    blurFactor: 0.65,
    speed: 2.1,
    zoom: 0.6,
  };
  return (
    <StyledHeroSection id={config.ids.hero}>
      <StyledHeroBackground fogOptions={fogOptions} />
      <StyledHeroContent>
        <StyledHeroHeading>{content.hero.heading}</StyledHeroHeading>
        <StyledHeroBrief>{content.hero.brief}</StyledHeroBrief>
      </StyledHeroContent>
    </StyledHeroSection>
  );
};

export default Hero;
