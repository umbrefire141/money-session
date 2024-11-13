'use client';

import Button from '@/components/shared/Button/Button';
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
						<Button>Связаться</Button>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
