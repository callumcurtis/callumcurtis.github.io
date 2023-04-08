import styled from 'styled-components';

import { usePropsWithConfig } from 'src/utils/config';


const StyledAnchor = styled.a.attrs(usePropsWithConfig)`
  color: ${props => props.config.colors.foreground.muted};
  text-decoration: none;
`;

const StyledSpanOverlay = styled.span.attrs(usePropsWithConfig)`
  width: 100%;
  height: 100%;
  z-index: ${props => props.config.layers.overlay};
  position: absolute;
  top: 0;
  left: 0;
`;

const AnchorOverlay = (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
  return (
    <StyledAnchor {...props}>
      <StyledSpanOverlay/>
    </StyledAnchor>
  )
}

export { AnchorOverlay }