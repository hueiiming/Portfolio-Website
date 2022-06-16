import React from 'react';
import { AiFillFileText, AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { Tooltip } from '@material-ui/core';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkItemA, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <Section id="contact">
      <SectionDivider />
      <br />
      <SectionTitle>Contact</SectionTitle>
      <FooterWrapper>
        <LinkList>
          <LinkColumn>
            <LinkTitle>Socials</LinkTitle>
            <LinkItem>
              <Tooltip title={<h2>Github</h2>} placement="bottom">
                <SocialIcons href="https://github.com/hueiiming/" target="_blank">
                  <AiFillGithub size="3rem" />
                </SocialIcons>
              </Tooltip>
              <Tooltip title={<h2>LinkedIn</h2>} placement="bottom">
                <SocialIcons href="https://www.linkedin.com/in/lim-huei-ming/" target="_blank">
                  <AiFillLinkedin size="3rem" />
                </SocialIcons>
              </Tooltip>
            </LinkItem>
          </LinkColumn>
          <LinkColumn>
            <LinkTitle>Resume</LinkTitle>
            <LinkItem>
              <Tooltip title={<h2>Resume</h2>} placement="bottom">
                <SocialIcons href="https://drive.google.com/file/d/1LqqaNsr2vqVm3g10cLDhjamg4ZitSjkD/view?usp=sharing" target="_blank">
                  <AiFillFileText size="3rem" />
                </SocialIcons>
              </Tooltip>
            </LinkItem>
          </LinkColumn>
          <LinkColumn>
            <LinkTitle>Email</LinkTitle>
            <LinkItemA href="mailto:limhueiming2016@gmail.com">limhueiming2016@gmail.com</LinkItemA>
          </LinkColumn>
        </LinkList>
        <SocialIconsContainer>
          <CompanyContainer>
            <Slogan>Always improving and learning</Slogan>
          </CompanyContainer>
        </SocialIconsContainer>
      </FooterWrapper>
    </Section>
  );
};

export default Footer;
