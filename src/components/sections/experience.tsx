import styled, { css } from 'styled-components';
import { Terminal as TerminalIcon } from "@mui/icons-material";

import Reveal from 'src/components/reveal';
import { useContent, PositionContent, AsideContent } from 'src/content';
import { useConfig, usePropsWithConfig } from 'src/config';
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
  .attrs(props => ({ ...props, movement: false}))
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

const Position = (position: PositionContent) => {
  return (
    <Reveal origin="bottom">
      <TimelineAndContentSegment
        content={
          <StyledExperienceCard emphasize>
            <h3>{position.position}, {position.organization}</h3>
            <StyledExperienceCardDateRange>{position.duration}</StyledExperienceCardDateRange>
            {position.brief && <p>{position.brief}</p>}
            {position.achievements && <ul>{position.achievements.map(achievement => <li>{achievement}</li>)}</ul>}
          </StyledExperienceCard>
        }
        annotation={position.duration}
        icon={position.icon}
      />
    </Reveal>
  )
}

const Aside = (aside: AsideContent) => {
  return (
    <Reveal origin="bottom">
      <TimelineAndContentSegment
        content={
          <StyledExperienceCard>
            <p>{aside.brief}</p>
          </StyledExperienceCard>
        }
        annotation={aside.duration}
        icon={aside.icon}
        hiddenWhenNarrow
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
        {content.experience.history.map(content => "position" in content ? Position(content) : Aside(content))}
        <Reveal origin="top" distance="5px">
          <TimelineStart icon={<TerminalIcon />} />
        </Reveal>
      </StyledExperienceContent>
    </StyledExperienceSection>
  )
}

export default Experience;