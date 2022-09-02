import React from 'react';

import { Section, SectionDivider, SectionTitle, SectionText } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const dataSmu = [

];
const dataNyp = [
  { number: '1st', text: 'iCodeiTell Competition'},
  { number: 'iPREP', text: 'Industry Preparation for Pre-graduate'},
  { number: 'SAP Intern', text: 'Final year Software Engineer Internship'},
  { number: 'Director\'\s List', text: 'Semester 1 2017', }
];

const Acomplishments = () => (
  <Section>
    <SectionDivider />
    <br />
    <SectionTitle>Education</SectionTitle>
    <SectionText>
      Singapore Management University <br />
      - Bachelor of Science in Software Engineering (2022-2026)
    </SectionText>
    <Boxes>
      {dataSmu.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.number}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
    <SectionText>
      Nanyang Polytechnic <br />
      - Diploma in Business Enterprise IT (2017-2020)
    </SectionText>
    <Boxes>
      {dataNyp.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.number}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
