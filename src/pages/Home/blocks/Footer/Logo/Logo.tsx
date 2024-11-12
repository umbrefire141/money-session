import logo from '@/assets/icons/logo.svg';
import Image from 'next/image';
import styles from './Logo.module.css';

const Logo = () => {
	return (
		<div className={styles.logo}>
			<Image src={logo} alt="Logo money session" width={262} height={74} />
		</div>
	);
};

export default Logo;
