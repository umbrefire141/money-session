import Link from 'next/link';
import styles from './Menu.module.css';

const Menu = () => {
	return (
		<div className={styles.menu}>
			<div className={styles.title}>
				<nav className={styles.nav}>
					<ul className={styles.list}>
						<li className={styles.item}>
							<Link href="/">Блог</Link>
						</li>
						<li className={styles.item}>
							<Link href="/">Награды</Link>
						</li>
						<li className={styles.item}>
							<Link href="/">Сертификаты</Link>
						</li>
					</ul>
					<ul className={styles.list}>
						<li className={styles.item}>
							<Link href="/">Партнеры</Link>
						</li>
						<li className={styles.item}>
							<Link href="/">
								Политика <br /> конфиденциальности
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	);
};

export default Menu;
