import { css } from "styled-components";

import { PropsWithConfig } from "src/context/config";

const sectionSize = css<PropsWithConfig<{}>>`
  min-height: calc(100svh - ${(props) => props.config.layout.nav.height});
  padding-top: clamp(20px, 5svh, 50px);
  padding-bottom: clamp(20px, 5svh, 50px);
`;

const sectionLayout = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const sectionLayer = css<PropsWithConfig<{}>>`
  z-index: ${(props) => props.config.layers.section};
`;

const breakpoints = {
  narrow: "480px",
  medium: "768px",
  wide: "1300px",
};

const regularContentSize = css`
  padding-left: 100px;
  padding-right: 100px;
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  @media (max-width: ${breakpoints.medium}) {
    padding-left: 50px;
    padding-right: 50px;
  }
  @media (max-width: ${breakpoints.narrow}) {
    padding-left: 20px;
    padding-right: 20px;
  }
`;

const wideContentSize = css`
  padding-left: 200px;
  padding-right: 200px;
  width: 100%;
  max-width: 1800px;
  margin: 0 auto;
  @media (max-width: ${breakpoints.wide}) {
    padding-left: 100px;
    padding-right: 100px;
  }
  @media (max-width: ${breakpoints.medium}) {
    padding-left: 50px;
    padding-right: 50px;
  }
  @media (max-width: ${breakpoints.narrow}) {
    padding-left: 20px;
    padding-right: 20px;
  }
`;

export {
  regularContentSize,
  wideContentSize,
  sectionSize,
  sectionLayout,
  sectionLayer,
};
