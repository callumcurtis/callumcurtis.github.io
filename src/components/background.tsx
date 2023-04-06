import React from 'react';
import WAVES from 'vanta/dist/vanta.waves.min';

import { useConfig } from 'src/config';


const withWaveAnimationBackground = <P extends {}>(Component: React.ComponentType<P>) => (props: P) => {
  const [vantaEffect, setVantaEffect] = React.useState<{ destroy: () => void } | null>(null)
  const { vanta: { waves: wavesConfig } } = useConfig();
  const myRef = React.useRef(null)
  React.useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(WAVES({
        el: myRef.current,
        ...wavesConfig,
      }))
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect, wavesConfig])
  return <Component {...props} ref={myRef} />
}

export { withWaveAnimationBackground }