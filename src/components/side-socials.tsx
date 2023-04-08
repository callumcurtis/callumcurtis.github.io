import styled from 'styled-components';

import { SocialLink } from 'src/components/social';
import { usePropsWithConfig } from 'src/utils/config';
import { useContent } from 'src/utils/content';


const StyledFixedBottomRightSideContainer = styled.div.attrs(usePropsWithConfig)`
  position: fixed;
  display: none;
  margin: 0 50px 0 0;
  align-items: center;
  bottom: 0;
  right: 0;
  flex-direction: column;
  & > *:not(:last-child) {
    margin-bottom: 20px;
  }
  @media (min-width: ${props => props.config.breakpoints.switchToSocialsOnSide}) {
    display: flex;
  }
`;

const StyledFixedBottomRightSideStem = styled.div.attrs(usePropsWithConfig)`
  height: calc(clamp(50px, 20vh, 200px) - 50px);
  width: 1px;
  background-color: ${props => props.config.colors.neutral.default};
`;

const SideSocials = () => {
  const content = useContent();
  return (
    <StyledFixedBottomRightSideContainer>
      {content.socials.map((social, index) => <SocialLink key={index} href={social.link}>{social.icon}</SocialLink>)}
      <StyledFixedBottomRightSideStem/>
    </StyledFixedBottomRightSideContainer>
  )
}

export default SideSocials;