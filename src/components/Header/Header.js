import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai';
import {
	Container,
	Div1,
	Div2,
	Div3,
	NavLink,
	SocialIcons,
} from './HeaderStyles';

const Header = () => (
	<Container>
		<Div1>
			<Link href='/'>
				<NavLink>
					<Image src='/images/ah-logo-4.0-final.svg' height={40} width={40} />
				</NavLink>
			</Link>
		</Div1>
		<Div2>
			<li>
				<Link href='#projects'>
					<NavLink>Projects</NavLink>
				</Link>
			</li>
			<li>
				<Link href='#tech'>
					<NavLink>Tech Stack</NavLink>
				</Link>
			</li>
			<li>
				<Link href='#about'>
					<NavLink>About Me</NavLink>
				</Link>
			</li>
		</Div2>
		<Div3>
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
		</Div3>
	</Container>
);

export default Header;
