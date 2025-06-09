import styled from "styled-components";

import { Anchor } from "src/components/link";
import { SocialLink } from "src/components/social";
import { usePropsWithConfig } from "src/context/config";
import { useContent } from "src/context/content";
import { withStyleOnSideSocialsCollapse } from "src/components/side-socials";

const StyledFooter = styled.footer.attrs(usePropsWithConfig)`
  padding: 0 0 100px 0;
  text-align: center;
  position: fixed;
  bottom: 0;
  z-index: ${(props) => props.config.layers.footer.foreground};
  width: 100%;
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

const FooterPusher = styled.div.attrs(usePropsWithConfig)`
  height: 300px;
  position: relative;
  background-color: ${(props) => props.config.colors.background.muted};
  z-index: ${(props) => props.config.layers.footer.background};
`;

const Footer = () => {
  const content = useContent();
  return (
    <>
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
      <FooterPusher />
    </>
  );
};

export default Footer;
