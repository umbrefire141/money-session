import iconArchive from '@/assets/icons/archive.svg';
import iconEmail from '@/assets/icons/email.svg';
import iconHome from '@/assets/icons/home.svg';
import iconWork from '@/assets/icons/work.svg';
import ButtonLink from '@/components/shared/ButtonLink/ButtonLink';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '../Logo/Logo';
import { IMenuProps } from './Menu.interface';
import styles from './Menu.module.css';

const Menu = ({ menuIsActive, setMenuIsActive }: IMenuProps) => {
	const closeMenu = () => {
		if (!menuIsActive) {
			setMenuIsActive(true);
			return;
		}
		setMenuIsActive(false);
	};

	return (
		<nav
			className={clsx(styles.menu, {
				[styles.active]: menuIsActive,
			})}
		>
			<div>
				<div className={styles.sb}>
					<button onClick={() => closeMenu()}>
						<svg
							width="17"
							height="16"
							viewBox="0 0 17 16"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M0.292892 7.29289C-0.0976315 7.68342 -0.0976315 8.31658 0.292892 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292892 7.29289ZM17 7L1 7V9L17 9V7Z"
								fill="white"
							/>
						</svg>
					</button>
					<Logo />
				</div>
				<ul className={styles.list}>
					<li className={styles.item}>
						<Link href="#main" onClick={() => closeMenu()}>
							<Image
								src={iconHome}
								alt=""
								width={24}
								height={24}
								className={styles.mbIcon}
							/>
							<span> Главная</span>
						</Link>
					</li>
					<li className={styles.item}>
						<Link href="#advantages" onClick={() => closeMenu()}>
							<Image
								src={iconWork}
								alt=""
								width={24}
								height={24}
								className={styles.mbIcon}
							/>
							<span>Преимущества работы с нами</span>
						</Link>
					</li>
					<li className={styles.item}>
						<Link href="#solutions" onClick={() => closeMenu()}>
							{' '}
							<Image
								src={iconArchive}
								alt=""
								width={24}
								height={24}
								className={styles.mbIcon}
							/>
							<span>Готовые решения</span>
						</Link>
					</li>
					<li className={styles.item}>
						<Link href="#feedback" onClick={() => closeMenu()}>
							{' '}
							<Image
								src={iconEmail}
								alt=""
								width={24}
								height={24}
								className={styles.mbIcon}
							/>
							<span>Контакты</span>
						</Link>
					</li>
				</ul>
				<ButtonLink
					href="#feedback"
					className={styles.mBtn}
					onClick={() => closeMenu()}
				>
					Связаться
				</ButtonLink>
			</div>
		</nav>
	);
};

export default Menu;
