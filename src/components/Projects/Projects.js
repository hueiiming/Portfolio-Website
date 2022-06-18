import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const projectsDemo = [{
  title: 'Project 1',
  description: 'This is my project 1'
},{
  title: 'Project 2',
  description: 'This is my project 2'
},{
  title: 'Project 3',
  description: 'This is my project 3'
}];

const Projects = () => (
  <Section id="projects">
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {projects.map(({ id, image, title, description, tags, source,  visit }) => (
        <BlogCard key={id}>
            <Img src={image} />
            <TitleContent>
              <HeaderThree title="true" >{title}</HeaderThree>
              <Hr />
            </TitleContent>
            <CardInfo>{description}</CardInfo>
            <br />
            <div>
              <TitleContent>Technologies used:</TitleContent>
              <TagList>
                {tags.map((tag, i) => (
                <Tag key={i}>{tag}</Tag>
                ))}
              </TagList>
            </div>
            <UtilityList>
              <ExternalLinks href={visit} target="_blank">Code</ExternalLinks>
              <ExternalLinks href={source} target="_blank">Source</ExternalLinks>

            </UtilityList>
        </BlogCard>

      ))}
    </GridContainer>
  </Section>
);

export default Projects;