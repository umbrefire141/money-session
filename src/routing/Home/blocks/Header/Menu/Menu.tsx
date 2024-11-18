import clsx from 'clsx';
import Link from 'next/link';
import { IMenuProps } from './Menu.interface';
import styles from './Menu.module.css';

const Menu = ({ menuIsActive }: IMenuProps) => {
	return (
		<nav
			className={clsx(styles.menu, {
				[styles.active]: menuIsActive,
			})}
		>
			<ul className={styles.list}>
				<li className={styles.item}>
					<Link href="#main">Главная</Link>
				</li>
				<li className={styles.item}>
					<Link href="#advantages">Преимущества работы с нами</Link>
				</li>
				<li className={styles.item}>
					<Link href="#solutions">Готовые решения</Link>
				</li>
				<li className={styles.item}>
					<Link href="#feedback">Контакты</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Menu;
