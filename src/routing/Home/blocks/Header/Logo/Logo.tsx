import logo from '@/assets/icons/logo.svg';
import Image from 'next/image';
import styles from './Logo.module.css';

const Logo = () => {
	return (
		<div className={styles.logo}>
			<Image
				src={logo}
				alt="Logo money session"
				width={undefined}
				height={undefined}
			/>
		</div>
	);
};

export default Logo;
