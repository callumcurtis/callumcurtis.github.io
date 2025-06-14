import React from "react";
import WAVES from "vanta/dist/vanta.waves.min";
import FOG from "vanta/dist/vanta.fog.min";

const withWaveAnimationBackground =
  <P extends { waveOptions?: {} }>(
    Component: React.ComponentType<Omit<P, "waveOptions">>
  ) =>
  ({ waveOptions, ...rest }: P) => {
    const [vantaEffect, setVantaEffect] = React.useState<{
      destroy: () => void;
    } | null>(null);
    const myRef = React.useRef(null);
    React.useEffect(() => {
      if (!vantaEffect) {
        setVantaEffect(
          WAVES({
            el: myRef.current,
            ...waveOptions,
          })
        );
      }
      return () => {
        if (vantaEffect) vantaEffect.destroy();
      };
    }, [vantaEffect, waveOptions]);
    return <Component {...rest} ref={myRef} />;
  };

const withFogAnimationBackground =
  <P extends { fogOptions?: {} }>(
    Component: React.ComponentType<Omit<P, "fogOptions">>
  ) =>
  ({ fogOptions, ...rest }: P) => {
    const [vantaEffect, setVantaEffect] = React.useState<{
      destroy: () => void;
    } | null>(null);
    const myRef = React.useRef(null);
    React.useEffect(() => {
      if (!vantaEffect) {
        setVantaEffect(
          FOG({
            el: myRef.current,
            ...fogOptions,
          })
        );
      }
      return () => {
        if (vantaEffect) vantaEffect.destroy();
      };
    }, [vantaEffect, fogOptions]);
    return <Component {...rest} ref={myRef} />;
  };

export { withWaveAnimationBackground, withFogAnimationBackground };
