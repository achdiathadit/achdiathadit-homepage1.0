import React from 'react';

import {
	Section,
	SectionSubTitle,
	SectionText,
	SectionTitle,
} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
	<Section row nopadding>
		<LeftSection>
			<SectionSubTitle>Frontend Engineer (React)</SectionSubTitle>
			<SectionTitle undersub main center>
				Achdiat Hadit Camil
			</SectionTitle>
			<SectionText>
				Frontend Engineer / Software Developer with 5+ years building scalable,
				business-impacting web apps across construction, property, and enterprise.
				Specialized in React, TypeScript, and frontend architecture with strong
				stakeholder communication from prior corporate leadership roles.
			</SectionText>
			<Button
				onClick={() => (window.location = 'mailto:achdiat.dev@gmail.com')}
			>
				Let's Talk
			</Button>
		</LeftSection>
	</Section>
);

export default Hero;
