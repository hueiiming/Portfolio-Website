import React from 'react';
import { DiCode, DiFirebase, DiJenkins } from 'react-icons/di';
import {
  SiJava,
  SiJavascript,
  SiPython,
  SiPostgresql,
  SiTypescript,
  SiMysql,
  SiFirebase,
  SiJenkins,
  SiGit,
  SiPhp,
  SiSpring,
  SiScala, SiGo
} from 'react-icons/si';
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
            Java, Python, Go(Golang), Scala, JavaScript, TypeScript, SQL, PHP
            <br /> <br />
            <SiJava size="2rem"></SiJava>
            &nbsp;&nbsp;
            <SiPython size="2rem"></SiPython>
            &nbsp;&nbsp;
            <SiGo></SiGo>
            &nbsp;&nbsp;
            <SiScala></SiScala>
            &nbsp;&nbsp;
            <SiJavascript size="2rem"></SiJavascript>
            &nbsp;&nbsp;
            <SiTypescript size="2rem"></SiTypescript>
            &nbsp;&nbsp;
            <SiPostgresql size="2rem"></SiPostgresql>
            &nbsp;&nbsp;
            <SiPhp size="2rem"></SiPhp>
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem"></DiFirebase>
        <ListContainer>
          <ListTitle>Databases</ListTitle>
          <ListParagraph>
            Experience with <br />
            PostgreSQL, MySQL, Google Firebase 
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
            Jenkins, Git, Spring MVC, JBehave, REST APIs
            <br /><br /><br />
            <SiJenkins size="2rem"></SiJenkins>
            &nbsp;&nbsp;
            <SiGit size="2rem"></SiGit>
            &nbsp;&nbsp;
            <SiSpring size="2rem"></SiSpring>
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
