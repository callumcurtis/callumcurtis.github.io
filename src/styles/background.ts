import { css } from 'styled-components';

import { PropsWithConfig } from 'src/utils/config';


const backgroundContainer = css`
  position: relative;
`;

const backgroundPosition = css`
  position: absolute;
`;

const backgroundLayer = css<PropsWithConfig<{}>>`
  z-index: ${props => props.config.layers.background};
`;

const backgroundFillContainer = css`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  ${backgroundPosition}
  ${backgroundLayer}
`;

export { backgroundContainer, backgroundFillContainer }