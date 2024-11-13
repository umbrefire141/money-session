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
