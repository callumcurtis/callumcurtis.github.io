import styled from "styled-components";

import {
  backgroundContainer,
  backgroundFillContainer,
} from "src/styles/mixins/background";
import { withWaveAnimationBackground } from "src/components/background";
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
  color: ${(props) => props.config.colors.foreground.emphasizedOnEmphasized};
  ${sectionSize}
  ${sectionLayout}
  ${backgroundContainer}
  ${sectionLayer}
`;

const StyledHeroBackground = withWaveAnimationBackground(styled.div.attrs(
  usePropsWithConfig
)`
  z-index: ${(props) => props.config.layers.hero.background};
  ${backgroundFillContainer}
`);

const StyledHeroContent = styled.div.attrs(usePropsWithConfig)`
  z-index: ${(props) => props.config.layers.hero.foreground};
  ${wideContentSize}
`;

const StyledHeroHeading = styled.h1.attrs(usePropsWithConfig)`
  font-weight: ${(props) => props.config.text.weight.semibold};
`;

const StyledHeroBrief = styled.p.attrs(usePropsWithConfig)`
  color: ${(props) => props.config.colors.foreground.mutedOnEmphasized};
  max-width: 750px;
  margin-top: 25px;
`;

const Hero = () => {
  const config = useConfig();
  const content = useContent();
  const waveOptions = {
    ...config.vanta.defaults,
    minHeight: 200.0,
    minWidth: 200.0,
    scale: 1.0,
    scaleMobile: 1.0,
    color: config.colors.neutral.emphasized,
    shininess: 48.0,
    waveHeight: 12.0,
    zoom: 0.88,
  };
  return (
    <StyledHeroSection id={config.ids.hero}>
      <StyledHeroBackground waveOptions={waveOptions} />
      <StyledHeroContent>
        <StyledHeroHeading>{content.hero.heading}</StyledHeroHeading>
        <StyledHeroBrief>{content.hero.brief}</StyledHeroBrief>
      </StyledHeroContent>
    </StyledHeroSection>
  );
};

export default Hero;
