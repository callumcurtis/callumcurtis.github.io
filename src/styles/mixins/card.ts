import { css, StyledComponent } from "styled-components";

import { PropsWithConfig } from "src/context/config";

const cardBorder = css<PropsWithConfig<{}>>`
  border-radius: 15px;
  border: 1px solid ${(props) => props.config.colors.border.default};
  box-shadow: -5px 5px 0px ${(props) => props.config.colors.border.default};
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
