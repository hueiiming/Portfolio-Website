import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello, <br />
        I am Huei Ming
      </SectionTitle>
      <SectionText>
        I am a passionate Software Engineer who is very eager to learn.
      </SectionText>
      <Button onClick={() => window.location = 'limhueiming2016@gmail.com'}>Learn More</Button>
    </LeftSection>
  </Section>    
);

export default Hero;