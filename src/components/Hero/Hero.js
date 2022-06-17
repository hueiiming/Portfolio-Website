import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection, Img } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        <Img src="/images/linkedin.png" />
        <br />
        Huei Ming
      </SectionTitle>
      <SectionText>
        I am a passionate Software Engineer who is very eager to learn. <br  /> I will be entering NTU in August this year studying Computer Science.
      </SectionText>
      <Button onClick={() => window.open('https://www.linkedin.com/in/lim-huei-ming/')}>Learn More</Button>
    </LeftSection>
  </Section>    
);

export default Hero;