import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
	title: 'Money Session',
	description: 'готовое решение для гэмблинг-бизнеса',
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
