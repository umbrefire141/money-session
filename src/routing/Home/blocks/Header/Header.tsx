'use client';

import ButtonLink from '@/components/shared/ButtonLink/ButtonLink';
import { useState } from 'react';
import Burger from './Burger/Burger';
import styles from './Header.module.css';
import Logo from './Logo/Logo';
import Menu from './Menu/Menu';

const Header = () => {
	const [menuIsActive, setMenuIsActive] = useState(false);

	return (
		<header className={styles.header}>
			<div className="container">
				<div className={styles.row}>
					<div className={styles.firstItem}>
						<Burger
							menuIsActive={menuIsActive}
							setMenuIsActive={setMenuIsActive}
						/>
						<Logo />
					</div>
					<div className={styles.menu}>
						<Menu menuIsActive={menuIsActive} />
						<ButtonLink href="#feedback" className={styles.btn}>
							Связаться
						</ButtonLink>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
