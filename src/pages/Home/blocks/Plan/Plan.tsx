import Typography from '@/components/shared/Typography/Typography';
import Card from './Card/Card';
import styles from './Plan.module.css';
import { plans } from './plans.data';

const Plan = () => {
	return (
		<div className={styles.plan}>
			<div className="container">
				<Typography
					TypeElement="h2"
					className={styles.title}
					family="exo"
					size="3xl"
					weight="bold"
					transform="uppercase"
				>
					План запуска проекта
				</Typography>
				<div className={styles.grid}>
					{plans.map(plan => (
						<Card
							key={plan.id}
							id={plan.id}
							img={plan.img}
							title={plan.title}
							text={plan.text}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default Plan;
