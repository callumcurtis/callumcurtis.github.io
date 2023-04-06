import { css } from 'styled-components';

import { PropsWithConfig } from 'src/config';


const sectionSize = css<PropsWithConfig<{}>>`
  min-height: calc(100vh - ${props => props.config.layout.nav.height});
  padding: clamp(20px, 5vh, 50px) 0px;
`;

const sectionLayout = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const wideContentSize = css`
  padding: 0px 200px;
  width: 100%;
  max-width: 1800px;
  margin: 0 auto;
  @media (max-width: 1300px) {
    padding: 0px 100px;
  }
  @media (max-width: 768px) {
    padding: 0px 50px;
  }
  @media (max-width: 480px) {
    padding: 0px 20px;
  }
`;

export { wideContentSize, sectionSize, sectionLayout }