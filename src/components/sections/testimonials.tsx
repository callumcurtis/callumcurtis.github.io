import styled from "styled-components";

import {
  sectionSize,
  sectionLayout,
  sectionLayer,
  wideContentSize,
} from "src/styles/mixins/section";
import { usePropsWithConfig } from "src/context/config";
import { useContent, TestimonialContent } from "src/context/content";

const StyledTestimonialSection = styled.section.attrs(usePropsWithConfig)`
  ${sectionSize}
  ${sectionLayout}
  ${sectionLayer}
  background-color: ${(props) => props.config.colors.testimonials.background};
  padding-top: 200px;
`;

const StyledTestimonialRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  column-gap: 100px;
  max-height: 500px;
  overflow: hidden;
  text-align: left;
  ${wideContentSize}
`;

const StyledTestimonial = styled.div`
  flex-basis: 350px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 500px;
  max-width: 520px;
`;

const TestimonialQuotationMark = (
  props: React.HTMLAttributes<HTMLSpanElement>
) => {
  return <span {...props}>“</span>;
};

const StyledTestimonialQuotationMark = styled(TestimonialQuotationMark)`
  font-size: 64px;
  height: 60px;
`;

const StyledTestimonialQuote = styled.h3``;

const StyledTestimonialAttribution = styled.p``;

const Testimonial = ({ testimonial }: { testimonial: TestimonialContent }) => {
  return (
    <StyledTestimonial>
      <StyledTestimonialQuotationMark />
      <StyledTestimonialQuote>{testimonial.quote}</StyledTestimonialQuote>
      <StyledTestimonialAttribution>
        {testimonial.author}, {testimonial.position}
      </StyledTestimonialAttribution>
    </StyledTestimonial>
  );
};

const Testimonials = () => {
  const content = useContent();
  return (
    <StyledTestimonialSection>
      <StyledTestimonialRow>
        {content.testimonials.list.map((testimonial, index) => (
          <Testimonial testimonial={testimonial} key={index} />
        ))}
      </StyledTestimonialRow>
    </StyledTestimonialSection>
  );
};

export default Testimonials;
