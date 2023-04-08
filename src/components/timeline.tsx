import React from 'react';
import styled, { Interpolation, css } from 'styled-components';

import { usePropsWithConfig } from 'src/utils/config';
import withCssSelectable from './selectable';


const TimelineAndContentSegment = withCssSelectable(({content, annotation, icon, className, hiddenWhenNarrow = false}: {content?: React.ReactNode, annotation?: React.ReactNode, icon?: React.ReactNode, className?: string, hiddenWhenNarrow?: boolean}) => {
  return (
    <StyledSegmentContainer hiddenWhenNarrow={hiddenWhenNarrow} className={className}>
      <StyledTimelineContainer>
        <StyledTimelineStem />
        {icon ? <StyledTimelineNodeIconWrapper>{icon}</StyledTimelineNodeIconWrapper> : <StyledTimelineNodeCircle />}
        <StyledTimelineNodeAnnotation>
          {annotation}
        </StyledTimelineNodeAnnotation>
        <StyledTimelineNodeToContentAnimatedConnector socketToNode={icon !== undefined} />
      </StyledTimelineContainer>
      {content}
    </StyledSegmentContainer>
  )
});

const TimelineStart = ({ annotation, icon }: { annotation?: React.ReactNode, icon?: React.ReactNode }) => {
  return (
    <StyledSegmentContainer hiddenWhenNarrow>
      <StyledTimelineContainer>
        {icon ? <StyledTimelineNodeIconWrapper>{icon}</StyledTimelineNodeIconWrapper> : <StyledTimelineNodeCircle />}
        <StyledTimelineNodeAnnotation>
          {annotation}
        </StyledTimelineNodeAnnotation>
      </StyledTimelineContainer>
    </StyledSegmentContainer>
  )
}

const breakpoints = {
  narrow: "1079px",
  medium: "1450px",
};

const StyledSegmentContainer = styled.div<{hiddenWhenNarrow?: boolean}>`
  position: relative;
  margin-top: 20px;
  margin-left: 150px;
  @media (max-width: ${breakpoints.medium}) {
    margin-left: 200px;
  }
  @media (max-width: ${breakpoints.narrow}) {
    margin-left: 0;
    ${props => props.hiddenWhenNarrow && `display: none;`}
  }
`;

const StyledTimelineContainer = styled.div`
  position: absolute;
  height: 100%;
  left: -100px;
  top: 0;
  @media (max-width: ${breakpoints.medium}) {
    left: -100px;
  }
  @media (max-width: ${breakpoints.narrow}) {
    display: none;
  }
`;

const StyledTimelineStem = styled.div.attrs(usePropsWithConfig)`
  position: absolute;
  background-color: ${props => props.config.colors.neutral.muted};
  height: calc(100% - 20px);
  top: 50px;
  left: 0;
  width: 1px;
`;

const StyledTimelineNode = styled.div.attrs(usePropsWithConfig)`
  position: absolute;
  top: 20px;
  left: 1px;
  translate: -50% 0;
  transition: scale 0.05s linear 0.3s;
  ${TimelineAndContentSegment}:hover & {
    scale: 1.2;
    transition-delay: 0s;
  }
`;

const StyledTimelineNodeCircle = styled(StyledTimelineNode)`
  border-radius: 50%;
  background-color: ${props => props.config.colors.neutral.default};
  width: 19px;
  height: 19px;
`;

const StyledTimelineNodeIconWrapper = styled(StyledTimelineNode)`
  color: ${props => props.config.colors.neutral.default};
  width: 25px;
  height: 25px;
  svg {
    width: 100%;
    height: 100%;
    position: absolute;
    top: -3px;
    left: 0;
  }
`;

const StyledTimelineNodeAnnotation = styled.div.attrs(usePropsWithConfig)`
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: ${props => props.config.text.body.size.small};
  white-space: nowrap;
`;

const StyledTimelineNodeToContentAnimatedConnector = styled.div.attrs(usePropsWithConfig)<{socketToNode?: boolean}>`
  position: absolute;
  background-color: ${props => props.config.colors.neutral.default};
  top: 28px;
  padding-left: ${props => props.socketToNode ? '20px' : '0px'};
  background-clip: content-box;
  width: 0px;
  height: 3px;
  transition: all 0.1s linear 0.2s;
  ${props => props.socketToNode && css`
    &&:before {
      content: "";
      position: absolute;
      top: -16px;
      left: 4px;
      transition-delay: 0.3s;
      background-color: transparent;
      width: 18px;
      height: 35px;
      border: 0px solid ${props.config.colors.neutral.default};
      border-top-right-radius: 16px;
      border-bottom-right-radius: 16px;
      border-left: 0;
    }
    ${TimelineAndContentSegment}:hover &&:before {
      transition-delay: 0.05s;
      border-width: 3px;
    }
  `}
  ${TimelineAndContentSegment}:hover & {
    width: 100px;
    transition-delay: 0.05s;
  }
`;

const withStylesOnTimelineCollapseAndExpand = ({cssOnExpand, cssOnCollapse}: {cssOnExpand: Interpolation<any>, cssOnCollapse: Interpolation<any>}) => (Component: React.ComponentType<any>) => styled(Component)`
  ${cssOnExpand}
  @media (max-width: ${breakpoints.narrow}) {
    ${cssOnCollapse}
  }
`;

export { TimelineAndContentSegment, TimelineStart, withStylesOnTimelineCollapseAndExpand }