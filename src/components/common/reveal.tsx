import React from "react";
import ScrollReveal from 'scrollreveal';

import { defaults } from 'src/config/scroll-reveal';


ScrollReveal(defaults);

const useScrollReveal = <T extends HTMLElement>(options: scrollReveal.ScrollRevealObjectOptions) => {
  const ref = React.createRef<T>();
  React.useEffect(() => {
    if (ref.current) {
      ScrollReveal().reveal(ref.current, options);
    }
  }, [ref, options])
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
