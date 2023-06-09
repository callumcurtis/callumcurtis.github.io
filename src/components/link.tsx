import styled from "styled-components";

import { usePropsWithConfig } from "src/context/config";

const Anchor = styled.a.attrs(usePropsWithConfig)`
  color: ${(props) => props.config.colors.foreground.muted};
  text-decoration: none;
  &:hover {
    color: ${(props) => props.config.colors.foreground.muted};
  }
`;

const StyledSpanOverlay = styled.span.attrs(usePropsWithConfig)`
  width: 100%;
  height: 100%;
  z-index: ${(props) => props.config.layers.overlay};
  position: absolute;
  top: 0;
  left: 0;
`;

const AnchorOverlay = (
  props: React.AnchorHTMLAttributes<HTMLAnchorElement>
) => {
  return (
    <Anchor {...props}>
      <StyledSpanOverlay />
    </Anchor>
  );
};

export { Anchor, AnchorOverlay };
