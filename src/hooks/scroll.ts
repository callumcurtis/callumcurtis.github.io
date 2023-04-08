import React from "react";
import { scroller } from "react-scroll";

import { useConfig } from "src/context/config";

// TODO: define custom types for react-scroll options (Definitely Typed package uses any)

const useScrollTo = (destination: string, options = {}) => {
  const config = useConfig();

  const scrollTo = React.useCallback(() => {
    scroller.scrollTo(destination, {
      ...config.autoScroll.defaults,
      ...options,
    });
  }, [destination, options, config.autoScroll.defaults]);

  return scrollTo;
};

const useAutoScrollToHashOnMount = (options = {}) => {
  const config = useConfig();
  React.useEffect(() => {
    const hash = window.location.hash;
    if (hash && document.querySelector(hash)) {
      scroller.scrollTo(hash.split("#")[1], {
        ...config.autoScroll.defaults,
        ...options,
      });
    }
  }, [config.autoScroll.defaults, options]);
};

export { useScrollTo, useAutoScrollToHashOnMount };
