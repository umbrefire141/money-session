import logoMobile from '@/assets/icons/logo-mobile.svg';
import logo from '@/assets/icons/logo.svg';
import Image from 'next/image';
import styles from './Logo.module.css';

const Logo = () => {
	return (
		<div className={styles.logo}>
			<Image
				src={logo}
				alt="Logo money session"
				width={262}
				height={74}
				className={styles.desktop}
			/>
			<Image
				src={logoMobile}
				alt="Logo money session"
				width={undefined}
				height={undefined}
				className={styles.mobile}
			/>
		</div>
	);
};

export default Logo;
