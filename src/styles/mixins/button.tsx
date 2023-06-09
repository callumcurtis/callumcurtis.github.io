import { css } from "styled-components";

import { PropsWithConfig } from "src/context/config";

const circularBackgroundOnHover = css<PropsWithConfig<{}>>`
  &:hover {
    background-color: ${(props) => props.config.colors.neutral.subtle};
    border-radius: 50%;
  }
`;

export { circularBackgroundOnHover };
