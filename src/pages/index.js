import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';
import Hero from '../components/Hero/Hero';
import BgAnimation from '../components/BackgroundAnimation/BackgroundAnimation';
import Projects from '../components/Projects/Projects';
import TechStack from '../components/Technologies/Technologies';
import AboutMe from '../components/TimeLine/TimeLine';
import Contact from '../components/Contact/Contact';
// import Achievements from '../components/Accomplishments/Accomplishments';

const Home = () => {
	return (
		<Layout>
			<Section grid>
				<Hero />
				<BgAnimation />
			</Section>
			<AboutMe />
			<Projects />
			<TechStack />
			<Contact />
			{/* <Achievements /> */}
		</Layout>
	);
};

export default Home;
