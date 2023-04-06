import styled from 'styled-components';

import { backgroundContainer, backgroundFillContainer } from 'src/styles/background';
import { withWaveAnimationBackground } from 'src/components/background';
import { wideContentSize, sectionSize, sectionLayout } from 'src/styles/section';
import { useConfig, usePropsWithConfig } from 'src/config';
import { useContent } from 'src/content';


const StyledHeroSection = styled.section.attrs(usePropsWithConfig)`
  text-align: left;
  color: white;
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

const StyledHeroHeading = styled.h1`
  font-weight: 600;
`;

const StyledHeroBrief = styled.p`
  max-width: 550px;
  margin-top: 20px;
`;

const Hero = () => {
  const config = useConfig();
  const content = useContent();
  return (
    <StyledHeroSection id={config.ids.hero}>
        <StyledHeroBackground/>
        <StyledHeroContent>
          <StyledHeroHeading>{content.hero.heading}</StyledHeroHeading>
          <StyledHeroBrief>{content.hero.brief}</StyledHeroBrief>
        </StyledHeroContent>
    </StyledHeroSection>
  )
}

export default Hero;
