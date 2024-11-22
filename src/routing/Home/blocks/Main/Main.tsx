import bgMain from '@/assets/images/bg-main.png';
import blurImage from '@/assets/images/blur.png';
import img from '@/assets/images/money-fly.svg';
import Typography from '@/components/shared/Typography/Typography';
import clsx from 'clsx';
import Image from 'next/image';
import styles from './Main.module.css';

const Main = () => {
	return (
		<>
			<Image
				src={bgMain}
				alt=""
				width={undefined}
				height={undefined}
				className={styles.bgMain}
			/>
			<Image
				src={blurImage}
				alt=""
				width={undefined}
				height={undefined}
				className={styles.blurImage}
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
