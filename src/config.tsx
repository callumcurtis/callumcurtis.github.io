import React from 'react';


const navHeight = "56px";

const defaultColors = {
  neutral: {
    subtle: "#eaeaea",
    muted: "#c3c3c3",
    default: "#6e7781",
    emphasized: "#060609",
  },
  border: {
    default: "#eaeaea",
    emphasized: "#c3c3c3",
  },
  foreground: {
    muted: "#656d76",
    emphasizedOnEmphasized: "#ffffff",
    mutedOnEmphasized: "#dddddd",
  },
  accent: {
    muted: "#387dff4b",
  }
}

const defaultConfig = {
  scrollReveal: {
    defaults: {
      viewOffset: { top: parseInt(navHeight) + 50, bottom: 50},
      distance: '30px',
      duration: 500,
      easing: 'cubic-bezier(.4,-0.01,.3,.37)',
      origin: "left",
      reset: true,
    }
  },
  vanta: {
    defaults: {
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
    }
  },
  ids: {
    hero: "hero",
    about: "about",
    experience: "experience",
  },
  layers: {
    background: -1,
  },
  layout: {
    nav: {
      height: navHeight,
    },
  },
  colors: { ...defaultColors },
  shadow: {
    default: `0 6px 20px ${defaultColors.accent.muted}`,
  },
  text: {
    weight: {
      semibold: 600,
    }
  }
}

type Config = typeof defaultConfig;

const ConfigContext = React.createContext(defaultConfig);

const ConfigProvider = ({ children, config = defaultConfig }: React.PropsWithChildren<{ config?: Config }>) => {
  return (
    <ConfigContext.Provider value={config}>
      {children}
    </ConfigContext.Provider>
  )
}

const useConfig = () => React.useContext(ConfigContext);

type PropsWithConfig<P> = P & { config: Config };

const usePropsWithConfig = <P extends {}>(props: P): PropsWithConfig<P> => {
  return {
    ...props,
    config: useConfig(),
  }
}

export default defaultConfig;
export { ConfigProvider, useConfig, usePropsWithConfig };
export type { Config, PropsWithConfig };
