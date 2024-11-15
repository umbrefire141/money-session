import img1 from '@/assets/images/advantages/a-1.png';
import img2 from '@/assets/images/advantages/a-2.png';
import img3 from '@/assets/images/advantages/a-3.png';
import img4 from '@/assets/images/advantages/a-4.png';
import img5 from '@/assets/images/advantages/a-5.png';
import img6 from '@/assets/images/advantages/a-6.png';
import mImg1 from '@/assets/images/advantages/m-a-1.png';
import mImg2 from '@/assets/images/advantages/m-a-2.png';
import mImg3 from '@/assets/images/advantages/m-a-3.png';
import mImg4 from '@/assets/images/advantages/m-a-4.png';
import mImg5 from '@/assets/images/advantages/m-a-5.png';
import mImg6 from '@/assets/images/advantages/m-a-6.png';

export const advantages: IAdvantage[] = [
	{
		id: 1,
		img: {
			url: img1,
			mobileUrl: mImg1,
		},
		title: 'Компетентность',
		text: 'Наша компания обладает обширным опытом в разработке онлайн-казино, мы предлагаем инновационные решения и высококачественную продукцию для гэмблинг-бизнеса, которые успешно показали себя в работе',
	},
	{
		id: 2,
		img: {
			right: -12,
			url: img2,
			mobileUrl: mImg2,
		},
		title: 'Оперативность',
		text: 'Благодаря оптимизированным процессам, мы обеспечиваем запуск проектов в первый месяц, что позволяет нашим клиентам оперативно выходить на рынок.',
	},
	{
		id: 3,
		img: {
			url: img3,
			mobileUrl: mImg3,
		},
		title: 'Поддержка',
		text: 'Наша компания ориентирована на долгосрочное сотрудничество, обеспечивая клиентов поддержкой на всех этапах реализации проекта для достижения совместного успеха',
	},
	{
		id: 4,
		img: {
			url: img4,
			mobileUrl: mImg4,
		},
		title: 'Вариативность',
		text: 'Мы предлагаем широкий спектр решений в разработке гэмблинг-продуктов, учитывая уникальные пожелания наших партнеров и обеспечивая возможность выбора среди множества опций',
	},
	{
		id: 5,
		img: {
			url: img5,
			mobileUrl: mImg5,
		},
		title: 'Готовые решения',
		text: 'Мы располагаем широким спектром шаблонов для онлайн-казино, которые позволяют нашим клиентам быстро и эффективно запустить уникальные и привлекательные игровые платформы, соответствующие их бренду и требованиям рынка',
	},
	{
		id: 6,
		img: {
			url: img6,
			mobileUrl: mImg6,
		},
		title: 'Узнать подробнее',
	},
];

interface IAdvantage {
	id: number;
	img: {
		bottom?: number;
		right?: number;
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		url: any;
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		mobileUrl: any;
	};
	title: string;
	text?: string;
}
