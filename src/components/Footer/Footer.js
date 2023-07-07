import React from 'react';
import { AiFillFileText, AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { Tooltip } from '@material-ui/core';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkItemA, LinkList, LinkTitle, Slogan, SocialIcons, SocialIconsContainer } from './FooterStyles';
import { Resume, Github, Linkedin } from '../../constants/constants';

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
                <SocialIcons href={Github} target="_blank">
                  <AiFillGithub size="3rem" />
                </SocialIcons>
              </Tooltip>
              <Tooltip title={<h2>LinkedIn</h2>} placement="bottom">
                <SocialIcons href={Linkedin} target="_blank">
                  <AiFillLinkedin size="3rem" />
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
            <Slogan>Always Learning & Improving</Slogan>
          </CompanyContainer>
        </SocialIconsContainer>
      </FooterWrapper>
    </Section>
  );
};

export default Footer;
