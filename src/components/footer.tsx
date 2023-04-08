import styled from "styled-components";

import { Anchor } from "src/components/link";
import { SocialLink } from "src/components/social";
import { usePropsWithConfig } from "src/context/config";
import { useContent } from "src/context/content";
import { withStyleOnSideSocialsCollapse } from "src/components/side-socials";

const StyledFooter = styled.footer`
  margin-top: 80px;
  padding: 20px 0;
  text-align: center;
`;

const StyledFooterSocials = withStyleOnSideSocialsCollapse({
  styleOnSelect: "display: flex;",
})(styled.div.attrs(usePropsWithConfig)`
  display: none;
  margin: 0 0 20px 0;
  justify-content: center;
  flex-direction: row;
  & > *:not(:last-child) {
    margin-right: 20px;
  }
`);

const StyledFooterCredit = styled.p.attrs(usePropsWithConfig)`
  padding: 0 10px;
  font-size: ${(props) => props.config.text.body.size.small};
`;

const Footer = () => {
  const content = useContent();
  return (
    <StyledFooter>
      <StyledFooterSocials>
        {content.socials.map((social, index) => (
          <SocialLink key={index} href={social.link}>
            {social.icon}
          </SocialLink>
        ))}
      </StyledFooterSocials>
      <Anchor href={content.credit.link}>
        <StyledFooterCredit>{content.credit.brief}</StyledFooterCredit>
      </Anchor>
    </StyledFooter>
  );
};

export default Footer;
