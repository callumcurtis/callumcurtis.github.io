import styled from "styled-components";

import { Anchor } from "src/components/link";

const SocialLink = styled(Anchor)`
  & svg,
  & img {
    width: 35px;
    height: auto;
    color: ${(props) => props.config.colors.neutral.default};
    transition: all 0.2s ease-in-out;
    will-change: transform;
  }
  & svg:hover,
  & img:hover {
    transform: translateY(-2px);
  }
`;

export { SocialLink };
