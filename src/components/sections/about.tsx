import styled from "styled-components";

import { useContent } from "src/context/content";
import { useConfig, usePropsWithConfig } from "src/context/config";
import {
  sectionSize,
  sectionLayout,
  sectionLayer,
  wideContentSize,
} from "src/styles/mixins/section";
import { cardHover, cardBorder } from "src/styles/mixins/card";

const StyledAboutSection = styled.section.attrs(usePropsWithConfig)`
  margin-top: -40px;
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
  @media (max-width: 1024px) {
    margin-top: -20px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
  }
  background-image: ${(props) => props.config.colors.about.background};
  padding-top: 100px;
  padding-bottom: 200px;
  ${sectionLayout}
  ${sectionLayer}
`;

const StyledAboutContent = styled.div.attrs(usePropsWithConfig)`
  ${sectionSize}
  ${wideContentSize}
  white-space: pre-wrap;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap-reverse;
  row-gap: 20px;
  column-gap: 50px;
  justify-content: center;
  align-content: center;
  align-items: center;
`;

const StyledAboutHeading = styled.h2`
  text-align: center;
`;

const StyledAboutText = styled.div`
  flex-grow: 1;
  flex-basis: 400px;
`;

const StyledAboutDescription = styled.p.attrs(usePropsWithConfig)`
  text-align: left;
  font-size: ${(props) => props.config.text.body.size.medium};
`;

const StyledAboutImageContainer = styled.div`
  flex-grow: 1;
  flex-basis: 300px;
  height: 100%;
`;

const StyledAboutImage = styled.img
  .attrs(usePropsWithConfig)
  .attrs((props) => ({ ...props, movement: true }))`
  width: 100%;
  height: auto;
  ${cardBorder}
  ${cardHover}
`;

const About = () => {
  const config = useConfig();
  const content = useContent();
  return (
    <StyledAboutSection>
      <StyledAboutContent id={config.ids.about}>
        <StyledAboutImageContainer>
          <StyledAboutImage src="./images/me-1024x1024.png" />
        </StyledAboutImageContainer>
        <StyledAboutText>
          <StyledAboutHeading>{content.about.heading}</StyledAboutHeading>
          <StyledAboutDescription>
            {content.about.description}
          </StyledAboutDescription>
        </StyledAboutText>
      </StyledAboutContent>
    </StyledAboutSection>
  );
};

export default About;
