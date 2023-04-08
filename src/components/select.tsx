import styled, { Interpolation } from "styled-components";

// Allows other styled-components to use the given Component as a css selector
const withCssSelectable = <P extends { className?: string }>(
  Component: React.ComponentType<P>
) => styled(Component)``;

const withStyleOnSelect =
  (selection: Interpolation<any>) =>
  ({ styleOnSelect }: { styleOnSelect: Interpolation<any> }) =>
  (Component: React.ComponentType<any>) =>
    styled(Component)`
      ${selection} {
        ${styleOnSelect}
      }
    `;

export { withStyleOnSelect, withCssSelectable };
