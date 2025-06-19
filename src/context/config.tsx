import React from "react";

const scrollGradientCssVariable = "--scroll-gradient";
const scrollGradientColors: [number, number, number][] = [
  // r,   g,   b
  [166, 214, 222],
  [235, 220, 245],
  [191, 222, 206],
];
const initialScrollColor = `rgb(${scrollGradientColors[0].join(", ")})`;

const colors = {
  neutral: {
    subtle: "#eaeaea",
    default: "#6e7781",
  },
  background: {
    muted: "#060609",
  },
  border: {
    default: "#000000",
  },
  foreground: {
    muted: "#656d76",
  },
  hero: {
    foreground: "#ffffff",
    fog: {
      highlight: "#3b89bb",
      midtone: "#08748e",
      lowlight: "#0fd42f",
      base: "#b295cd",
    },
  },
  scrollGradient: scrollGradientColors,
  about: {
    background: `linear-gradient(to bottom in oklab, #f0f4f5 0, ${initialScrollColor} 100%)`,
  },
  nav: {
    background: "#ffffff",
  },
  experience: {
    cards: {
      background: "#ffffff",
    },
    background: `var(${scrollGradientCssVariable}, ${initialScrollColor})`,
  },
  timeline: "#000000",
  testimonials: {
    background: `var(${scrollGradientCssVariable}, ${initialScrollColor})`,
  },
  projects: {
    background: `var(${scrollGradientCssVariable}, ${initialScrollColor})`,
  },
};

const ids = {
  hero: "hero",
  about: "about",
  experience: "experience",
  projects: "projects",
  navigation: "navigation",
};

const navHeight = "56px";

const defaultConfig = {
  autoScroll: {
    offset: -parseInt(navHeight, 10),
    duration: 300,
    delay: 0.2,
    smooth: true,
    isDynamic: true,
    ignoreCancelEvents: false,
  },
  scrollGradient: {
    cssVariable: scrollGradientCssVariable,
  },
  scrollReveal: {
    defaults: {
      viewOffset: { top: parseInt(navHeight) + 50, bottom: 50 },
      distance: "30px",
      duration: 500,
      easing: "cubic-bezier(.4,-0.01,.3,.37)",
      origin: "left",
      reset: true,
    },
  },
  vanta: {
    defaults: {
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
    },
  },
  ids: ids,
  layers: {
    section: 0,
    hero: {
      background: -2,
      foreground: -1,
    },
    footer: {
      background: -2,
      foreground: -1,
    },
    overlay: 1,
  },
  layout: {
    nav: {
      height: navHeight,
    },
  },
  nav: {
    destinations: [
      {
        id: ids.about,
        name: "About",
      },
      {
        id: ids.experience,
        name: "Experience",
      },
      {
        id: ids.projects,
        name: "Projects",
      },
    ],
  },
  colors: colors,
  text: {
    weight: {
      semibold: 600,
    },
    body: {
      size: {
        small: "14px",
      },
    },
  },
  socials: {
    side: {
      enable: false,
    },
  },
};

type Config = typeof defaultConfig;

const ConfigContext = React.createContext(defaultConfig);

const ConfigProvider = ({
  children,
  config = defaultConfig,
}: React.PropsWithChildren<{ config?: Config }>) => {
  return (
    <ConfigContext.Provider value={config}>{children}</ConfigContext.Provider>
  );
};

const useConfig = () => React.useContext(ConfigContext);

type PropsWithConfig<P> = P & { config: Config };

const usePropsWithConfig = <P extends {}>(props: P): PropsWithConfig<P> => {
  return {
    ...props,
    config: useConfig(),
  };
};

export default defaultConfig;
export { ConfigProvider, useConfig, usePropsWithConfig };
export type { Config, PropsWithConfig };
