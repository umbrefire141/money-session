import iconArchive from '@/assets/icons/archive.svg';
import iconEmail from '@/assets/icons/email.svg';
import iconHome from '@/assets/icons/home.svg';
import iconWork from '@/assets/icons/work.svg';
import ButtonLink from '@/components/shared/ButtonLink/ButtonLink';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { IMenuProps } from './Menu.interface';
import styles from './Menu.module.css';

const Menu = ({ menuIsActive, setMenuIsActive }: IMenuProps) => {
	const closeMenu = () => {
		if (!menuIsActive) {
			setMenuIsActive(true);
			document.body.style.overflow = 'hidden';
			return;
		}
		setMenuIsActive(false);
		document.body.style.overflow = '';
	};

	return (
		<nav
			className={clsx(styles.menu, {
				[styles.active]: menuIsActive,
			})}
		>
			<div>
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
