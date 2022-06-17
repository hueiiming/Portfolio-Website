import React from 'react';
import { DiCode, DiFirebase, DiJenkins } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="skills">
    <SectionDivider />
    <br />
    <SectionTitle>Skills</SectionTitle>
    <SectionText>
      I've worked with a couple of companies as a Software Engineer and a Web Developer where I've honed my programming skills and knowledge 
    </SectionText>
    <List>
      <ListItem>
        <DiCode size="3rem"></DiCode>
        <ListContainer>
          <ListTitle>Languages</ListTitle>
          <ListParagraph>
            Experience with <br />
            Java, JavaScript, Python, TypeScript, SQL, ABAB
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem"></DiFirebase>
        <ListContainer>
          <ListTitle>Databases</ListTitle>
          <ListParagraph>
            Experience with <br />
            PostgreSQL, DBeaver, MySQL, Google Firebase 
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiJenkins size="3rem"></DiJenkins>
        <ListContainer>
          <ListTitle>Tools</ListTitle>
          <ListParagraph>
            Experience with <br />
            JBehave, REST APIs, Jenkins
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
