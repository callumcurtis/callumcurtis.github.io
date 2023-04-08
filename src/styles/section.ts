import { css } from 'styled-components';

import { PropsWithConfig } from 'src/utils/config';


const sectionSize = css<PropsWithConfig<{}>>`
  min-height: calc(100vh - ${props => props.config.layout.nav.height});
  padding: clamp(20px, 5vh, 50px) 0px;
`;

const sectionLayout = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const breakpoints = {
  narrow: "480px",
  medium: "768px",
  wide: "1300px",
}

const regularContentSize = css`
  padding: 0px 100px;
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  @media (max-width: ${breakpoints.medium}) {
    padding: 0px 50px;
  }
  @media (max-width: ${breakpoints.narrow}) {
    padding: 0px 20px;
  }
`;

const wideContentSize = css`
  padding: 0px 200px;
  width: 100%;
  max-width: 1800px;
  margin: 0 auto;
  @media (max-width: ${breakpoints.wide}) {
    padding: 0px 100px;
  }
  @media (max-width: ${breakpoints.medium}) {
    padding: 0px 50px;
  }
  @media (max-width: ${breakpoints.narrow}) {
    padding: 0px 20px;
  }
`;

export { regularContentSize, wideContentSize, sectionSize, sectionLayout }