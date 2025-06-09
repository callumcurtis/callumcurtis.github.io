import { css } from "styled-components";

import { PropsWithConfig } from "src/context/config";

const backgroundContainer = css`
  position: relative;
`;

const backgroundPosition = css`
  position: absolute;
`;

const backgroundFillContainer = css`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  ${backgroundPosition}
`;

export { backgroundContainer, backgroundFillContainer };
