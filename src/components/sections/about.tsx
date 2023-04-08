import styled from 'styled-components';

import Reveal from 'src/components/reveal';
import { useContent } from 'src/utils/content';
import { useConfig, usePropsWithConfig } from 'src/utils/config';
import { sectionSize, sectionLayout, regularContentSize } from 'src/styles/section';


const StyledAboutSection = styled.section.attrs(usePropsWithConfig)`
  text-align: center;
  ${sectionSize}
  ${sectionLayout}
`;

const StyledAboutContent = styled.div`
  ${regularContentSize}
`;

const StyledAboutHeading = styled.h2``;

const StyledAboutDescription = styled.p``;

const About = () => {
  const config = useConfig();
  const content = useContent();
  return (
      <StyledAboutSection id={config.ids.about}>
        <Reveal>
          <StyledAboutContent>
            <StyledAboutHeading>{content.about.heading}</StyledAboutHeading>
            <StyledAboutDescription>{content.about.description}</StyledAboutDescription>
          </StyledAboutContent>
        </Reveal>
      </StyledAboutSection>
  )
}

export default About;