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
			Open to full-time roles and onsite relocation. Comfortable in fast-paced,
			client-facing, Agile environments. If you’d like to discuss opportunities or
			collaborate, reach out anytime.
		</SectionText>
		<Button onClick={() => (window.location = 'mailto:achdiat.dev@gmail.com')}>
			Say Hi
		</Button>
	</Section>
);

export default Contact;
