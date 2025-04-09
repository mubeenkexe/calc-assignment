import Hero from '@/components/Hero';
import ConverterList from '@/components/ConverterList';
import WhyChooseUs from '@/components/WhyChooseUs';

export default function Home() {
    return (
        <main className="min-h-screen bg-white text-gray-900">
            <Hero />
            <ConverterList />
            <WhyChooseUs />
        </main>
    );
}
