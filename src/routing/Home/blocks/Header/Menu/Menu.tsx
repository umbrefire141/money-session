import Link from 'next/link';
import styles from './Menu.module.css';

const Menu = () => {
	return (
		<nav className={styles.menu}>
			<ul className={styles.list}>
				<li className={styles.item}>
					<Link href="/">Главная</Link>
				</li>
				<li className={styles.item}>
					<Link href="/">Преимущества работы с нами</Link>
				</li>
				<li className={styles.item}>
					<Link href="/">Готовые решения</Link>
				</li>
				<li className={styles.item}>
					<Link href="/">Контакты</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Menu;
