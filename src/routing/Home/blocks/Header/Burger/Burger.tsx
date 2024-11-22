import clsx from 'clsx';
import { IBurgerProps } from './Burger.interface';
import styles from './Burger.module.css';

const Burger = ({ menuIsActive, setMenuIsActive }: IBurgerProps) => {
	return (
		<button
			className={clsx(styles.burger, {
				[styles.active]: menuIsActive,
			})}
			onClick={() => {
				if (!menuIsActive) {
					setMenuIsActive(true);
					document.body.style.overflow = 'hidden';
					return;
				}
				setMenuIsActive(false);
				document.body.style.overflow = '';
			}}
		>
			<span></span>
		</button>
	);
};

export default Burger;
