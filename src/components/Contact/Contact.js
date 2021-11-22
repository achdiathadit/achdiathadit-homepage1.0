import React from 'react';

import {
	Section,
	SectionDivider,
	SectionText,
	SectionTitle,
} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';

const Contact = () => (
	<Section nopadding id='contact'>
		<SectionDivider divider />
		<SectionTitle>Get In Touch</SectionTitle>
		<SectionText>
			I'm currently looking for new opportunities, either freelance or full-time
			jobs. <br />
			If you have a job offer, business needs, or just want to chat, feel free
			to contact me.
		</SectionText>
		<Button onClick={() => (window.location = 'mailto:achdiat.dev@gmail.com')}>
			Say Hi
		</Button>
	</Section>
);

export default Contact;
