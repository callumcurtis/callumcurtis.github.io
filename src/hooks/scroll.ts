import React from "react";
import { scroller } from "react-scroll";

import { useConfig } from "src/context/config";

// TODO: define custom types for react-scroll options (Definitely Typed package uses any)

const useScrollTo = (destination: string, options = {}) => {
  const config = useConfig();

  const scrollTo = React.useCallback(() => {
    scroller.scrollTo(destination, {
      ...config.autoScroll,
      ...options,
    });
  }, [destination, options, config.autoScroll]);

  return scrollTo;
};

const useAutoScrollToHashOnMount = (options = {}) => {
  const config = useConfig();
  React.useEffect(() => {
    const hash = window.location.hash;
    if (hash && document.querySelector(hash)) {
      scroller.scrollTo(hash.split("#")[1], {
        ...config.autoScroll,
        ...options,
      });
    }
  }, [config.autoScroll, options]);
};

const linearScrollGradient =
  ({
    getStart,
    getEnd,
    getProgress,
    regions,
  }: {
    getStart: () => number | undefined;
    getEnd: () => number | undefined;
    getProgress: () => number | undefined;
    regions: [number, number, number][];
  }) =>
  () => {
    const start = getStart();
    const end = getEnd();
    var progress = getProgress();
    if (
      regions.length <= 1 ||
      start == null ||
      end == null ||
      progress == null
    ) {
      return;
    }
    progress = Math.max(0, Math.min(end, progress - start));
    const distance = end - start;
    var pairs: [[number, number, number], [number, number, number]][] = Array(
      regions.length - 1
    );
    for (let i = 0; i < regions.length - 1; i++) {
      pairs[i] = [regions[i], regions[i + 1]];
    }
    const pairAndFraction = (progress / distance) * pairs.length;
    const pair = Math.max(
      0,
      Math.min(pairs.length - 1, Math.floor(pairAndFraction))
    );
    const fraction = pairAndFraction >= pairs.length ? 1 : pairAndFraction % 1;
    const [from, to] = pairs[pair];
    const rgb = from.map((f, i) => (to[i] - f) * fraction + f) as [
      number,
      number,
      number
    ];
    return `rgb(${rgb.join(", ")})`;
  };

const useScrollGradient = (
  getColor: () => string | undefined,
  cssVariable: string
) => {
  React.useEffect(() => {
    const onScroll = () => {
      const color = getColor();
      if (color == null) {
        return;
      }
      document.documentElement.style.setProperty(cssVariable, color);
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [getColor, cssVariable]);
};

export {
  useScrollTo,
  useAutoScrollToHashOnMount,
  useScrollGradient,
  linearScrollGradient,
};
