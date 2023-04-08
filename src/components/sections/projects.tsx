import styled from 'styled-components';

import Reveal from 'src/components/reveal';
import { AnchorOverlay } from 'src/components/link';
import { cardHover, cardSize, cardPadding, cardBorder } from 'src/styles/card';
import { regularContentSize } from 'src/styles/section';
import { sectionSize, sectionLayout } from 'src/styles/section';
import { usePropsWithConfig, useConfig } from 'src/utils/config';
import { useContent, ProjectContent } from 'src/utils/content';


const StyledProjectsSection = styled.section.attrs(usePropsWithConfig)`
  ${sectionSize}
  ${sectionLayout}
`;

const StyledProjectsContent = styled.div`
  ${regularContentSize}
`;

const StyledProjectsHeading = styled.h2`
  text-align: center;
`;

const StyledProjectCard = styled.div
  .attrs(usePropsWithConfig)
  .attrs(props => ({...props, movement: true}))`
  position: relative;
  margin: 20px 0px;
  ${cardSize}
  ${cardPadding}
  ${cardBorder}
  ${cardHover}
`;

const StyledProjectCardContent = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap-reverse;
  column-gap: 20px;
`;

const StyledProjectCardTextContainer = styled.div`
  flex-grow: 10;
  flex-basis: 400px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const StyledProjectCardImageContainer = styled.div`
  flex-grow: 1;
  flex-basis: 400px;
  align-self: center;
  img {
    width: 100%;
    height: auto;
  }
`;

const ProjectHeading = styled.h3`
  margin-bottom: 20px;
`;

const StyledProjectDescription = styled.p`
  margin-bottom: 20px;
`;

const StyledTagsContainer = styled.ul.attrs(usePropsWithConfig)`
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: ${props => props.config.text.body.size.small};
  color: ${props => props.config.colors.foreground.muted};
`;

const StyledTag = styled.li`
  display: inline-block;
  margin-right: 20px;
`;

const Project = ({project}: {project: ProjectContent}) => {
  return (
    <Reveal>
      <StyledProjectCard>
        <AnchorOverlay href={project.link}/>
        <StyledProjectCardContent>
          <StyledProjectCardTextContainer>
            <ProjectHeading>{project.name}</ProjectHeading>
            <StyledProjectDescription>{project.description}</StyledProjectDescription>
            <StyledTagsContainer>{project.tags.map((tag, index) => <StyledTag key={index}>{tag}</StyledTag>)}</StyledTagsContainer>
          </StyledProjectCardTextContainer>
          <StyledProjectCardImageContainer>
            {project.image}
          </StyledProjectCardImageContainer>
        </StyledProjectCardContent>
      </StyledProjectCard>
    </Reveal>
  )
}

const Projects = () => {
  const content = useContent();
  const config = useConfig();
  return (
    <StyledProjectsSection id={config.ids.projects}>
      <StyledProjectsContent>
        <Reveal>
          <StyledProjectsHeading>{content.projects.heading}</StyledProjectsHeading>
        </Reveal>
        {content.projects.list.map((project, index) => <Project project={project} key={index}/>)}
      </StyledProjectsContent>
    </StyledProjectsSection>
  )
};

export default Projects;