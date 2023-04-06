import styled from 'styled-components';

import { backgroundContainer, backgroundFillContainer } from 'src/styles/background';
import { withWaveAnimationBackground } from 'src/components/background';
import { wideContentSize, sectionSize, sectionLayout } from 'src/styles/section';
import { useConfig, usePropsWithConfig } from 'src/config';
import { useContent } from 'src/content';


const StyledHeroSection = styled.section.attrs(usePropsWithConfig)`
  text-align: left;
  color: ${props => props.config.colors.foreground.emphasizedOnEmphasized};
  ${sectionSize}
  ${sectionLayout}
  ${backgroundContainer}
`;

const StyledHeroBackground = withWaveAnimationBackground(styled.div.attrs(usePropsWithConfig)`
  ${backgroundFillContainer}
`);

const StyledHeroContent = styled.div`
  ${wideContentSize}
`;

const StyledHeroHeading = styled.h1.attrs(usePropsWithConfig)`
  font-weight: ${props => props.config.text.weight.semibold};
`;

const StyledHeroBrief = styled.p.attrs(usePropsWithConfig)`
  color: ${props => props.config.colors.foreground.mutedOnEmphasized};
  max-width: 750px;
  margin-top: 25px;
`;

const Hero = () => {
  const config = useConfig();
  const content = useContent();
  const waveOptions = {
    ...config.vanta.defaults,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    color: config.colors.neutral.emphasized,
    shininess: 48.00,
    waveHeight: 12.00,
    zoom: 0.88,
  }
  return (
    <StyledHeroSection id={config.ids.hero}>
        <StyledHeroBackground waveOptions={waveOptions}/>
        <StyledHeroContent>
          <StyledHeroHeading>{content.hero.heading}</StyledHeroHeading>
          <StyledHeroBrief>{content.hero.brief}</StyledHeroBrief>
        </StyledHeroContent>
    </StyledHeroSection>
  )
}

export default Hero;