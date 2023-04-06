import { css } from 'styled-components';

import { PropsWithConfig } from 'src/config';


const cardBorder = css<PropsWithConfig<{}>>`
  border-radius: 10px;
  border: 1px solid ${props => props.config.colors.border.default};
`;

const cardHover = css<PropsWithConfig<{movement?: boolean}>>`
  transition: all 0.2s ease-in-out;
  &:hover {
    ${props => props.movement && 'transform: translateY(-5px);'}
    border-color: ${props => props.config.colors.border.emphasized};
    box-shadow: ${props => props.config.shadow.default};
  }
`;

const cardSize = css`
  padding: 20px;
  width: 100%;
  height: 100%;
`;

export { cardBorder, cardSize, cardHover }