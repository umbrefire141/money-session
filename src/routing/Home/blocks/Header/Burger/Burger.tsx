import clsx from 'clsx';
import { IBurgerProps } from './Burger.interface';
import styles from './Burger.module.css';

const Burger = ({ menuIsActive, setMenuIsActive }: IBurgerProps) => {
	return (
		<button
			className={clsx(styles.burger, {
				[styles.active]: menuIsActive,
			})}
			onClick={() => setMenuIsActive(a => !a)}
		>
			<span></span>
		</button>
	);
};

export default Burger;
