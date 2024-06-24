import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
    title: 'Saieki Kicks',
    description: 'Доставка обуви и одежды с Poizon',
};

const RootLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <html lang="ru">
            <body className={cn('min-h-screen bg-background font-sans antialiased', inter.variable)}>
                {children}
            </body>
        </html>
    );
}

export default RootLayout;
