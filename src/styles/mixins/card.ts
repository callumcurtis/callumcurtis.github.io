import { css, StyledComponent } from "styled-components";

import { PropsWithConfig } from "src/context/config";

const cardBorder = css<PropsWithConfig<{}>>`
  border-radius: 10px;
  border: 1px solid ${(props) => props.config.colors.border.default};
`;

const cardHover = css<
  PropsWithConfig<{
    movement?: boolean;
    hoverTarget?: StyledComponent<any, any>;
  }>
>`
  transition: all 0.2s ease-in-out;
  ${
    (props) =>
    props.hoverTarget
      ? css`
          ${props.hoverTarget}:hover &&
        `
      : css`&&:hover` // prettier-ignore
  } {
    ${(props) => props.movement && "transform: translateY(-5px);"}
    border-color: ${(props) => props.config.colors.border.emphasized};
    box-shadow: 0 6px 20px ${(props) => props.config.colors.accent.muted};
  }
`;

const cardSize = css`
  width: 100%;
  height: 100%;
`;

const cardPadding = css`
  padding: 20px;
`;

export { cardBorder, cardSize, cardPadding, cardHover };
