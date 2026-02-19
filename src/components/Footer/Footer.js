import React from 'react';
import { AiFillGithub, AiFillYoutube, AiFillLinkedin } from 'react-icons/ai';
import { SocialIcons } from '../Header/HeaderStyles';
import {
	CompanyContainer,
	FooterWrapper,
	LinkColumn,
	LinkItem,
	LinkList,
	LinkTitle,
	Slogan,
	SocialContainer,
	SocialIconsContainer,
} from './FooterStyles';

const Footer = () => {
	return (
		<FooterWrapper>
			<LinkList>
				{/* Phone removed by request */}
				<LinkColumn>
					<LinkTitle>Email</LinkTitle>
					<LinkItem href='mailto: achdiat.dev@gmail.com'>
						achdiat.dev@gmail.com
					</LinkItem>
				</LinkColumn>
			</LinkList>
			<SocialIconsContainer>
				<CompanyContainer>
					<Slogan>© 2026 Achdiat Hadit Camil. All rights reserved.</Slogan>
				</CompanyContainer>
				<SocialContainer>
					<SocialIcons href='https://github.com/achdiathadit' target='_blank'>
						<AiFillGithub size='3rem' />
					</SocialIcons>
					<SocialIcons
						href='https://www.linkedin.com/in/achdiat-hadit/'
						target='_blank'
					>
						<AiFillLinkedin size='3rem' />
					</SocialIcons>
					<SocialIcons
						href='https://www.youtube.com/channel/UC99tWCN_0aIB6E0sCKB8OoA'
						target='_blank'
					>
						<AiFillYoutube size='3rem' />
					</SocialIcons>
				</SocialContainer>
			</SocialIconsContainer>
		</FooterWrapper>
	);
};

export default Footer;
