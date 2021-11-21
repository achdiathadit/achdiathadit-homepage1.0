import styled from 'styled-components';

export const ImgContainer = styled.div`
	overflow: hidden;
	height: 230px;
	margin-bottom: 3rem;
	border-top-left-radius: 20px;
	border-top-right-radius: 20px;
	align-content: center;
`;

export const Img = styled.img`
	width: 100%;
	height: 100%;
	transform: scale(1.1);
	transition: 0.5s ease;
	object-fit: cover;
	&:hover {
		transform: scale(1);
		cursor: pointer;
	}
`;

export const GridContainer = styled.section`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
	padding: 3rem;
	place-items: center;
	column-gap: 2rem;
	row-gap: 3rem;
	@media ${(props) => props.theme.breakpoints.sm} {
		display: flex;
		flex-direction: column;
		padding: 2rem;
		padding-bottom: 0;
	}
`;
export const BlogCard = styled.div`
	align-self: stretch;
	border-radius: 20px;
	box-shadow: inset 0 -5px 5px #13adc7;
	text-align: center;
	width: 400px;
	@media ${(props) => props.theme.breakpoints.sm} {
		width: 100%;
	}
`;
export const TitleContent = styled.div`
	text-align: center;
	z-index: 20;
	width: 100%;
`;

export const HeaderThree = styled.h3`
	font-weight: 500;
	color: #13adc7;
	padding: 0.5rem 0;
	margin-bottom: 0;
	font-size: ${(props) => (props.title ? '3rem' : '2.5rem')};
`;

export const Hr = styled.hr`
	width: 90px;
	height: 3px;
	margin: 0 auto 2rem;
	border: 0;
	background: #13adc7;
`;

export const Intro = styled.div`
	width: 170px;
	margin: 0 auto;
	color: #cccccc;
	font-family: 'Droid Serif', serif;
	font-size: 13px;
	font-style: italic;
	line-height: 18px;
`;

export const CardInfo = styled.p`
	width: 100%;
	padding: 0 50px;
	color: #cccccc;
	font-style: 2rem;
	line-height: 24px;
	text-align: left;
	margin-bottom: 3rem;
	@media ${(props) => props.theme.breakpoints.sm} {
		padding: 0 50px;
	}
`;

export const UtilityList = styled.ul`
	list-style-type: none;
	padding: 0;
	display: flex;
	justify-content: center;
	margin: 0 1.5rem;
`;

export const ExternalLinks = styled.a`
	color: white;
	font-size: 1.6rem;
	padding: 1rem 1.5rem;
	transition: 0.3s;
	&:hover {
		color: #13adc7;
	}
`;

export const TagList = styled.ul`
	display: flex;
	justify-content: center;
	padding: 2rem;
	margin-bottom: 2rem;
`;
export const Tag = styled.li`
	background: #13adc7;
	border-radius: 10px;
	padding: 1rem 1.5rem;
	margin: 0 0.5rem 0;
	color: white;
	font-size: 1.5rem;
`;
