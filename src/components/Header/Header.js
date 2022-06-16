import Link from 'next/link';
import React from 'react';
import { AiFillCrown, AiFillFile, AiFillFilePdf, AiFillFileText, AiFillGithub, AiFillIdcard, AiFillInstagram, AiFillLinkedin, AiFillProfile } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';
import { Tooltip } from '@material-ui/core';
import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';
import { ImgResume } from '../../styles/GlobalComponents';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: "flex", alignItems: "center", color: "white", marginBottom: "20px" }}>
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
        <Link href="#tech">
          <NavLink>Skills</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#work">
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
          <AiFillFilePdf size="3rem" />
          {/* <ImgResume src='/images/resume.png' /> */}
        </SocialIcons>
      </Tooltip>
      <Tooltip title={<h1>Github</h1>}>
        <SocialIcons href="https://github.com/hueiiming/" target="_blank">
          <AiFillGithub size="3rem" />
        </SocialIcons>
      </Tooltip>
      <Tooltip title={<h1>LinkedIn</h1>}>
        <SocialIcons href="https://www.linkedin.com/in/lim-huei-ming/" target="_blank">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
      </Tooltip>
    </Div3>
  </Container>
);

export default Header;
