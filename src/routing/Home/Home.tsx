import Advantages from './blocks/Advantages/Advantages';
import Feedback from './blocks/Feedback/Feedback';
import Footer from './blocks/Footer/Footer';
import Header from './blocks/Header/Header';
import Main from './blocks/Main/Main';
import Plan from './blocks/Plan/Plan';
import Solution from './blocks/Solution/Solution';
import styles from './Home.module.css';

export default function HomePage() {
	return (
		<div className={styles.home}>
			<Header />
			<Main />
			<Advantages />
			<Plan />
			<Solution />
			<Feedback />
			<Footer />
		</div>
	);
}
