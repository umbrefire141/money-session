import Typography from '@/components/shared/Typography/Typography';
import { plans } from '@/data/plans.data';
import Card from './Card/Card';
import styles from './Plan.module.css';

const Plan = () => {
	return (
		<div className={styles.plan}>
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
	);
};

export default Plan;
