import Header from './blocks/Header/Header';
import Main from './blocks/Main/Main';
import styles from './Home.module.css';

export default function HomePage() {
	return (
		<div className={styles.home}>
			<Header />
			<Main />
		</div>
	);
}
