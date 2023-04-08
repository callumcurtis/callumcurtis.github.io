import styled from "styled-components";

const StyledBrand = styled.span`
  font-family: "Kumbh Sans";
`;

const Brand = (props: React.HTMLAttributes<HTMLSpanElement>) => {
  return <StyledBrand {...props}>C</StyledBrand>;
};

export default Brand;
