import React from 'react';

import {
	Section,
	SectionSubTitle,
	SectionText,
	SectionTitle,
} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
	<Section row nopadding>
		<LeftSection>
			<SectionSubTitle>Hello there, my name is</SectionSubTitle>
			<SectionTitle undersub center>
				Achdiat Hadit.
			</SectionTitle>
			<SectionText>
				I'm a former corporate strategist who loves coding and design swerved to
				pursue his passion to become a professional full-stack web developer. I
				also enjoy teaching and building things.
			</SectionText>
		</LeftSection>
	</Section>
);

export default Hero;
