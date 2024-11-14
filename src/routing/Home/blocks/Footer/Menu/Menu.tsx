import Typography from '@/components/shared/Typography/Typography';
import Link from 'next/link';
import styles from './Menu.module.css';

const Menu = () => {
	return (
		<div className={styles.menu}>
			<Typography className={styles.title} weight="bold">
				Больше о нас
			</Typography>
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
	);
};

export default Menu;
