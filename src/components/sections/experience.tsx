import styled, { css } from 'styled-components';
import { Terminal as TerminalIcon } from "@mui/icons-material";

import Reveal from 'src/components/reveal';
import { useContent, PositionContent, AsideContent } from 'src/utils/content';
import { useConfig, usePropsWithConfig } from 'src/utils/config';
import { sectionSize, sectionLayout, regularContentSize } from 'src/styles/section';
import { cardBorder, cardHover, cardSize, cardPadding } from 'src/styles/card';
import { TimelineAndContentSegment, TimelineStart, withStylesOnTimelineCollapseAndExpand } from 'src/components/timeline';


const StyledExperienceSection = styled.section.attrs(usePropsWithConfig)`
  ${sectionSize}
  ${sectionLayout}
`;

const StyledExperienceContent = styled.div`
  ${regularContentSize}
`;

const StyledExperienceHeading = styled.h2`
  text-align: center;
`;

const StyledExperienceCard = styled.div
  .attrs(usePropsWithConfig)
  .attrs(props => ({...props, hoverTarget: TimelineAndContentSegment}))
  .attrs(props => ({...props, movement: false}))
  <{ emphasize?: boolean }>`
  ${props => props.emphasize && cardBorder}
  ${props => props.emphasize && cardHover}
  ${cardSize}
  ${cardPadding}
  ${props => !props.emphasize && css`font-size: ${props.config.text.body.size.small};`}
`;

const StyledExperienceCardDateRange = withStylesOnTimelineCollapseAndExpand({
  cssOnCollapse: 'display: block;',
  cssOnExpand: 'display: none;',
})(styled.p``);

const StyledPositionAndOrganizationHeading = styled.h3``;

const StyledExperienceBrief = styled.p``;

const StyledAchievementsContainer = styled.ul``;

const StyledAchievement = styled.li``;

const Position = ({position}: {position: PositionContent}) => {
  return (
    <Reveal origin="bottom">
      <TimelineAndContentSegment
        content={
          <StyledExperienceCard emphasize>
            <StyledPositionAndOrganizationHeading>{position.position}, {position.organization}</StyledPositionAndOrganizationHeading>
            <StyledExperienceCardDateRange>{position.duration}</StyledExperienceCardDateRange>
            {position.brief && <StyledExperienceBrief>{position.brief}</StyledExperienceBrief>}
            {position.achievements && <StyledAchievementsContainer>{position.achievements.map((achievement, index) => <StyledAchievement key={index}>{achievement}</StyledAchievement>)}</StyledAchievementsContainer>}
          </StyledExperienceCard>
        }
        annotation={position.duration}
        icon={position.icon}
      />
    </Reveal>
  )
}

const Aside = ({aside}: {aside: AsideContent}) => {
  return (
    <Reveal origin="bottom">
      <TimelineAndContentSegment
        content={
          <StyledExperienceCard>
            <StyledExperienceBrief>{aside.brief}</StyledExperienceBrief>
          </StyledExperienceCard>
        }
        annotation={aside.duration}
        icon={aside.icon}
        collapsedWhenNarrow
      />
    </Reveal>
  )
}

const Experience = () => {
  const content = useContent();
  const config = useConfig();
  return (
    <StyledExperienceSection id={config.ids.experience}>
      <StyledExperienceContent>
        <StyledExperienceHeading>{content.experience.heading}</StyledExperienceHeading>
        {content.experience.history.map((content, index) => "position" in content ? <Position position={content} key={index} /> : <Aside aside={content} key={index} />)}
        <Reveal origin="top" distance="5px">
          <TimelineStart icon={<TerminalIcon />} />
        </Reveal>
      </StyledExperienceContent>
    </StyledExperienceSection>
  )
}

export default Experience;