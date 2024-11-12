import Button from '@/components/shared/Button/Button';
import Typography from '@/components/shared/Typography/Typography';
import Image from 'next/image';
import styles from './Solution.module.css';

import img1 from '@/assets/images/solutions/a-1.png';
import img2 from '@/assets/images/solutions/a-2.png';

const Solution = () => {
	return (
		<div className={styles.solution}>
			<div className="container">
				<Typography
					className={styles.title}
					TypeElement="h2"
					family="exo"
					size="3xl"
					transform="uppercase"
					weight="bold"
				>
					Готовые решения
				</Typography>
				<div className={styles.row}>
					<div className={styles.card}>
						<Image
							src={img1}
							alt=""
							width={undefined}
							height={undefined}
							className={styles.card__img}
						/>
						<div className={styles.card__content}>
							<div>
								<Typography
									className={styles.card__title}
									TypeElement="h3"
									family="exo"
									size="xl"
									transform="uppercase"
									weight="bold"
								>
									Онлайн-казино
								</Typography>
								<Typography size="sm">
									Веб-сайт представляет собой онлайн-казино с набором игр от
									провайдеров, доступ к которым осуществляется через веб-сервис,
									а также включает функции поддержки и создания аккаунта
								</Typography>
							</div>
							<Button variant="outline" className={styles.card__btn} size="lg">
								Стоимость от 5000$
							</Button>
						</div>
					</div>
					<div className={styles.card}>
						<Image
							src={img2}
							alt=""
							width={undefined}
							height={undefined}
							className={styles.card__img}
						/>
						<div className={styles.card__content}>
							<div>
								<Typography
									className={styles.card__title}
									TypeElement="h3"
									family="exo"
									size="xl"
									transform="uppercase"
									weight="bold"
								>
									Игра в жанре “Crash”
								</Typography>
								<Typography size="sm">
									Веб приложение представляет из себя игру в жанре Crash Game.
									Включает в себя 4х-этапную этапную анимацию:
									{''}
									● Старт (прием ставок) <br />
									● Коэффициент 1-5 x <br />
									● Коэффициент 5-20 x<br /> ● Суперигра
								</Typography>
							</div>
							<Button variant="outline" className={styles.card__btn} size="lg">
								Стоимость от 1500$
							</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Solution;
