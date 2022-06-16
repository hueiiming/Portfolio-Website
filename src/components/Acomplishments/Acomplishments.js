import React from 'react';

import { Section, SectionDivider, SectionTitle, SectionText } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: '1st', text: 'iCodeiTell Competition'},
  { number: 'iPREP', text: 'Industry Preparation for Pre-graduate'},
  { number: 'Distinction', text: 'For every Programming projects every Semester 2017-2019'},
  { number: 'Director\'\s List', text: 'Semester 1 2017', }
];

const Acomplishments = () => (
  <Section>
    <SectionDivider />
    <br />
    <SectionTitle>Education</SectionTitle>
    <SectionText>
      Nanyang Polytechnic <br />
      - Diploma in Business Enterprise IT (2017-2020)
    </SectionText>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.number}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
