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
	SectionText,
	SectionTitle,
} from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
	<Section nopadding id='projects'>
		<SectionDivider divider />
		<SectionTitle>Selected Projects</SectionTitle>
		<SectionText>
			A curated selection highlighting React/Next.js development, performance,
			and UI engineering.
		</SectionText>
		<GridContainer>
			{projects.map(
				({ title, description, image, tags, source, visit, id }) => (
					<BlogCard key={id}>
						<ImgContainer>
							<a href={visit} target='_blank'>
								<Img src={image} />
							</a>
						</ImgContainer>
						<TitleContent>
							<HeaderThree>{title}</HeaderThree>
						</TitleContent>
						<UtilityList>
							<ExternalLinks href={visit} target='_blank'>
								<FiExternalLink size='2rem' />
							</ExternalLinks>
							<ExternalLinks href={source} target='_blank'>
								<FiGithub size='2rem' />
							</ExternalLinks>
						</UtilityList>
						<CardInfo>{description}</CardInfo>
						<Hr />
						<TitleContent>Stack</TitleContent>
                        <TagList>
                            {tags.map((tag, i) => (
                                <Tag key={i}>{tag}</Tag>
                            ))}
                        </TagList>
					</BlogCard>
				)
			)}
		</GridContainer>
	</Section>
);

export default Projects;
