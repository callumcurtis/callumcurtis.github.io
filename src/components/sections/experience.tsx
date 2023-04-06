import styled from 'styled-components';
import {
  Terminal as TerminalIcon,
  SchoolOutlined as SchoolIcon,
} from "@mui/icons-material";


import Reveal from 'src/components/reveal';
import { useContent } from 'src/content';
import { useConfig, usePropsWithConfig } from 'src/config';
import { sectionSize, sectionLayout, regularContentSize } from 'src/styles/section';
import { cardBorder, cardHover, cardSize } from 'src/styles/card';
import {
  timelineContainerClassName,
  timelineContainer,
  timelineStem,
  timelineNodeHover,
  timelineNodeCircle,
  timelineNodeIcon,
  timelineNodeToContentAnimatedConnector,
  timelineNodeAnnotation,
  timelineStemHorizontalPosition,
  displayOnTimelineCollapse,
} from 'src/styles/timeline';


const StyledExperienceSection = styled.section.attrs(usePropsWithConfig)`
  ${sectionSize}
  ${sectionLayout}
`;

const StyledExperienceContent = styled.div`
  position: relative;
  ${regularContentSize}
`;

const StyledExperienceCard = styled.div
  .attrs(usePropsWithConfig)
  .attrs(props => ({ ...props, movement: false, className: timelineContainerClassName}))
  <{ emphasize?: boolean }>`
  ${props => props.emphasize && cardBorder}
  ${props => props.emphasize && cardHover}
  ${timelineContainer}
  ${cardSize}
`;

const StyledTimelineStem = styled.div.attrs(usePropsWithConfig)`
  background-color: ${props => props.config.colors.neutral.muted};
  ${timelineStem}
`;

const StyledTimelineNodeCircle = styled.div.attrs(usePropsWithConfig)<{hoverable?: boolean}>`
  ${timelineNodeCircle}
  ${props => props.hoverable && timelineNodeHover}
`;

const StyledTimelineNodeIcon = styled.div.attrs(usePropsWithConfig)<{hoverable?: boolean}>`
  ${timelineNodeIcon}
  ${props => props.hoverable && timelineNodeHover}
`;

const StyledTimelineNodeToContentAnimatedConnector = styled.div.attrs(usePropsWithConfig)<{socketToNode?: boolean}>`
  ${timelineNodeToContentAnimatedConnector}
`;

const StyledTimelineDateRange = styled.div`
  ${timelineNodeAnnotation}
`;

const TimelineAlignment = styled.div`
  padding: inherit;
  position: absolute;
  ${timelineStemHorizontalPosition}
`;

const StyledDateRange = styled.div.attrs(props => ({...props, display: "block"}))`
  ${displayOnTimelineCollapse}
`;

const WorkExperience = () => {
  return (
    <Reveal origin="bottom">
      <StyledExperienceCard emphasize>
        <StyledTimelineStem>
          <StyledTimelineDateRange>May 2019 - Sep 2021</StyledTimelineDateRange>
          <StyledTimelineNodeCircle hoverable/>
          <StyledTimelineNodeToContentAnimatedConnector/>
        </StyledTimelineStem>
        <h3>Software Engineering</h3>
        <StyledDateRange>May 2019 - Sep 2021</StyledDateRange>
        <p>At Ubisoft Quebec from 2019 to 2021</p>
        <p>Working on Assassin's Creed Valhalla</p>
      </StyledExperienceCard>
    </Reveal>
  )
}

const NonWorkExperience = ({ timelineNode, socketToNode }: { timelineNode: React.ReactNode, socketToNode?: boolean }) => {
  return (
    <Reveal origin="bottom">
      <StyledExperienceCard>
        <StyledTimelineStem>
          <StyledTimelineDateRange>May 2019 - Sep 2021</StyledTimelineDateRange>
          {timelineNode}
          <StyledTimelineNodeToContentAnimatedConnector socketToNode={socketToNode} />
        </StyledTimelineStem>
        <p style={{ fontSize: "14px" }}>Continuing: Software Engineering at the University of Victoria</p>
      </StyledExperienceCard>
    </Reveal>
  );
}

const School = () => {
  return (
    <NonWorkExperience
      socketToNode
      timelineNode={
        <StyledTimelineNodeIcon hoverable>
          <SchoolIcon style={{ width: "100%", height: "100%", position: "absolute", right: "3px", top: "-3px" }} />
        </StyledTimelineNodeIcon>
      }
    />
  );
}

const Experience = () => {
  const content = useContent();
  const config = useConfig();
  return (
      <StyledExperienceSection id={config.ids.experience}>
          <div style={{display: "flex", justifyContent: "center"}}>
            <StyledExperienceContent>
              <h2 style={{textAlign: "center"}}>{content.experience.heading}</h2>
              <School/>
              <WorkExperience/>
              <School/>
              <WorkExperience/>
              <School/>
              <TimelineAlignment>
                <Reveal origin="top" scale={0.5} delay={200} distance="5px">
                  <TerminalIcon style={{left: "calc(50% - 11px)", position: "absolute", top: "20px", color: config.colors.neutral.default}}/>
                </Reveal>
              </TimelineAlignment>
            </StyledExperienceContent>
          </div>
      </StyledExperienceSection>
  )
}

export default Experience;