import { css } from 'styled-components';

import { PropsWithConfig } from 'src/config';


const timelineContainerClassName = 'timeline-container';

const timelineContainer = css<{hiddenWhenNarrow?: boolean}>`
  margin: 20px 0px 20px 150px;
  @media (max-width: 1450px) {
    margin: 20px 0px 20px 200px;
  }
  @media (max-width: 1079px) {
    margin: 20px 0px;
    ${props => props.hiddenWhenNarrow && `display: none;`}
  }
`;

const timelineStemHorizontalPosition = css`
  position: absolute;
  left: 50px;
  @media (max-width: 1450px) {
    left: 100px;
  }
  @media (max-width: 1079px) {
    display: none;
  }
`;

const timelineStem = css`
  position: absolute;
  height: calc(100% - 20px);
  top: 50px;
  width: 1px;
  ${timelineStemHorizontalPosition}
`;

const timelineNodePosition = css`
  position: absolute;
  top: -30px;
  left: -9px;
`;

const timelineNodeHover = css<PropsWithConfig<{}>>`
  transition: all 0.05s linear 0.3s;
  .${timelineContainerClassName}:hover & {
    transform: scale(1.2);
    transition-delay: 0s;
  }
`;

const timelineNodeCircle = css<PropsWithConfig<{}>>`
  border-radius: 50%;
  background-color: ${props => props.config.colors.neutral.default};
  width: 19px;
  height: 19px;
  ${timelineNodePosition}
`;

const timelineNodeIcon = css<PropsWithConfig<{}>>`
  color: ${props => props.config.colors.neutral.default};
  width: 25px;
  height: 25px;
  ${timelineNodePosition}
`;

const timelineNodeToContentAnimatedConnector = css<PropsWithConfig<{socketToNode?: boolean}>>`
  position: absolute;
  background-color: ${props => props.config.colors.neutral.default};
  top: -22px;
  padding-left: ${props => props.socketToNode ? '20px' : '0px'};
  background-clip: content-box;
  width: 0px;
  height: 3px;
  transition: all 0.1s linear 0.2s;
  ${props => props.socketToNode && css`
    &:before {
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
    .${timelineContainerClassName}:hover &:before {
      transition-delay: 0.05s;
      border-width: 3px;
    }
  `}
  .${timelineContainerClassName}:hover & {
    width: 100px;
    transition-delay: 0.05s;
  }
`;

const displayOnTimelineCollapse = css<{display: string}>`
  display: none;
  @media (max-width: 1079px) {
    display: ${props => props.display};
  }
`;

const timelineNodeAnnotation = css`
  position: absolute;
  top: -30px;
  right: 20px;
  font-size: 14px;
  white-space: nowrap;
`;

export {
  timelineContainerClassName,
  timelineContainer,
  timelineStemHorizontalPosition,
  timelineStem,
  timelineNodeHover,
  timelineNodeCircle,
  timelineNodeIcon,
  timelineNodeToContentAnimatedConnector,
  timelineNodeAnnotation,
  displayOnTimelineCollapse,
}