import React from 'react';
import { scroller } from 'react-scroll';

import { useConfig } from 'src/utils/config';


// TODO: define custom types for react-scroll options (Definitely Typed package uses any)

const useScrollTo = (destination: string, options = {}) => {
  const config = useConfig();

  const scrollTo = React.useCallback(() => {
    scroller.scrollTo(destination, {...config.autoScroll, ...options});
  }, [destination, options, config.autoScroll]);

  return scrollTo;
}

const useAutoScrollToHashOnMount = (options = {}) => {
  const config = useConfig();
  React.useEffect(() => {
    const hash = window.location.hash;
    if (hash && document.querySelector(hash)) {
      scroller.scrollTo(hash.split("#")[1], {...config.autoScroll, ...options});
    }
  }, [config.autoScroll, options]);
};

export { useScrollTo, useAutoScrollToHashOnMount };