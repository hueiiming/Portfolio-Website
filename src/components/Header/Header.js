import Link from 'next/link';
import React from 'react';
import { AiFillFileText, AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';
import { Tooltip } from '@material-ui/core';
import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: "flex", alignItems: "center", color: "white", marginBottom: "2px" }}>
          <DiCssdeck size="3rem" /> <Span>Portfolio</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
        <li>
          <Link href="#projects">
            <NavLink>Projects</NavLink>
          </Link>
        </li>
        <li>
          <Link href="#skills">
            <NavLink>Skills</NavLink>
          </Link>
        </li>
        <li>
          <Link href="#exp">
            <NavLink>Experience</NavLink>
          </Link>
        </li>
        <li>
          <Link href="#contact">
            <NavLink>Contact</NavLink>
          </Link>
        </li>
    </Div2>
    <Div3>
      <Tooltip title={<h1>Resume</h1>}>
        <SocialIcons href="https://drive.google.com/file/d/1LqqaNsr2vqVm3g10cLDhjamg4ZitSjkD/view?usp=sharing" target="_blank">
          <AiFillFileText size="3rem" />
          {/* <ImgResume src='/images/resume.png' /> */}
        </SocialIcons>
      </Tooltip>
      <Tooltip title={<h1>Github</h1>}>
        <SocialIcons href="https://github.com/hueiiming/" target="_blank">
          <AiFillGithub style={{cursor: "pointer"}} size="3rem" />
        </SocialIcons>
      </Tooltip>
      <Tooltip title={<h1>LinkedIn</h1>}>
        <SocialIcons href="https://www.linkedin.com/in/lim-huei-ming/" target="_blank">
          <AiFillLinkedin style={{cursor: "pointer"}} size="3rem" />
        </SocialIcons>
      </Tooltip>
    </Div3>
  </Container>
);

export default Header;
