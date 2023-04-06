import React from 'react';
import WAVES from 'vanta/dist/vanta.waves.min';
import styled from 'styled-components';

import { useConfig, usePropsWithConfig } from 'src/config';
import { wideContentSize, sectionSize, sectionLayout } from 'src/components/sections/section';
import { useContent } from 'src/content';


const StyledBackground = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: -1;
`;

const WaveBackground = () => {
  const [vantaEffect, setVantaEffect] = React.useState<{destroy: () => void} | null>(null)
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
  return <StyledBackground ref={myRef}/>
}

const StyledHeroSection = styled.section.attrs(usePropsWithConfig)`
  position: relative;
  text-align: left;
  color: white;
  ${sectionSize}
  ${sectionLayout}
`;

const StyledHeroContent = styled.div`
  ${wideContentSize}
`;

const StyledHeading = styled.h1`
  font-weight: 600;
`;

const StyledBrief = styled.p`
  max-width: 550px;
  margin-top: 20px;
`;

const Hero = () => {
  const config = useConfig();
  const content = useContent();
  return (
    <StyledHeroSection id={config.ids.hero}>
        <WaveBackground/>
        <StyledHeroContent>
          <StyledHeading>{content.hero.heading}</StyledHeading>
          <StyledBrief>{content.hero.brief}</StyledBrief>
        </StyledHeroContent>
    </StyledHeroSection>
  )
}

export default Hero;
