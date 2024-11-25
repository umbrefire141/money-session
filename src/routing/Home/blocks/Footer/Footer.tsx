import Contacts from './Contacts/Contacts';
import styles from './Footer.module.css';
import Logo from './Logo/Logo';

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className="container">
				<div className={styles.top}>
					<Logo />
					<Contacts />
				</div>
				<p className={styles.copyright}>
					© MoneySession 2024. Все права защищены
				</p>
			</div>
		</footer>
	);
};

export default Footer;
