import styled, { css } from 'styled-components';
import { Terminal as TerminalIcon, SchoolOutlined as SchoolIcon } from "@mui/icons-material";

import Reveal from 'src/components/reveal';
import { useContent } from 'src/content';
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

const WorkExperience = () => {
  return (
    <Reveal origin="bottom">
      <TimelineAndContentSegment
        content={
          <StyledExperienceCard emphasize>
            <h3>Software Engineering</h3>
            <StyledExperienceCardDateRange>May 2019 - Sep 2021</StyledExperienceCardDateRange>
            <p>At Ubisoft Quebec from 2019 to 2021</p>
            <p>Working on Assassin's Creed Valhalla</p>
          </StyledExperienceCard>
        }
        annotation={"May 2019 - Sep 2021"}
      />
    </Reveal>
  )
}

const NonWorkExperience = ({ icon }: { icon?: React.ReactNode }) => {
  return (
    <Reveal origin="bottom">
      <TimelineAndContentSegment
        content={
          <StyledExperienceCard>
            <p>Continuing: Software Engineering at the University of Victoria</p>
          </StyledExperienceCard>
        }
        annotation={"May 2019 - Sep 2021"}
        icon={icon}
        hiddenWhenNarrow
      />
    </Reveal>
  );
}

const School = () => {
  return (
    <NonWorkExperience
      icon={<SchoolIcon />}
    />
  );
}

const Experience = () => {
  const content = useContent();
  const config = useConfig();
  return (
    <StyledExperienceSection id={config.ids.experience}>
      <StyledExperienceContent>
        <StyledExperienceHeading>{content.experience.heading}</StyledExperienceHeading>
        <School />
        <WorkExperience />
        <School />
        <WorkExperience />
        <School />
        <Reveal origin="top" distance="5px">
          <TimelineStart icon={<TerminalIcon />} />
        </Reveal>
      </StyledExperienceContent>
    </StyledExperienceSection>
  )
}

export default Experience;