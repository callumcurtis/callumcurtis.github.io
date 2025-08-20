import styled from "styled-components";

import { usePropsWithConfig } from "src/context/config";

const StyledBrand = styled.span.attrs(usePropsWithConfig)`
  font-family: "Kumbh Sans";
  color: ${(props) => props.config.colors.foreground.default};
`;

const Brand = (props: React.HTMLAttributes<HTMLSpanElement>) => {
  return <StyledBrand {...props}>C</StyledBrand>;
};

export default Brand;
