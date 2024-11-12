import Button from '@/components/shared/Button/Button';
import styles from './Header.module.css';
import Logo from './Logo/Logo';
import Menu from './Menu/Menu';

const Header = () => {
	return (
		<div className={styles.header}>
			<div className="container">
				<div className={styles.row}>
					<Logo />
					<div className={styles.menu}>
						<Menu />
						<Button>Связаться</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
