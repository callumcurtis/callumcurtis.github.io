import React from 'react';
import WAVES from 'vanta/dist/vanta.waves.min';


const withWaveAnimationBackground = <P extends {waveOptions?: {}}>(Component: React.ComponentType<Omit<P, "waveOptions">>) => (props: P) => {
  const [vantaEffect, setVantaEffect] = React.useState<{ destroy: () => void } | null>(null)
  const myRef = React.useRef(null)
  React.useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(WAVES({
        el: myRef.current,
        ...props.waveOptions,
      }))
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect, props.waveOptions])
  return <Component {...props} ref={myRef} />
}

export { withWaveAnimationBackground }