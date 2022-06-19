import React from 'react';
import { DiCode, DiFirebase, DiJenkins } from 'react-icons/di';
import { SiJava, SiJavascript, SiPython, SiPostgresql, SiTypescript, SiMysql, SiFirebase } from 'react-icons/si';
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
            Java, JavaScript, TypeScript, Python, SQL, ABAB
            <br /> <br />
            <SiJava size="2rem"></SiJava>
            &nbsp;&nbsp;
            <SiJavascript size="2rem"></SiJavascript>
            &nbsp;&nbsp;
            <SiTypescript size="2rem"></SiTypescript>
            &nbsp;&nbsp;
            <SiPython size="2rem"></SiPython>
            &nbsp;&nbsp;
            <SiPostgresql size="2rem"></SiPostgresql>
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
            <br /><br />
            <SiPostgresql size="2rem"></SiPostgresql>
            &nbsp;&nbsp;
            <SiMysql size="2rem"></SiMysql>
            &nbsp;&nbsp;
            <SiFirebase size="2rem"></SiFirebase>
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
