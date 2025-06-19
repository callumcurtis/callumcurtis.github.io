import styled from "styled-components";

import Reveal from "src/components/reveal";
import { useContent } from "src/context/content";
import { useConfig, usePropsWithConfig } from "src/context/config";
import {
  sectionSize,
  sectionLayout,
  sectionLayer,
  regularContentSize,
} from "src/styles/mixins/section";

const StyledAboutSection = styled.section.attrs(usePropsWithConfig)`
  text-align: center;
  margin-top: -40px;
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
  @media (max-width: 1024px) {
    margin-top: -20px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
  }
  background-image: ${(props) => props.config.colors.about.background};
  ${sectionSize}
  ${sectionLayout}
  ${sectionLayer}
`;

const StyledAboutContent = styled.div`
  ${regularContentSize}
  white-space: pre-wrap;
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
          <StyledAboutDescription>
            {content.about.description}
          </StyledAboutDescription>
        </StyledAboutContent>
      </Reveal>
    </StyledAboutSection>
  );
};

export default About;
