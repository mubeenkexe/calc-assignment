import { IoTimeOutline } from 'react-icons/io5';
import ConverterCard from './ConverterCard';

import { BiMath } from 'react-icons/bi';
import { BsCalendarDate } from 'react-icons/bs';

const converters = [
    {
        title: '⏱️ Time Converter',
        description: 'Convert seconds, minutes, hours, days, and more.',
        href: '/convert/time',
        icon: <IoTimeOutline size={26} color="blue" />,
        color: 'bg-blue-50/50',
        bgColor: 'bg-blue-100',
        containerBorder: 'border-blue-100',
    },
    {
        title: '📅 Date Calculator',
        description: 'Add or subtract days from dates.',
        href: '/convert/date',
        icon: <BsCalendarDate size={26} color="red" />,
        color: 'bg-red-50/50',
        bgColor: 'bg-red-100',
        containerBorder: 'border-red-100',
    },
    {
        title: '📐 Math Helper',
        description: 'Find how many times A fits into B.',
        href: '/convert/math',
        icon: <BiMath size={26} color="green" />,
        color: 'bg-green-50/50',
        bgColor: 'bg-green-100',
        containerBorder: 'border-green-100',
    },
];

export default function ConverterList() {
    return (
        <section className="grid gap-6 px-4 sm:grid-cols-2 lg:grid-cols-3 py-16 max-w-6xl mx-auto">
            {converters.map((converter) => (
                <ConverterCard key={converter.title} {...converter} />
            ))}
        </section>
    );
}
