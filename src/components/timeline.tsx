import React from "react";
import styled, { css } from "styled-components";

import { motion } from "motion/react";
import { usePropsWithConfig } from "src/context/config";
import { withCssSelectable, withStyleOnSelect } from "src/components/select";

const TimelineAndContentSegment = withCssSelectable(
  ({
    content,
    annotation,
    icon,
    className,
    collapsedWhenNarrow = false,
  }: {
    content?: React.ReactNode;
    annotation?: React.ReactNode;
    icon?: React.ReactNode;
    className?: string;
    collapsedWhenNarrow?: boolean;
  }) => {
    return (
      <StyledSegmentContainer
        collapsedWhenNarrow={collapsedWhenNarrow}
        className={className}
      >
        <StyledTimelineContainer>
          <StyledTimelineStemWithMotion
            initial={{ height: 0 }}
            whileInView={{ height: "calc(100% - 20px)" }}
            transition={{ duration: 1, ease: "easeInOut" }}
          />
          {icon ? (
            <StyledTimelineNodeIconWrapper>
              {icon}
            </StyledTimelineNodeIconWrapper>
          ) : (
            <StyledTimelineNodeCircle />
          )}
          <StyledTimelineNodeAnnotation>
            {annotation}
          </StyledTimelineNodeAnnotation>
          <StyledTimelineNodeToContentAnimatedConnector
            socketToNode={icon !== undefined}
          />
        </StyledTimelineContainer>
        {content}
      </StyledSegmentContainer>
    );
  }
);

const TimelineStart = ({
  annotation,
  icon,
}: {
  annotation?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <StyledSegmentContainer collapsedWhenNarrow>
      <StyledTimelineContainer>
        {icon ? (
          <StyledTimelineNodeIconWrapper>{icon}</StyledTimelineNodeIconWrapper>
        ) : (
          <StyledTimelineNodeCircle />
        )}
        <StyledTimelineNodeAnnotation>
          {annotation}
        </StyledTimelineNodeAnnotation>
      </StyledTimelineContainer>
    </StyledSegmentContainer>
  );
};

const breakpoints = {
  narrow: "1079px",
  medium: "1450px",
};

const StyledSegmentContainer = styled.div<{ collapsedWhenNarrow?: boolean }>`
  position: relative;
  margin-top: 20px;
  margin-left: 150px;
  @media (max-width: ${breakpoints.medium}) {
    margin-left: 200px;
  }
  @media (max-width: ${breakpoints.narrow}) {
    margin-left: 0;
    ${(props) => props.collapsedWhenNarrow && `display: none;`}
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
  background-color: ${(props) => props.config.colors.timeline};
  top: 50px;
  left: 0;
  width: 1px;
`;

const StyledTimelineStemWithMotion = motion.create(StyledTimelineStem);

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
  background-color: ${(props) => props.config.colors.timeline};
  width: 19px;
  height: 19px;
`;

const StyledTimelineNodeIconWrapper = styled(StyledTimelineNode)`
  color: ${(props) => props.config.colors.timeline};
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
  font-size: ${(props) => props.config.text.body.size.small};
  white-space: nowrap;
`;

const StyledTimelineNodeToContentAnimatedConnector = styled.div.attrs(
  usePropsWithConfig
)<{ socketToNode?: boolean }>`
  position: absolute;
  background-color: ${(props) => props.config.colors.timeline};
  top: 28px;
  padding-left: ${(props) => (props.socketToNode ? "20px" : "0px")};
  background-clip: content-box;
  width: 0px;
  height: 3px;
  transition: all 0.1s linear 0.2s;
  ${(props) =>
    props.socketToNode &&
    css`
      &&:before {
        content: "";
        position: absolute;
        top: -16px;
        left: 4px;
        transition-delay: 0.3s;
        background-color: transparent;
        width: 18px;
        height: 35px;
        border: 0px solid ${props.config.colors.timeline};
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

const withStyleOnTimelineCollapse = withStyleOnSelect(
  `@media (max-width: ${breakpoints.narrow})`
);

export {
  TimelineAndContentSegment,
  TimelineStart,
  withStyleOnTimelineCollapse,
};
