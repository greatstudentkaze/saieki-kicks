import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { redirect } from 'next/navigation';

// The shipment number you entered is invalid. Please check the details you have entered.

const Home = () => {
    async function find(formData: FormData) {
        'use server'

        const track = formData.get('track');
        if (!track) {
            redirect('/order/not-found');
        }

        redirect(`/order?track=${track}`);
    }

    return (
        <main className="contents">
            <form className="flex w-full max-w-sm items-center space-x-2" action={find} autoComplete="off">
                <Input type="text" name="track" placeholder="Введите номер отправления"/>
                <Button type="submit">Найти</Button>
            </form>
        </main>
    );
};

export default Home;
