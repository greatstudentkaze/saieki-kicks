import { NextPage } from 'next';
import { cn } from '@/lib/utils';

const OrderPage: NextPage = () => {
    return (
        <main>
            <h1>Заказ #{String(538902432).replace(/(\d{3})(\d{3})(\d{3})/, '$1-$2-$3')}</h1>
            <p>Ожидаемая дата доставки в Санкт-Петербург {new Date(2024, 6, 14).toLocaleDateString('ru-RU')}</p>

            <ol className="mt-4">
                {[
                    { timestamp: new Date(2024, 6, 14, 12, 12).getTime(), text: 'Оплачен' },
                    { timestamp: new Date(2024, 6, 18, 14, 35).getTime(), text: 'Заказан на Poizon' },
                    { timestamp: new Date(2024, 6, 21, 10, 0).getTime(), text: 'На доставке до склада в Китае' },
                    { timestamp: new Date(2024, 6, 25, 16, 50).getTime(), text: 'Таможня' },
                    { timestamp: new Date(2024, 6, 29, 8, 15).getTime(), text: 'На доставке в Россию' },
                    { timestamp: new Date(2024, 7, 3, 13, 20).getTime(), text: 'На доставке в Санкт-Петербург' },
                    { timestamp: new Date(2024, 7, 7, 9, 45).getTime(), text: 'Доставлен' },
                ].map(({ text, timestamp }) => {
                    const dateObj = new Date(timestamp);
                    const date = dateObj.toLocaleDateString('ru-RU', { day: 'numeric', month: 'numeric' });
                    const time = dateObj.toLocaleTimeString('ru-RU', { hour: 'numeric', minute: 'numeric' });

                    return (
                        <li
                            className={cn(
                                'relative pl-4 py-2',
                                'before:block before:absolute before:bg-foreground before:w-2 before:h-2 before:rounded-full before:top-4 before:left-0',
                                'last:after:hidden after:block after:absolute after:bg-foreground after:w-0.5 after:h-16 after:top-4 after:left-[3px]',
                            )}
                            key={text}
                        >
                            {text}

                            <p className="text-sm">{date} {time}</p>
                        </li>
                    );
                })}
            </ol>

        </main>
    );
};

export default OrderPage;
