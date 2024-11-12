import Typography from '@/components/shared/Typography/Typography';
import styles from './Main.module.css';

const Main = () => {
	return (
		<div className={styles.main}>
			<div className="container">
				<div className={styles.row}>
					<Typography>
						готовое решение для{' '}
						<span className={styles.green}>гэмблинг-бизнеса</span>
					</Typography>
				</div>
				<Typography>
					Создание и запуск собственного продукта  больше не проблема для вашего
					гемблинг-бизнеса. Воспользуйтесь преимуществами готового
					бизнес-решения для онлайн-казино от{' '}
					<span className={styles.green}>“MoneySession”</span>
				</Typography>
				<Typography>
					Мы подготовим продукт с полностью оригинальным визуалом под ваш
					запрос. Поможем с арендой хостинга и доменного имени, а также с
					подключением платежных шлюзов, после запуска наши специалисты
					продолжат обслуживать систему, помогая с решением возникающих задач.
				</Typography>
			</div>
		</div>
	);
};

export default Main;
