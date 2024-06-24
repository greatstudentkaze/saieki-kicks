import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

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
            <body className={cn('min-h-dvh bg-background font-sans antialiased cursor-default', inter.variable)}>
                <div className={cn('px-8 py-12 md:p-24', 'flex min-h-screen flex-col items-center gap-24')}>
                    <header>
                        <Link className="relative block text-center" href="/">
                            <span className="absolute w-full -bottom-1.5 -right-1.5 text-poizon text-6xl font-black">SAIEKI KICKS</span>
                            <span className="relative text-6xl font-black">SAIEKI KICKS</span>
                        </Link>
                    </header>

                    {children}

                    <footer className="mt-auto flex items-center">
                        <Button variant="link" asChild>
                            <Link href="https://t.me/poizon_memes" target="_blank"
                                  rel="noopener noreferrer">@poizon_memes</Link>
                        </Button>
                    </footer>
                </div>
            </body>
        </html>
    );
}

export default RootLayout;
