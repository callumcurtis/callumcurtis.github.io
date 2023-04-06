import React from 'react';
import ScrollReveal from 'scrollreveal';

import { useConfig } from 'src/config'


const useScrollReveal = <T extends HTMLElement>(options: scrollReveal.ScrollRevealObjectOptions) => {
  const { scrollReveal: { defaults } } = useConfig();
  const ref = React.createRef<T>();
  React.useEffect(() => {
    if (ref.current) {
      ScrollReveal().reveal(ref.current, {...defaults, ...options});
    }
  }, [ref, defaults, options])
  return ref;
}

const Reveal = ({ children, ...options }: React.PropsWithChildren<scrollReveal.ScrollRevealObjectOptions>) => {
  const ref = useScrollReveal<HTMLDivElement>(options);
  return (
    <div ref={ref}>
      {children}
    </div>
  )
}

export default Reveal;