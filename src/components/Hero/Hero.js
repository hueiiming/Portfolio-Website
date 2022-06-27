import React from 'react';

import { SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { Section, LeftSection, Img } from './HeroStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFutbol } from '@fortawesome/free-solid-svg-icons'

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        <Img src="/images/hm.png" />
        <br />
        Huei Ming
      </SectionTitle>
      <SectionText>
        I am a passionate and eager to learn Software Engineer. <br  /> I will be entering SMU in August this year majoring in Software Engineering.
      </SectionText>
      <Button onClick={() => window.open('https://www.linkedin.com/in/lim-huei-ming/')}>Learn More</Button>
    </LeftSection>
  </Section>    
);

export default Hero;