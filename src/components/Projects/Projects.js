import React from 'react';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

import {
	BlogCard,
	CardInfo,
	ExternalLinks,
	GridContainer,
	HeaderThree,
	Hr,
	Tag,
	TagList,
	TitleContent,
	UtilityList,
	Img,
	ImgContainer,
} from './ProjectsStyles';
import {
	Section,
	SectionDivider,
	SectionTitle,
} from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
	<Section nopadding id='projects'>
		<SectionDivider divider />
		<SectionTitle>Projects</SectionTitle>
		<GridContainer>
			{projects.map(
				({ title, description, image, tags, source, visit, id }) => (
					<BlogCard key={id}>
						<ImgContainer>
							<Img src={image} />
						</ImgContainer>
						<TitleContent>
							<HeaderThree>{title}</HeaderThree>
						</TitleContent>
						<UtilityList>
							<ExternalLinks href={visit}>
								<FiExternalLink size='2rem' />
							</ExternalLinks>
							<ExternalLinks href={source}>
								<FiGithub size='2rem' />
							</ExternalLinks>
						</UtilityList>
						<CardInfo>{description}</CardInfo>
						<Hr />
						<TitleContent>Stack</TitleContent>
						<TagList>
							{tags.map((tag, i) => (
								<Tag key={1}>{tag}</Tag>
							))}
						</TagList>
					</BlogCard>
				)
			)}
		</GridContainer>
	</Section>
);

export default Projects;
