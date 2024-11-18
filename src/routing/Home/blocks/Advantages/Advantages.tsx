import Typography from '@/components/shared/Typography/Typography';
import { advantages } from '@/data/advantages.data';
import styles from './Advantages.module.css';
import Card from './Card/Card';

const Advantages = () => {
	return (
		<div className={styles.advantages} id="advantages">
			<div className="container">
				<Typography
					className={styles.title}
					TypeElement="h2"
					size="3xl"
					family="exo"
					weight="bold"
					transform="uppercase"
				>
					преимущества
				</Typography>
				<div className={styles.grid}>
					{advantages.map(advantage => (
						<Card
							key={advantage.id}
							img={advantage.img}
							title={advantage.title}
							text={advantage.text}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default Advantages;
