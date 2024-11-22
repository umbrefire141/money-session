import bgMain2 from '@/assets/images/bg-main-2.png';
import blurImage from '@/assets/images/blur.svg';
import bgMain1 from '@/assets/images/lines.svg';
import img from '@/assets/images/money-fly.svg';
import Typography from '@/components/shared/Typography/Typography';
import clsx from 'clsx';
import Image from 'next/image';
import styles from './Main.module.css';

const Main = () => {
	return (
		<>
			<Image
				src={blurImage}
				alt=""
				width={undefined}
				height={undefined}
				className={styles.blurImage}
			/>
			<Image
				src={bgMain1}
				alt=""
				width={undefined}
				height={undefined}
				className={styles.bgMain1}
			/>
			<Image
				src={bgMain2}
				alt=""
				width={undefined}
				height={undefined}
				className={styles.bgMain2}
			/>
			<div className={styles.main} id="main">
				<div className={clsx('container', styles.container)}>
					<div className={styles.content}>
						<Typography
							family="exo"
							size="4xl"
							TypeElement="h1"
							weight="bold"
							transform="uppercase"
							className={styles.title}
						>
							готовое решение <br /> для
							<span className={styles.green}> гэмблинг-бизнеса</span>
						</Typography>
						<Typography size="lg" className={styles.info}>
							Создание и запуск собственного продукта  больше не проблема для
							вашего гемблинг-бизнеса. Воспользуйтесь преимуществами готового
							бизнес-решения для онлайн-казино от{' '}
							<span className={styles.green}>“MoneySession”</span>
						</Typography>
						<Typography color="gray">
							Мы подготовим продукт с полностью оригинальным визуалом под ваш
							запрос. Поможем с арендой хостинга и доменного имени, а также с
							подключением платежных шлюзов, после запуска наши специалисты
							продолжат обслуживать систему, помогая с решением возникающих
							задач.
						</Typography>
					</div>
					<Image
						src={img}
						alt=""
						width={904}
						height={708}
						className={styles.img}
					/>
				</div>
			</div>
		</>
	);
};

export default Main;
