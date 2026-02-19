import React from 'react';
import { FaReact, FaFigma, FaDatabase, FaCheckCircle, FaTools, FaUsers } from 'react-icons/fa';
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
	<Section id='tech'>
		<SectionDivider divider />
		<SectionTitle>Core Skills</SectionTitle>
		<SectionText>
			Core capabilities for building modern, scalable frontends. Below are the
			tools, libraries, and practices I use most often.
		</SectionText>
		<List>
			<ListItem>
				<FaReact size='4rem' />
				<ListContainer>
					<ListTitle>Frontend</ListTitle>
					<ListParagraph>
						<li>React, Next.js, React Native</li>
						<li>TypeScript, JavaScript (ES6+)</li>
						<li>HTML5, CSS3</li>
					</ListParagraph>
				</ListContainer>
			</ListItem>
			<ListItem>
				<FaDatabase size='4rem' />
				<ListContainer>
					<ListTitle>State & Data</ListTitle>
					<ListParagraph>
						<li>Redux, Context API</li>
						<li>Axios</li>
					</ListParagraph>
				</ListContainer>
			</ListItem>
			<ListItem>
				<FaFigma size='4rem' />
				<ListContainer>
					<ListTitle>UI & Styling</ListTitle>
					<ListParagraph>
						<li>Tailwind CSS, Material UI, Ant Design</li>
						<li>Sass/SCSS, Styled Components</li>
					</ListParagraph>
				</ListContainer>
			</ListItem>
			<ListItem>
				<FaCheckCircle size='4rem' />
				<ListContainer>
					<ListTitle>Testing & Quality</ListTitle>
					<ListParagraph>
						<li>Unit Testing, Debugging</li>
						<li>Performance Optimization</li>
					</ListParagraph>
				</ListContainer>
			</ListItem>
			<ListItem>
				<FaTools size='4rem' />
				<ListContainer>
					<ListTitle>Tooling & CI/CD</ListTitle>
					<ListParagraph>
						<li>Git, Jenkins</li>
						<li>Webpack (basic), Agile/Scrum</li>
					</ListParagraph>
				</ListContainer>
			</ListItem>
			<ListItem>
				<FaUsers size='4rem' />
				<ListContainer>
					<ListTitle>Design & Collaboration</ListTitle>
					<ListParagraph>
						<li>Figma, Design Systems</li>
						<li>Cross-team Communication</li>
					</ListParagraph>
				</ListContainer>
			</ListItem>
		</List>
	</Section>
);

export default Technologies;
