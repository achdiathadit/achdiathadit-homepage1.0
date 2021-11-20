import React from 'react';
import { FaReact, FaFigma, FaDatabase } from 'react-icons/fa';
import {
	Section,
	SectionDivider,
	SectionText,
	SectionTitle,
} from '../../styles/GlobalComponents';
import {
	List,
	ListContainer,
	ListItem,
	ListParagraph,
	ListTitle,
} from './TechnologiesStyles';

const Technologies = () => (
	<Section>
		<SectionDivider divider />
		<SectionTitle>Tech Stack</SectionTitle>
		<SectionText>
			The magic of user experience and behind-the-scenes of the blockbuster web
			and apps lies here. Here are a few tech stack I’ve been working with
			recently:
		</SectionText>
		<List>
			<ListItem>
				<FaReact size='4rem' />
				<ListContainer>
					<ListTitle>Frontend</ListTitle>
					<ListParagraph>
						<li>React</li>
						<li>Nextjs</li>
						<li>Styled Components</li>
						<li>Bootstrap</li>
					</ListParagraph>
				</ListContainer>
			</ListItem>
			<ListItem>
				<FaDatabase size='4rem' />
				<ListContainer>
					<ListTitle>Backend</ListTitle>
					<ListParagraph>
						<li>Nodejs</li>
						<li>Express</li>
						<li>MongoDB</li>
						<li>REST API</li>
					</ListParagraph>
				</ListContainer>
			</ListItem>
			<ListItem>
				<FaFigma size='4rem' />
				<ListContainer>
					<ListTitle>UI/UX</ListTitle>
					<ListParagraph>
						<li>Figma</li>
						<li>GIMP</li>
						<li>Adobe Illustrator</li>
					</ListParagraph>
				</ListContainer>
			</ListItem>
		</List>
	</Section>
);

export default Technologies;
