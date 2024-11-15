import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
	title: 'MoneySession',
	description:
		'готовое решение для гэмблинг-бизнеса. Создание и запуск собственного продукта  больше не проблема для вашего гемблинг-бизнеса. Воспользуйтесь преимуществами готового бизнес-решения для онлайн-казино от “MoneySession”',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ru">
			<body>{children}</body>
		</html>
	);
}
